# Quick Start: GitHub Discussions Comments

Get comments working on your blog in 5 minutes!

## Step 1: Enable Discussions on GitHub

1. Go to your repository: https://github.com/skamansam/skamansam.github.io
2. Click **Settings** → **Features** → Check **Discussions**
3. Go to the **Discussions** tab
4. Click the gear icon next to "Categories"
5. Create a new category called **"Blog Entries"**

## Step 2: Create GitHub Tokens

You need **two tokens** for security (read-only for browser, write for server):

### Read-Only Token (for displaying comments)
1. Visit: https://github.com/settings/tokens/new
2. Name: "Blog Comments (Read-Only)"
3. Select scopes:
   - ✅ `read:discussion`
4. Click **Generate token**
5. **Copy the token**

### Write Token (for creating discussions)
1. Visit: https://github.com/settings/tokens/new
2. Name: "Blog Comments (Write)"
3. Select scopes:
   - ✅ `public_repo`
   - ✅ `read:discussion`
   - ✅ `write:discussion`
4. Click **Generate token**
5. **Copy the token**

## Step 3: Configure Your Environment

```bash
# Install dependencies (includes dotenv for loading .env)
pnpm install

# Copy the example file
cp .env.example .env

# Edit .env and paste BOTH tokens:
# VITE_GITHUB_TOKEN_READONLY=ghp_your_readonly_token_here
# GITHUB_TOKEN=ghp_your_write_token_here
```

**Why two tokens?** The read-only token is exposed in your browser (safe), while the write token stays server-side (secure). See [TOKEN_SECURITY.md](docs/TOKEN_SECURITY.md) for details.

## Step 4: Restart Dev Server

```bash
# Stop your current dev server (Ctrl+C)
# Start it again
pnpm dev
```

## Step 5: Test Locally (Optional)

```bash
# Test the sync script locally
export GITHUB_TOKEN=ghp_your_token_here
pnpm sync-discussions

# Start dev server
pnpm dev
```

## Step 6: Deploy!

Push your changes to the `svelte` branch:

```bash
git add .
git commit -m "Add GitHub Discussions comments"
git push origin svelte
```

The GitHub Actions workflow will:
1. Run the sync script to create discussions for all articles
2. Build your site
3. Deploy to GitHub Pages

## Step 7: Test It!

1. Wait for the deployment to complete (~2-3 minutes)
2. Open any blog post on your live site
3. Scroll to the bottom
4. You should see the comments section with a link to the discussion!

## That's It! 🎉

Comments are now enabled on all your blog posts. Each post automatically gets its own discussion thread during deployment.

---

**Need help?** See the full guides:
- [Setup Guide](docs/GITHUB_DISCUSSIONS_SETUP.md) - Complete setup instructions
- [Sync Guide](docs/SYNC_DISCUSSIONS.md) - How the automatic sync works
