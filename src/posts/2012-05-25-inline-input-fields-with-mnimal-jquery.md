---
layout: post
title: "Inline input fields with mnimal jQuery"
date: 2012-05-25 14:46:00 -0400
comments: true
categories:
---

For one of my projects, i needed to put a text field inside a header element. When I did so, the input field ruined my layout and good looks! So I went the jQuery way and devised a method for hiding inputs when not in use, but when clicking on it, turns into a normal input field. So in my CSS, I add:

<pre lang="css">
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
</pre>

and in my html, I have:

<pre lang="HTML">
&lt;h2&gt;Header<input name="myInput" value="[Header Input]" class="hidden"/&gt;&lt;/h2&gt;
​</pre>

And here is the fun part. Essentially one line of javascript to accomplish this easy feat:

<pre lang="javascript">
$('input.hidden').live('focus',function(){
    $(this).removeClass('hidden').live('blur',
                                       function(){$(this).addClass('hidden                                                                                              ')})})​;
</pre>
