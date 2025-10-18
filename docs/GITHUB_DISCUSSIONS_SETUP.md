# GitHub Discussions Comments Setup

This project uses GitHub Discussions as a commenting system for blog posts. The `GitHubDiscussions` component integrates with the GitHub GraphQL API to fetch and post comments.

## Features

- 🔄 **Automatic Discussion Creation**: Discussions are created automatically when the first comment is posted
- 💬 **Real-time Comments**: Fetch and display comments from GitHub Discussions
- ✍️ **Post Comments**: Allow users to post comments directly from your blog
- 🎨 **Responsive Design**: Mobile-friendly comment interface
- 🔒 **Secure**: Uses GitHub's authentication system

## Setup Instructions

### 1. Enable GitHub Discussions

First, enable Discussions on your GitHub repository:

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **Features**
4. Check **Discussions**
5. Click **Set up discussions**

### 2. Create a GitHub Personal Access Token

You need a GitHub Personal Access Token (PAT) to interact with the GitHub API:

1. Go to [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens/new)
2. Click **Generate new token (classic)**
3. Give it a descriptive name (e.g., "Blog Comments")
4. Set an expiration date (or select "No expiration" for convenience)
5. Select the following scopes:
   - `public_repo` (Access public repositories)
   - `read:discussion` (Read discussions)
   - `write:discussion` (Write discussions)
6. Click **Generate token**
7. **Copy the token immediately** (you won't be able to see it again)

### 3. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your GitHub token:
   ```env
   VITE_GITHUB_TOKEN=ghp_your_token_here
   ```

3. **Important**: Never commit your `.env` file to version control. It's already in `.gitignore`.

### 4. Component Usage

The component is already integrated into the post layout (`src/layouts/post.svelte`). Each blog post will automatically have a comments section.

#### Props

- `owner` (required): GitHub username or organization
- `repo` (required): Repository name
- `postTitle` (required): Title of the blog post (used to find/create discussions)
- `discussionNumber` (optional): Specific discussion number if you want to link to an existing discussion
- `discussionCategory` (optional): Category for new discussions (default: "General")

#### Example Usage

```svelte
<GitHubDiscussions 
  owner="skamansam"
  repo="skamansam.github.io"
  postTitle={title}
  discussionCategory="Blog Comments"
/>
```

## How It Works

### Automatic Discussion Creation (New!)

Discussions are now created **automatically during deployment**:

1. When you push to the `svelte` branch, a sync script runs before building
2. The script scans all published articles (non-draft markdown files)
3. For each article, it checks if a discussion exists
4. If not, it creates a new discussion in the "Blog Entries" category
5. A mapping file is generated linking articles to their discussions
6. The site is built and deployed with the mapping file

See [SYNC_DISCUSSIONS.md](./SYNC_DISCUSSIONS.md) for detailed information about the sync process.

### Viewing Comments
1. When a user visits a blog post, the component loads the discussion number from the mapping file
2. Comments are fetched from the GitHub Discussions API
3. Each comment shows:
   - Author's avatar and username
   - Comment content (rendered as HTML with Markdown support)
   - Timestamp
   - Link to view on GitHub

### Posting Comments
1. User writes a comment in the textarea
2. The comment is posted to the existing discussion via GitHub's GraphQL API
3. The comment appears immediately in the list

## Discussion Categories

**Important**: You must create a "Blog Entries" category in your repository:

1. Go to your repository's Discussions tab
2. Click the gear icon next to "Categories"
3. Create a new category called **"Blog Entries"** (exact name)
4. (Optional) Add a description and emoji

The sync script uses this category by default. To use a different category, edit the `DISCUSSION_CATEGORY` constant in `scripts/sync-discussions.js`.

## Deployment Considerations

### Static Site Generation

If you're using static site generation (adapter-static), the comments will be loaded client-side after the page loads. This means:

- Initial page load won't include comments (good for SEO)
- Comments are fetched dynamically when users visit
- No build-time API calls needed

### Environment Variables in Production

For production deployments:

1. **Netlify**: Add `VITE_GITHUB_TOKEN` in Site settings > Build & deploy > Environment
2. **Vercel**: Add in Project Settings > Environment Variables
3. **GitHub Pages**: You can't use server-side environment variables, but the token is only used client-side, so it will work if included in the build

**Security Note**: The `VITE_` prefix means this variable is exposed to the client. Only use tokens with minimal permissions (public_repo, read/write discussions only).

## Troubleshooting

### "GitHub token not configured" error
- Make sure you've created a `.env` file with `VITE_GITHUB_TOKEN`
- Restart your dev server after adding the environment variable

### "Category not found" error
- Check that the category name matches exactly (case-sensitive)
- Verify the category exists in your repository's Discussions settings

### Comments not loading
- Check browser console for API errors
- Verify your token has the correct permissions
- Ensure Discussions are enabled on your repository

### Rate Limiting
- GitHub API has rate limits (5,000 requests/hour for authenticated requests)
- The component caches comments during the page session
- Consider implementing additional caching if you have high traffic

## Customization

### Styling

The component uses CSS custom properties for theming. You can override these in your global CSS:

```css
.github-discussions {
  --border-color: #e1e4e8;
  --comment-bg: #ffffff;
  --link-color: #0366d6;
  --button-bg: #2ea44f;
  --button-hover-bg: #2c974b;
  --text-muted: #586069;
  --error-bg: #ffeef0;
  --error-text: #d73a49;
}
```

### Disabling Comments on Specific Posts

To disable comments on a specific post, you can conditionally render the component:

```svelte
{#if !noComments}
  <GitHubDiscussions 
    owner="skamansam"
    repo="skamansam.github.io"
    postTitle={title}
  />
{/if}
```

## Alternative: Public Comments Without Token

If you don't want to use a token (read-only mode):

1. Remove the token from `.env`
2. The component will show a link to comment on GitHub instead
3. Users will be redirected to GitHub to post comments
4. Comments will still be displayed (fetching is possible without auth, with lower rate limits)

## Resources

- [GitHub GraphQL API Documentation](https://docs.github.com/en/graphql)
- [GitHub Discussions API](https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions)
- [Creating a Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
