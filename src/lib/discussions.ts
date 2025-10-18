/**
 * Helper functions for GitHub Discussions integration
 */

interface DiscussionMapping {
  discussionNumber: number;
  discussionId: string;
  discussionUrl: string;
  title: string;
  synced_at: string;
}

interface DiscussionMappings {
  [filePath: string]: DiscussionMapping;
}

let mappingsCache: DiscussionMappings | null = null;

/**
 * Load discussion mappings from the generated JSON file
 */
export async function loadDiscussionMappings(): Promise<DiscussionMappings> {
  if (mappingsCache) {
    return mappingsCache;
  }

  try {
    // In production, this file is generated during build
    const response = await fetch('/.discussions-mapping.json');
    if (response.ok) {
      const data = await response.json();
      mappingsCache = data;
      return data;
    }
  } catch (error) {
    console.warn('Could not load discussion mappings:', error);
  }

  mappingsCache = {};
  return {};
}

/**
 * Get discussion number for a given article path
 */
export async function getDiscussionNumber(articlePath: string): Promise<number | undefined> {
  const mappings = await loadDiscussionMappings();
  
  // Try exact match first
  if (mappings[articlePath]) {
    return mappings[articlePath].discussionNumber;
  }
  
  // Try with different path formats
  const normalizedPath = articlePath
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .replace(/\.md$/, '');
  
  for (const [path, mapping] of Object.entries(mappings)) {
    const normalizedMappingPath = path
      .replace(/^src\/routes\//, '')
      .replace(/\.md$/, '');
    
    if (normalizedMappingPath === normalizedPath) {
      return mapping.discussionNumber;
    }
  }
  
  return undefined;
}

/**
 * Get discussion info for a given article title
 */
export async function getDiscussionByTitle(title: string): Promise<DiscussionMapping | undefined> {
  const mappings = await loadDiscussionMappings();
  
  for (const mapping of Object.values(mappings)) {
    if (mapping.title === title) {
      return mapping;
    }
  }
  
  return undefined;
}
