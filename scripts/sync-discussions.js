#!/usr/bin/env node

/**
 * Sync Articles with GitHub Discussions
 * 
 * This script:
 * 1. Scans all markdown files in src/routes/posts and src/routes/portfolio
 * 2. Checks if a discussion exists for each article
 * 3. Creates a new discussion if one doesn't exist
 * 4. Stores discussion numbers in a mapping file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../.env') });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN;
const OWNER = 'skamansam';
const REPO = 'skamansam.github.io';
const DISCUSSION_CATEGORY = 'Blog Entries';
const MAPPING_FILE = path.join(__dirname, '../.discussions-mapping.json');

// Directories to scan for articles
const CONTENT_DIRS = [
  path.join(__dirname, '../src/routes/posts'),
  path.join(__dirname, '../src/routes/portfolio')
];

/**
 * Load existing discussion mappings
 */
function loadMappings() {
  if (fs.existsSync(MAPPING_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf-8'));
    } catch (error) {
      console.warn('Warning: Could not parse mappings file, starting fresh');
      return {};
    }
  }
  return {};
}

/**
 * Save discussion mappings
 */
function saveMappings(mappings) {
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(mappings, null, 2));
  console.log(`✓ Saved mappings to ${MAPPING_FILE}`);
}

/**
 * Get all markdown files from content directories
 */
function getMarkdownFiles() {
  const files = [];
  
  for (const dir of CONTENT_DIRS) {
    if (!fs.existsSync(dir)) {
      console.warn(`Warning: Directory ${dir} does not exist`);
      continue;
    }
    
    const dirFiles = fs.readdirSync(dir)
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        path: path.join(dir, file),
        relativePath: path.relative(path.join(__dirname, '..'), path.join(dir, file))
      }));
    
    files.push(...dirFiles);
  }
  
  return files;
}

/**
 * Parse frontmatter from markdown file
 */
function parseArticle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: body } = matter(content);
    
    // Skip drafts
    if (data.draft === true) {
      return null;
    }
    
    // Skip pages that aren't articles (like +page.md files without proper frontmatter)
    if (!data.title) {
      return null;
    }
    
    return {
      title: data.title,
      description: data.description || data.excerpt || '',
      body: body.substring(0, 500) + (body.length > 500 ? '...' : ''), // First 500 chars
      fullBody: body,
      created_at: data.created_at,
      updated_at: data.updated_at,
      tags: data.tags || [],
      categories: data.categories || []
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Make a GraphQL request to GitHub
 */
async function graphqlRequest(query, variables = {}) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GITHUB_TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  });
  
  const result = await response.json();
  
  if (result.errors) {
    throw new Error(`GraphQL Error: ${result.errors[0].message}`);
  }
  
  return result.data;
}

/**
 * Get repository ID and category ID
 */
async function getRepoAndCategoryIds() {
  const query = `
    query($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        id
        discussionCategories(first: 20) {
          nodes {
            id
            name
          }
        }
      }
    }
  `;
  
  const data = await graphqlRequest(query, { owner: OWNER, repo: REPO });
  const repository = data.repository;
  
  const category = repository.discussionCategories.nodes.find(
    cat => cat.name === DISCUSSION_CATEGORY
  );
  
  if (!category) {
    throw new Error(
      `Category "${DISCUSSION_CATEGORY}" not found. Available categories: ${
        repository.discussionCategories.nodes.map(c => c.name).join(', ')
      }`
    );
  }
  
  return {
    repositoryId: repository.id,
    categoryId: category.id
  };
}

/**
 * Search for existing discussion by title
 */
async function findDiscussionByTitle(title) {
  const query = `
    query($searchQuery: String!) {
      search(query: $searchQuery, type: DISCUSSION, first: 5) {
        nodes {
          ... on Discussion {
            id
            number
            title
            url
          }
        }
      }
    }
  `;
  
  const searchQuery = `repo:${OWNER}/${REPO} "${title}" in:title`;
  const data = await graphqlRequest(query, { searchQuery });
  
  // Find exact match
  const exactMatch = data.search.nodes.find(
    node => node.title === title
  );
  
  return exactMatch || null;
}

