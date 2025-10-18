# GitHub Token Security

This document explains the two-token security approach for GitHub Discussions integration.

## Overview

The system uses **two separate tokens** with different permission levels:

1. **Read-Only Token** (`VITE_GITHUB_TOKEN_READONLY`) - For displaying comments
2. **Write Token** (`GITHUB_TOKEN`) - For creating discussions and posting comments

## Why Two Tokens?

### Security Principle: Least Privilege

The read-only token is **exposed to the client** (browser) because it's prefixed with `VITE_`. This means anyone can see it by inspecting your website's JavaScript.

By using a read-only token for public display:
- ✅ Users can view comments without risk
- ✅ If the token is compromised, attackers can only read public data
- ✅ No one can post spam or malicious comments using the exposed token
- ✅ No one can create or modify discussions

The write token is **never exposed to the client**:
- ✅ Only used in the sync script (server-side during build)
- ✅ Only used in GitHub Actions (secure environment)
- ✅ Can be rotated without updating deployed code

## Token Permissions

### Read-Only Token (Client-Side)

**Environment Variable**: `VITE_GITHUB_TOKEN_READONLY`

**Required Permissions**:
- `read:discussion` - Read discussions and comments

**Optional Permissions**:
- `public_repo` - Only if you want to display discussions from public repos (usually not needed)

**Where It's Used**:
- `GitHubDiscussions.svelte` component - Fetching discussions and comments
- Exposed in browser JavaScript (visible to users)

### Write Token (Server-Side)

**Environment Variable**: `GITHUB_TOKEN`

**Required Permissions**:
- `public_repo` or `repo` - Access to repository
- `read:discussion` - Read discussions
- `write:discussion` - Create and modify discussions

**Where It's Used**:
- `scripts/sync-discussions.js` - Creating discussions during build
- GitHub Actions workflow - Automated sync on deployment
- `GitHubDiscussions.svelte` component - Posting comments (if enabled)

## Setup Instructions

### 1. Create Read-Only Token

1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens/new)
2. Name: "Blog Comments (Read-Only)"
3. Expiration: Choose a long duration (1 year or no expiration)
4. Select scopes:
   - ✅ `read:discussion`
5. Click **Generate token**
6. Copy the token

### 2. Create Write Token

1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens/new)
2. Name: "Blog Comments (Write)"
3. Expiration: Choose based on your security policy
4. Select scopes:
   - ✅ `public_repo` (or `repo` for private repos)
   - ✅ `read:discussion`
   - ✅ `write:discussion`
5. Click **Generate token**
6. Copy the token

### 3. Configure Locally

Edit your `.env` file:

```env
# Read-only token (safe to expose in browser)
VITE_GITHUB_TOKEN_READONLY=ghp_your_readonly_token_here

# Write token (never exposed to browser)
GITHUB_TOKEN=ghp_your_write_token_here
```

### 4. Configure GitHub Actions

The write token is automatically available in GitHub Actions as `secrets.GITHUB_TOKEN`. No additional configuration needed!

The default `GITHUB_TOKEN` provided by GitHub Actions already has the necessary permissions for your repository.

## Token Rotation

### Rotating the Read-Only Token

Since this token is exposed in your deployed site:

1. Create a new read-only token
2. Update `VITE_GITHUB_TOKEN_READONLY` in your `.env`
3. Rebuild and redeploy your site
4. Revoke the old token after deployment

### Rotating the Write Token

Since this token is only used during build:

1. Create a new write token
2. Update `GITHUB_TOKEN` in your `.env` (for local development)
3. Update GitHub Actions secret if you're using a custom token
4. Revoke the old token

## Security Best Practices

### ✅ DO

- Use separate tokens for read and write operations
- Set appropriate expiration dates on tokens
- Rotate tokens periodically
- Use the default GitHub Actions token when possible
- Keep write tokens in `.env` (gitignored)
- Monitor token usage in GitHub settings

### ❌ DON'T

- Don't use a write token for client-side operations
- Don't commit tokens to version control
- Don't share tokens between projects
- Don't use personal tokens with excessive permissions
- Don't expose write tokens in environment variables prefixed with `VITE_`

## Disabling Client-Side Posting

If you want to completely disable posting comments from the browser (most secure):

1. Remove or leave empty `VITE_GITHUB_TOKEN` in `.env`
2. Only set `VITE_GITHUB_TOKEN_READONLY`
3. Users will see a link to comment on GitHub instead of a comment form

This is the **most secure** option because:
- No write operations happen in the browser
- All comments go through GitHub's interface
- Better spam protection (GitHub's rate limiting and moderation)
- No risk of token abuse

## Troubleshooting

### "GitHub token not configured" error

**Cause**: `VITE_GITHUB_TOKEN_READONLY` is not set

**Solution**: Add the read-only token to your `.env` file

### Comments display but can't post

**Cause**: `VITE_GITHUB_TOKEN` (write token) is not set

**Solution**: This is expected if you only want read-only mode. Users can click the link to comment on GitHub.

### Sync script fails with authentication error

**Cause**: `GITHUB_TOKEN` (write token) is not set or has insufficient permissions

**Solution**: Ensure the write token has `public_repo`, `read:discussion`, and `write:discussion` permissions

## Migration from Single Token

If you were using `VITE_GITHUB_TOKEN` for everything:

1. Create a new read-only token
2. Set `VITE_GITHUB_TOKEN_READONLY` in `.env`
3. Rename `VITE_GITHUB_TOKEN` to `GITHUB_TOKEN` (or create a new write token)
4. Rebuild and redeploy

The component has backward compatibility - if `VITE_GITHUB_TOKEN_READONLY` is not set, it will fall back to `VITE_GITHUB_TOKEN`.

## Summary

| Token | Variable | Exposed? | Permissions | Used For |
|-------|----------|----------|-------------|----------|
| Read-Only | `VITE_GITHUB_TOKEN_READONLY` | ✅ Yes (browser) | `read:discussion` | Displaying comments |
| Write | `GITHUB_TOKEN` | ❌ No (server) | `public_repo`, `read:discussion`, `write:discussion` | Creating discussions, posting comments |
| Legacy | `VITE_GITHUB_TOKEN` | ✅ Yes (browser) | Any | Backward compatibility fallback |

This two-token approach provides **defense in depth** - even if the read-only token is compromised, your discussions remain protected from unauthorized modifications.
