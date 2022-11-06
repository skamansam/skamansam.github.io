import { publishedPosts } from '$lib/posts';
import settings from '$lib/settings';

export const get = async () => {
  const xml = String.raw;
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=3600`,
    'Content-Type': 'application/xml',
  };
  return {
    headers,
    body: xml`<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <atom:link href="settings.base_url/rss.xml" rel="self" type="application/rss+xml" />
      <title>${settings.site.title}</title>
      <link>${settings.base_url}</link>
      <description>${settings.site.description}</description>
      <language>${settings.site.language}</language>
      <image>
        <url>${settings.site.image}</url>
        <title>${settings.site.title}</title>
        <link>${settings.base_url}</link>
      </image>
      <copyright></copyright>
      ${publishedPosts.map((post) => `
        <item>
          <guid>${settings.base_url}/posts/${post.slug}</guid>
          <title>${post.meta.title}</title>
          <link>${settings.base_url}/posts/${post.slug}</link>
          <description>${post.meta.description}</description>
          <pubDate>${new Date(post.meta.updated_at || post.meta.created_at).toUTCString()}</pubDate>
        </item>`
      ).join('')}
    </channel>
    </rss>
    `,
  };
};