/**
 * Create a new discussion
 */
async function createDiscussion(repositoryId, categoryId, article, filePath) {
  const mutation = `
    mutation($repositoryId: ID!, $categoryId: ID!, $title: String!, $body: String!) {
      createDiscussion(input: {
        repositoryId: $repositoryId,
        categoryId: $categoryId,
        title: $title,
        body: $body
      }) {
        discussion {
          id
          number
          title
          url
        }
      }
    }
  `;
  
  // Create discussion body with article info
  const discussionBody = `
# ${article.title}

${article.description}

---

**Article URL:** [Read the full article](https://rudeboy.dev/${filePath.replace(/^src\/routes\//, '').replace(/\.md$/, '')})

${article.tags.length > 0 ? `**Tags:** ${article.tags.join(', ')}` : ''}
${article.categories.length > 0 ? `**Categories:** ${article.categories.join(', ')}` : ''}

---

💬 **Discussion thread for this article.** Feel free to share your thoughts, ask questions, or provide feedback!
  `.trim();
  
  const data = await graphqlRequest(mutation, {
    repositoryId,
    categoryId,
    title: article.title,
    body: discussionBody
  });
  
  return data.createDiscussion.discussion;
}

/**
 * Main sync function
 */
async function syncDiscussions() {
  console.log('🔄 Starting discussion sync...\n');
  
  // Check for GitHub token
  if (!GITHUB_TOKEN) {
    console.error('❌ Error: GITHUB_TOKEN or VITE_GITHUB_TOKEN environment variable is required');
    process.exit(1);
  }
  
  // Load existing mappings
  const mappings = loadMappings();
  let updated = false;
  
  // Get repository and category IDs
  console.log('📡 Fetching repository information...');
  const { repositoryId, categoryId } = await getRepoAndCategoryIds();
  console.log(`✓ Found repository and category "${DISCUSSION_CATEGORY}"\n`);
  
  // Get all markdown files
  const files = getMarkdownFiles();
  console.log(`📄 Found ${files.length} markdown files\n`);
  
  let created = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const file of files) {
    const article = parseArticle(file.path);
    
    if (!article) {
      skipped++;
      continue;
    }
    
    console.log(`Processing: ${article.title}`);
    
    try {
      // Check if we already have a mapping
      if (mappings[file.relativePath]) {
        console.log(`  ✓ Already mapped to discussion #${mappings[file.relativePath].number}`);
        skipped++;
        continue;
      }
      
      // Search for existing discussion
      const existing = await findDiscussionByTitle(article.title);
      
      if (existing) {
        console.log(`  ✓ Found existing discussion #${existing.number}`);
        mappings[file.relativePath] = {
          discussionNumber: existing.number,
          discussionId: existing.id,
          discussionUrl: existing.url,
          title: article.title,
          synced_at: new Date().toISOString()
        };
        updated = true;
        skipped++;
      } else {
        // Create new discussion
        console.log(`  📝 Creating new discussion...`);
        const discussion = await createDiscussion(repositoryId, categoryId, article, file.relativePath);
        console.log(`  ✓ Created discussion #${discussion.number}: ${discussion.url}`);
        
        mappings[file.relativePath] = {
          discussionNumber: discussion.number,
          discussionId: discussion.id,
          discussionUrl: discussion.url,
          title: article.title,
          synced_at: new Date().toISOString()
        };
        updated = true;
        created++;
        
        // Rate limiting: wait a bit between creates
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
      errors++;
    }
    
    console.log('');
  }
  
  // Save mappings if updated
  if (updated) {
    saveMappings(mappings);
    
    // Also copy to static directory so it's available at runtime
    const staticMappingPath = path.join(__dirname, '../static/.discussions-mapping.json');
    fs.writeFileSync(staticMappingPath, JSON.stringify(mappings, null, 2));
    console.log(`✓ Copied mappings to static directory`);
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 Sync Summary:');
  console.log(`   Created: ${created}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Errors: ${errors}`);
  console.log(`   Total: ${files.length}`);
  console.log('='.repeat(50) + '\n');
  
  if (errors > 0) {
    process.exit(1);
  }
}

// Run the sync
syncDiscussions().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
