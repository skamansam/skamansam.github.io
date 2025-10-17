<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		repo: string;
		owner: string;
		discussionNumber?: number;
		discussionCategory?: string;
		postTitle?: string;
	}

	interface Comment {
		id: string;
		author: {
			login: string;
			avatarUrl: string;
			url: string;
		};
		bodyHTML: string;
		createdAt: string;
		url: string;
	}

	interface Discussion {
		id: string;
		number: number;
		title: string;
		url: string;
		comments: {
			nodes: Comment[];
			totalCount: number;
		};
	}

	let {
		repo,
		owner,
		discussionNumber = $bindable(),
		discussionCategory = 'General',
		postTitle = ''
	}: Props = $props();

	let discussion = $state<Discussion | null>(null);
	let comments = $state<Comment[]>([]);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let newComment = $state('');
	let posting = $state(false);

	const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

	async function fetchDiscussion() {
		if (!discussionNumber) {
			// Try to find or create discussion by title
			await findOrCreateDiscussion();
			return;
		}

		loading = true;
		error = null;

		try {
			const query = `
				query($owner: String!, $repo: String!, $number: Int!) {
					repository(owner: $owner, name: $repo) {
						discussion(number: $number) {
							id
							number
							title
							url
							comments(first: 100) {
								totalCount
								nodes {
									id
									author {
										login
										avatarUrl
										url
									}
									bodyHTML
									createdAt
									url
								}
							}
						}
					}
				}
			`;

			const response = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${GITHUB_TOKEN}`
				},
				body: JSON.stringify({
					query,
					variables: { owner, repo, number: discussionNumber }
				})
			});

			const result = await response.json();

			if (result.errors) {
				throw new Error(result.errors[0].message);
			}

			discussion = result.data.repository.discussion;
			comments = discussion?.comments.nodes || [];
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to load comments';
			console.error('Error fetching discussion:', err);
		} finally {
			loading = false;
		}
	}

	async function findOrCreateDiscussion() {
		if (!postTitle) {
			error = 'Post title is required to create a discussion';
			loading = false;
			return;
		}

		try {
			// First, try to find existing discussion
			const searchQuery = `
				query($owner: String!, $repo: String!, $query: String!) {
					search(query: $query, type: DISCUSSION, first: 1) {
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

			const searchResponse = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${GITHUB_TOKEN}`
				},
				body: JSON.stringify({
					query: searchQuery,
					variables: {
						owner,
						repo,
						query: `repo:${owner}/${repo} "${postTitle}" in:title`
					}
				})
			});

			const searchResult = await searchResponse.json();

			if (searchResult.data?.search?.nodes?.[0]) {
				discussionNumber = searchResult.data.search.nodes[0].number;
				await fetchDiscussion();
			} else {
				// Discussion doesn't exist, we'll show a message
				loading = false;
				error =
					'No discussion found for this post. A discussion will be created when the first comment is posted.';
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to find discussion';
			console.error('Error finding discussion:', err);
			loading = false;
		}
	}

	async function createDiscussion() {
		if (!postTitle) {
			error = 'Post title is required';
			return;
		}

		try {
			// First, get the category ID
			const categoryQuery = `
				query($owner: String!, $repo: String!) {
					repository(owner: $owner, name: $repo) {
						discussionCategories(first: 10) {
							nodes {
								id
								name
							}
						}
					}
				}
			`;

			const categoryResponse = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${GITHUB_TOKEN}`
				},
				body: JSON.stringify({
					query: categoryQuery,
					variables: { owner, repo }
				})
			});

			const categoryResult = await categoryResponse.json();
			const category = categoryResult.data.repository.discussionCategories.nodes.find(
				(cat: { name: string }) => cat.name === discussionCategory
			);

			if (!category) {
				throw new Error(`Category "${discussionCategory}" not found`);
			}

			// Create the discussion
			const createQuery = `
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
							url
						}
					}
				}
			`;

			// Get repository ID
			const repoQuery = `
				query($owner: String!, $repo: String!) {
					repository(owner: $owner, name: $repo) {
						id
					}
				}
			`;

			const repoResponse = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${GITHUB_TOKEN}`
				},
				body: JSON.stringify({
					query: repoQuery,
					variables: { owner, repo }
				})
			});

			const repoResult = await repoResponse.json();
			const repositoryId = repoResult.data.repository.id;

			const createResponse = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${GITHUB_TOKEN}`
				},
				body: JSON.stringify({
					query: createQuery,
					variables: {
						repositoryId,
						categoryId: category.id,
						title: postTitle,
						body: `Discussion thread for: ${postTitle}`
					}
				})
			});

			const createResult = await createResponse.json();

			if (createResult.errors) {
				throw new Error(createResult.errors[0].message);
			}

			discussionNumber = createResult.data.createDiscussion.discussion.number;
			await fetchDiscussion();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to create discussion';
			console.error('Error creating discussion:', err);
		}
	}

	async function postComment() {
		if (!newComment.trim()) return;

		if (!discussionNumber) {
			await createDiscussion();
			if (!discussionNumber) return;
		}

		posting = true;
		error = null;

		try {
			const mutation = `
				mutation($discussionId: ID!, $body: String!) {
					addDiscussionComment(input: {
						discussionId: $discussionId,
						body: $body
					}) {
						comment {
							id
							author {
								login
								avatarUrl
								url
							}
							bodyHTML
							createdAt
							url
						}
					}
				}
			`;

			const response = await fetch('https://api.github.com/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${GITHUB_TOKEN}`
				},
				body: JSON.stringify({
					query: mutation,
					variables: {
						discussionId: discussion?.id,
						body: newComment
					}
				})
			});

			const result = await response.json();

			if (result.errors) {
				throw new Error(result.errors[0].message);
			}

			// Add the new comment to the list
			comments = [...comments, result.data.addDiscussionComment.comment];
			newComment = '';
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to post comment';
			console.error('Error posting comment:', err);
		} finally {
			posting = false;
		}
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	onMount(() => {
		if (!GITHUB_TOKEN) {
			error = 'GitHub token not configured. Please set VITE_GITHUB_TOKEN environment variable.';
			loading = false;
			return;
		}
		fetchDiscussion();
	});
