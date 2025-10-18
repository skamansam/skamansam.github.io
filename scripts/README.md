# Scripts

This directory contains automation scripts for the blog.

## sync-discussions.js

Automatically creates GitHub Discussions for blog articles.

### Usage

```bash
# Option 1: Use .env file (recommended)
# 1. Create .env file with VITE_GITHUB_TOKEN=ghp_your_token_here
# 2. Run the sync
pnpm sync-discussions

# Option 2: Set environment variable directly
export GITHUB_TOKEN=ghp_your_token_here
pnpm sync-discussions

# Option 3: Run script directly
node scripts/sync-discussions.js
```

The script automatically loads environment variables from `.env` file in the project root.

### What it does

1. Scans all markdown files in:
   - `src/routes/posts/`
   - `src/routes/portfolio/`

2. For each published article (not draft):
   - Parses frontmatter to get title and metadata
   - Checks if a discussion already exists (by title)
   - Creates a new discussion if needed
   - Stores the mapping in `.discussions-mapping.json`

3. Copies the mapping file to `static/` for runtime access

### Configuration

Edit these constants at the top of the file:

```javascript
const OWNER = 'skamansam';                    // GitHub username
const REPO = 'skamansam.github.io';           // Repository name
const DISCUSSION_CATEGORY = 'Blog Entries';   // Discussion category
```

### Output

The script generates two files:

- `.discussions-mapping.json` - Local mapping (gitignored)
- `static/.discussions-mapping.json` - Public mapping (deployed)

### Requirements

- Node.js 18+
- `GITHUB_TOKEN` environment variable with permissions:
  - `public_repo` or `repo`
  - `read:discussion`
  - `write:discussion`

### CI/CD Integration

This script runs automatically in GitHub Actions before each deployment.

See `.github/workflows/deploy.yml` for the workflow configuration.

### Troubleshooting

**Error: Category "Blog Entries" not found**
- Create the category in your repository's Discussions settings

**Error: GITHUB_TOKEN not set**
- Set the environment variable before running

**Discussions created with wrong content**
- Delete the discussion on GitHub
- Remove the entry from `.discussions-mapping.json`
- Run the script again

### Documentation

- [Sync Process Details](../docs/SYNC_DISCUSSIONS.md)
- [Setup Guide](../docs/GITHUB_DISCUSSIONS_SETUP.md)
