---
title: From Svelte to React
description: Learning React for Svelte Developers
excerpt: ""
created_at: 2023-07-03T20:42:50.725Z
updated_at: 2023-07-04T21:13:52.340Z
coverImage: /images/cover/from-svelte-to-react.jpg
coverImageAlt: a programmer sitting  at a desk with two laptops in front of him. on the left laptop screen, there is the svelte logo. on the right laptop screen there is the react logo
draft: false
tags:
  - programming
  - react
  - svelte
  - learning
categories: []
twitterImage: /images/cover/from-svelte-to-react.jpg
opengraphImage: /images/cover/from-svelte-to-react.jpg
meta: ""
layout: post
keywords: []
---

<script>
  import TabView from '../../components/TabView.svelte';
</script>

> NOTE: This entry is in a preview state. It may not be complete yet,


## Contents

## Creating a Web App Skaffold

<TabView>
<div title="Vite">
You can create Vite-based apps using the vite skaffold tool. This is the recommended way, as Vite is 
much faster and easier to use than webpack-based projects like create-react-app and create-svelte.

```sh
pnpm create vite
# follow the prompts!
```

</div>
<div title="Svelte/Kit">

```sh
pnpm create svelte@latest my-app
cd my-app
pnpm install
pnpm dev
```

</div>
<div title="React (Next.js)">

```sh
pnpx create-next-app
```

</div>
</TabView>

## Defining a Component

<TabView>
<div title="Svelte">

```html
<div class="my-component">
  Hello World!
</div>
```

</div>
<div title="React">

```js
function MyComponent() {
  return (
    <div class="my-component">
      Hello World!
    </div>
  )
}
```

</div>
</TabView>

## Nesting Components

<TabView>
<div title="Svelte">

```jsx
/* myComponent.js */
<div class="my-component">
  Hello World!
</div>

/* app.js */
<script>
  import MyComponent from './myComponent';
</script>

<div class="app">
  This is an app!
  <MyComponent/>
</div>
```

</div>
<div title="React">

```jsx
/* myComponent.jsx */
export default function MyComponent() {
  return (
    <div class="my-component">
      Hello World!
    </div>
  )
}

/* app.jsx */
import MyComponent from './myComponent.js';
export default function App() {
  return (
    <div class="app">
      This is an app!
      <MyComponent/>
    </div>
  )
}

```

</div>
</TabView>

## Returning Multiple Components

<TabView>
<div title="Svelte">

```html
<p>
  Hello World!
</p>
<p>
  Nice to meet you! 
</p>
```

</div>
<div title="React">

JSX requires a return of only one element, so you need to nest multiple elements inside a single element, 
such as the `<React.Fragment>...</React.Fragment>` element or the null-element (`<>...</>`)

```js
function MyComponent() {
  return (
    <>
      <p>
        Hello World!
      </p>
      <p>
        Nice to meet you! 
      </p>
    </>
  )
}
```

</div>
</TabView>


## Styling Components

<TabView>
<div title="Svelte">

```html
<script>
  let borderColor = 'blue';
</script>

<p class="red-text" style:borderColor style="background-color: black; border-color: {borderColor}">
  Hello World!
</p>
<style>
  p.red-text {color: red;}
</style>
```

</div>
<div title="React">

You can't use `class` in JSX, as it is a reserved word in ECMAScript. Use `className` instead. If you want
to use inline styles, you need to use the JS properties of the `style` object instead of the html/css properties
used in normal HTML. the `style` attribute takes an object, so you can pass an object 

```jsx
function MyComponent() {
  let borderColor = 'blue';
  const styles={ borderColor }
  return (
      <p className="red-text" style="{{...styles, background-color: 'black' }}">
        Hello World!
      </p>
  )
}
```

</div>
</TabView>

## Displaying Variables

## Conditional Rendering

## Rendering Data Structures

## Passing Props to Components

## Event Raising and Handling

## Handling Component State

## Using Framework-Specific Features
`use*` function in react. 

https://github.com/joshnuss/react-hooks-in-svelte

## Render Caching
`useCallback` in react. Completely not necessary in svelte. use stores to save state.

## Sharing State Between Components

## Fallbacks While Loading Data
React's `<Suspense>` element

## Server-Side Components
`use client/server` in react. `+server.js` in sveltekit.