</script>

<section class="github-discussions">
	<h2>Comments</h2>

	{#if loading}
		<div class="loading">Loading comments...</div>
	{:else if error}
		<div class="error">
			<p>{error}</p>
			{#if !discussionNumber && postTitle}
				<p class="info">Comments will be available once someone posts the first comment.</p>
			{/if}
		</div>
	{/if}

	{#if discussion}
		<div class="discussion-header">
			<p>
				Join the discussion on <a href={discussion.url} target="_blank" rel="noopener noreferrer"
					>GitHub</a
				>
			</p>
			<p class="comment-count">{discussion.comments.totalCount} comments</p>
		</div>
	{/if}

	<div class="comments-list">
		{#each comments as comment (comment.id)}
			<article class="comment">
				<div class="comment-header">
					<a href={comment.author.url} target="_blank" rel="noopener noreferrer" class="author">
						<img src={comment.author.avatarUrl} alt={comment.author.login} class="avatar" />
						<span class="author-name">{comment.author.login}</span>
					</a>
					<time datetime={comment.createdAt}>{formatDate(comment.createdAt)}</time>
				</div>
				<div class="comment-body">
					{@html comment.bodyHTML}
				</div>
				<div class="comment-footer">
					<a href={comment.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
				</div>
			</article>
		{/each}
	</div>

	{#if GITHUB_TOKEN}
		<div class="comment-form">
			<h3>Leave a comment</h3>
			<p class="info">
				Comments are posted via GitHub Discussions. You'll need a GitHub account to comment.
			</p>
			<textarea
				bind:value={newComment}
				placeholder="Write your comment here... (Markdown supported)"
				rows="5"
				disabled={posting}
			></textarea>
			<button onclick={postComment} disabled={posting || !newComment.trim()}>
				{posting ? 'Posting...' : 'Post Comment'}
			</button>
		</div>
	{:else}
		<div class="login-prompt">
			<p>
				To comment, please visit the <a
					href={discussion?.url || `https://github.com/${owner}/${repo}/discussions`}
					target="_blank"
					rel="noopener noreferrer">discussion on GitHub</a
				>.
			</p>
		</div>
	{/if}
</section>

<style>
	.github-discussions {
		margin: 3rem 0;
		padding: 2rem;
		border-top: 2px solid var(--border-color, #e1e4e8);
	}

	h2 {
		margin-bottom: 1.5rem;
		font-size: 1.75rem;
	}

	h3 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
	}

	.loading,
	.error {
		padding: 1rem;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}

	.loading {
		background-color: var(--info-bg, #f6f8fa);
		color: var(--info-text, #586069);
	}

	.error {
		background-color: var(--error-bg, #ffeef0);
		color: var(--error-text, #d73a49);
	}

	.error p {
		margin: 0.5rem 0;
	}

	.info {
		font-size: 0.9rem;
		color: var(--text-muted, #586069);
		margin: 0.5rem 0;
	}

	.discussion-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border-color, #e1e4e8);
	}

	.discussion-header p {
		margin: 0;
	}

	.comment-count {
		font-weight: 600;
		color: var(--text-muted, #586069);
	}

	.comments-list {
		margin-bottom: 2rem;
	}

	.comment {
		margin-bottom: 1.5rem;
		padding: 1rem;
		border: 1px solid var(--border-color, #e1e4e8);
		border-radius: 0.5rem;
		background-color: var(--comment-bg, #ffffff);
	}

	.comment-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border-color, #e1e4e8);
	}

	.author {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: var(--link-color, #0366d6);
		font-weight: 600;
	}

	.author:hover {
		text-decoration: underline;
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	.author-name {
		font-size: 0.95rem;
	}

	time {
		font-size: 0.85rem;
		color: var(--text-muted, #586069);
	}

	.comment-body {
		margin-bottom: 0.75rem;
		line-height: 1.6;
	}

	.comment-body :global(p) {
		margin: 0.5rem 0;
	}

	.comment-body :global(pre) {
		background-color: var(--code-bg, #f6f8fa);
		padding: 1rem;
		border-radius: 0.25rem;
		overflow-x: auto;
	}

	.comment-body :global(code) {
		background-color: var(--code-bg, #f6f8fa);
		padding: 0.2rem 0.4rem;
		border-radius: 0.25rem;
		font-size: 0.9em;
	}

	.comment-footer {
		font-size: 0.85rem;
	}

	.comment-footer a {
		color: var(--link-color, #0366d6);
		text-decoration: none;
	}

	.comment-footer a:hover {
		text-decoration: underline;
	}

	.comment-form {
		margin-top: 2rem;
		padding: 1.5rem;
		border: 1px solid var(--border-color, #e1e4e8);
		border-radius: 0.5rem;
		background-color: var(--form-bg, #f6f8fa);
	}

	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--border-color, #e1e4e8);
		border-radius: 0.5rem;
		font-family: inherit;
		font-size: 0.95rem;
		resize: vertical;
		margin-bottom: 1rem;
	}

	textarea:focus {
		outline: none;
		border-color: var(--focus-color, #0366d6);
		box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.1);
	}

	textarea:disabled {
		background-color: var(--disabled-bg, #f6f8fa);
		cursor: not-allowed;
	}

	button {
		padding: 0.75rem 1.5rem;
		background-color: var(--button-bg, #2ea44f);
		color: white;
		border: none;
		border-radius: 0.5rem;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button:hover:not(:disabled) {
		background-color: var(--button-hover-bg, #2c974b);
	}

	button:disabled {
		background-color: var(--button-disabled-bg, #94d3a2);
		cursor: not-allowed;
	}

	.login-prompt {
		margin-top: 2rem;
		padding: 1.5rem;
		border: 1px solid var(--border-color, #e1e4e8);
		border-radius: 0.5rem;
		background-color: var(--info-bg, #f6f8fa);
		text-align: center;
	}

	.login-prompt a {
		color: var(--link-color, #0366d6);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.github-discussions {
			padding: 1rem;
		}

		.discussion-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.comment {
			padding: 0.75rem;
		}

		.comment-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>
