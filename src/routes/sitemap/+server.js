import { publishedPosts } from '$lib/posts';
import settings from '$lib/settings';


/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET() {
  const xml = String.raw;
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body: xml`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    <url>
      <loc>${settings.base_url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
    ${
      publishedPosts.map((post,index) => `
      <url>
        <loc>${settings.base_url}/posts/${post.slug}</loc>
        <lastmod>${new Date(post.meta.updated_at || post.meta.created_at).toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>${(publishedPosts.length - index)/publishedPosts.length * 0.5 + 0.5}</priority>
      </url>`
      ).join('')
    }
    </urlset>`,
  }
}