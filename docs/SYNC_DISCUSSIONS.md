# Syncing Articles with GitHub Discussions

This document explains how the automatic discussion sync works for blog articles.

## Overview

Instead of creating discussions on-demand when users post comments, discussions are now created **automatically during the deployment process**. This ensures:

- Every published article has a discussion thread ready
- Discussion URLs are consistent and predictable
- Better SEO and social sharing (discussions exist before first comment)
- Cleaner user experience (no "waiting for discussion creation" states)

## How It Works

### 1. Pre-Deployment Sync

When you push to the `svelte` branch, the GitHub Actions workflow:

1. Checks out the code
2. Installs dependencies
3. **Runs `pnpm sync-discussions`** ← This is the key step
4. Builds the site
5. Deploys to GitHub Pages

### 2. The Sync Script

The `scripts/sync-discussions.js` script:

- Scans all markdown files in `src/routes/posts/` and `src/routes/portfolio/`
- Parses frontmatter to extract article metadata
- Skips draft articles (`draft: true`)
- For each published article:
  - Checks if a discussion already exists (by title)
  - If not, creates a new discussion in the "Blog Entries" category
  - Stores the mapping in `.discussions-mapping.json`

### 3. Discussion Content

Each created discussion includes:

- **Title**: The article title
- **Body**: Article description, URL, tags, and categories
- **Category**: "Blog Entries" (configurable)

Example discussion body:
```markdown
# From Zero to Hero with README-Driven Development

Learn how README-Driven Development helps you build better software...

---

**Article URL:** [Read the full article](https://rudeboy.dev/posts/2025-10-17-from-zero-to-hero)

**Tags:** development, methodology, best-practices, documentation
**Categories:** Software Development

---

💬 **Discussion thread for this article.** Feel free to share your thoughts!
```

### 4. Runtime Integration

The `GitHubDiscussions` component:

- Loads the `.discussions-mapping.json` file at runtime
- Looks up the discussion number for the current article
- Fetches and displays comments from that discussion
- Allows users to post new comments

## Files Involved

### Script Files
- `scripts/sync-discussions.js` - Main sync script
- `src/lib/discussions.ts` - Helper functions for loading mappings

### Data Files
- `.discussions-mapping.json` - Local mapping file (gitignored)
- `static/.discussions-mapping.json` - Public mapping file (deployed)

### Configuration
- `.github/workflows/deploy.yml` - CI/CD workflow
- `package.json` - Script definitions

## Running Manually

You can run the sync script manually:

```bash
# Make sure dependencies are installed
pnpm install

# Create .env file with your token
# VITE_GITHUB_TOKEN=ghp_your_token_here

# Run the sync
pnpm sync-discussions
```

The script automatically loads the `.env` file from the project root.

This is useful for:
- Testing the sync process
- Creating discussions for existing articles
- Debugging issues

## Discussion Category Setup

The script uses the "Blog Entries" category by default. To set this up:

1. Go to your repository's Discussions tab
2. Click the gear icon next to "Categories"
3. Create a new category called "Blog Entries"
4. (Optional) Set a description and emoji

To use a different category, edit the `DISCUSSION_CATEGORY` constant in `scripts/sync-discussions.js`.

## Mapping File Format

The `.discussions-mapping.json` file has this structure:

```json
{
  "src/routes/posts/2025-10-17-from-zero-to-hero.md": {
    "discussionNumber": 42,
    "discussionId": "D_kwDOABCDEF4ABCDE",
    "discussionUrl": "https://github.com/skamansam/skamansam.github.io/discussions/42",
    "title": "From Zero to Hero with README-Driven Development",
    "synced_at": "2025-10-17T03:30:00.000Z"
  }
}
```

## Troubleshooting

### "Category 'Blog Entries' not found"

**Solution**: Create the category in your repository's Discussions settings, or change the category name in the script.

### Script fails with authentication error

**Solution**: Make sure `GITHUB_TOKEN` is set in your GitHub Actions secrets and has the correct permissions:
- `public_repo` or `repo`
- `read:discussion`
- `write:discussion`

### Discussions created with wrong content

**Solution**: The script only creates discussions that don't exist. To recreate:
1. Delete the discussion on GitHub
2. Remove the entry from `.discussions-mapping.json`
3. Run the sync script again

### Mapping file not found at runtime

**Solution**: Make sure the sync script runs before the build step in your CI/CD workflow. The script copies the mapping to `static/` directory.

## Rate Limiting

GitHub API has rate limits:
- **Authenticated**: 5,000 requests/hour
- **Unauthenticated**: 60 requests/hour

The sync script:
- Uses authenticated requests (via `GITHUB_TOKEN`)
- Adds a 1-second delay between creating discussions
- Skips articles that already have discussions

For a blog with 100 articles, the initial sync takes ~2 minutes. Subsequent syncs are much faster (only new articles).

## Best Practices

### 1. Keep Titles Stable

The sync script matches discussions by title. If you change an article title:
- A new discussion will be created
- The old discussion will remain orphaned
- Comments will be split across two discussions

**Solution**: If you must change a title, manually update the discussion title on GitHub to match.

### 2. Don't Delete Discussions Manually

If you delete a discussion on GitHub:
- The mapping file will still reference it
- The component will fail to load comments
- The sync script won't recreate it (it checks by title, not by mapping)

**Solution**: Remove the entry from `.discussions-mapping.json` and re-run the sync.

### 3. Handle Drafts Properly

Articles with `draft: true` are skipped during sync. When you publish:
- Remove the `draft: true` flag
- Push to the `svelte` branch
- The sync will automatically create the discussion

## Advanced: Custom Sync Logic

You can customize the sync script to:

### Change Discussion Body Format

Edit the `createDiscussion` function in `scripts/sync-discussions.js`:

```javascript
const discussionBody = `
Your custom format here...
${article.title}
${article.description}
`;
```

### Add Custom Metadata

Extend the mapping file to include additional data:

```javascript
mappings[file.relativePath] = {
  discussionNumber: discussion.number,
  discussionId: discussion.id,
  discussionUrl: discussion.url,
  title: article.title,
  synced_at: new Date().toISOString(),
  // Add custom fields
  articlePath: file.relativePath,
  tags: article.tags,
  author: article.author
};
```

### Sync Different Content Types

Add more directories to the `CONTENT_DIRS` array:

```javascript
const CONTENT_DIRS = [
  path.join(__dirname, '../src/routes/posts'),
  path.join(__dirname, '../src/routes/portfolio'),
  path.join(__dirname, '../src/routes/tutorials'),  // Add more
];
```

## Migration from Manual Creation

If you were previously creating discussions manually:

1. Run the sync script once to create mappings for existing discussions
2. The script will find existing discussions by title and map them
3. No duplicate discussions will be created
4. New articles will get discussions automatically

## Summary

The automatic sync ensures:
- ✅ Discussions exist before deployment
- ✅ Consistent discussion URLs
- ✅ No runtime discussion creation
- ✅ Better performance (no API calls during page load for creation)
- ✅ Simpler component logic
- ✅ Better user experience

The trade-off is that you need a GitHub token with write permissions in your CI/CD environment, but this is a one-time setup.
