# Quick Start: GitHub Discussions Comments

Get comments working on your blog in 5 minutes!

## Step 1: Enable Discussions on GitHub

1. Go to your repository: https://github.com/skamansam/skamansam.github.io
2. Click **Settings** → **Features** → Check **Discussions**

## Step 2: Create a GitHub Token

1. Visit: https://github.com/settings/tokens/new
2. Name: "Blog Comments"
3. Select scopes:
   - ✅ `public_repo`
   - ✅ `read:discussion`
   - ✅ `write:discussion`
4. Click **Generate token**
5. **Copy the token** (you won't see it again!)

## Step 3: Configure Your Environment

```bash
# Copy the example file
cp .env.example .env

# Edit .env and paste your token
# VITE_GITHUB_TOKEN=ghp_your_token_here
```

## Step 4: Restart Dev Server

```bash
# Stop your current dev server (Ctrl+C)
# Start it again
pnpm dev
```

## Step 5: Test It!

1. Open any blog post in your browser
2. Scroll to the bottom
3. You should see the comments section
4. Try posting a test comment!

## That's It! 🎉

Comments are now enabled on all your blog posts. Each post will automatically get its own discussion thread.

---

**Need help?** See the full [setup guide](docs/GITHUB_DISCUSSIONS_SETUP.md) for troubleshooting and advanced configuration.
