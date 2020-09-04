---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Inline input fields with minimal jQuery
description: Create an inline edit field with one line of jQuery
excerpt:  Essentially one line of javascript to accomplish this easy feat
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - web-development
tags: 
  - jQuery
created_at: 2012-05-25 14:46:00
updated_at: 2012-05-25 14:46:00
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---
For one of my projects, i needed to put a text field inside a header element.
When I did so, the input field ruined my layout and good looks! So I went the
jQuery way and devised a method for hiding inputs when not in use, but when
clicking on it, turns into a normal input field. So in my CSS, I add:

```css
input.hidden{
    color: inherit;
    padding: inherit;
    margin: inherit;
    border: none;
    background: transparent;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;

}
h2 {
    color: #648dd7;
    font-size: 18px;
    font-weight: normal;
    margin-top: 16px;
    margin-left: 2px;
}​
```

and in my html, I have:

```html
<h2>Header<input name="myInput" value="[Header Input]" class="hidden"/></h2>
```

And here is the fun part. Essentially one line of javascript to accomplish this easy feat:

```javascript
$('input.hidden')
  .live('focus',function(){
                  $(this)
                  .removeClass('hidden')
                  .live(
                      'blur',
                      function(){ $(this).addClass('hidden') }
                  )
                }
  )​;
```

