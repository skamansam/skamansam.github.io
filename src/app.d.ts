/// <reference types="@sveltejs/kit" />

import type { IconSource } from "@steeze-ui/heroicons/types"

// import type Posts from "./layouts/posts.svelte"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
type remarkHeadingPlugin = {
  depth: number,
  value: string    
}

type SiteConfig = {
  title: string,
  description: string,
  organization: string,
  author: string,
  language: string,
  email: string,
  image: string
}

type PostConfig = {
  default_image: string
}

type ConfigFile = {
    site: SiteConfig,
    base_url: string,
    default_theme: string,
    posts: PostConfig
}

type readingTime = {
  minutes: number,
  text: string,
  time: number,
  words: number
}

type Post = {
  draft: boolean,
  title: string,
  author: string,
  description: string,
  readingTime: readingTime,
  preview: string,
  previewHtml: string,
  textContent: string,
	title: string,
	author: string,
	description: string,
	meta: Array.<Object.<string, string>>,
	updated_at: string,
	created_at: string,
	tags: string[],
	categories: string[],
	coverAlt: string,
	coverImage: ?string,
	excerpt: string,
	comments: string,
	view: string,
	layout: string,
	lang: string,
	articleType: string,
	cover: boolean,
	opengraphImage: ?string,
	twitterImage: ?string
}

type PostJSON = {
  meta: Post,
  slug: string,
  path: string,
}
type Project = Post;
type ProjectJSON = PostJSON;
type Portfolio = Post;
type PortfolioJSON = PostJSON;


type NavLink = {
  name?: string,
  icon?: IconSource,
  link: string
}