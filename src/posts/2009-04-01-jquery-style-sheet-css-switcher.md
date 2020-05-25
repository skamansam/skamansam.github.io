---
layout: post
title: "jQuery Style Sheet (CSS) Switcher"
date: 2009-04-01 18:16:00 -0400
comments: true
categories:
---

I have been looking for a nifty style-switching script, and have found none. So here is the code for a checkbox-based 
style switcher. This uses jQuery.

The Javascript:
```Javascript
/*ChangeStyle.js:
* -by Skaman Sam Tyler - http://rbe.homeip.net
*
* This script uses checkboxes to add and remove stylesheets from the page.
* It takes the value of the 'rel' attribute from the checkbox and creates a stylesheet link with it.
* */

if ($) {    //check for jQuery

  //on document load, uncheck all checked boxes and add function handler for
  $(document).ready( function() {
    $('.styleToggle').removeAttr("checked");    //uncheck all checked
    $('.styleToggle').click( function() {        //add handler for clicking
      toggleStyle(this.getAttribute("rel"));
      return true;
    });
});

//the toggling of the style. it takes a single parameter: the href of the stylesheet to toggle
function toggleStyle(href) {

  //check for presence of link, if it exists, delete it, else, add it.
  if($('link[href*='+href+']').size()!=0){
    $('link[href*='+href+']').remove();
  }else{
    console.log("Adding: "+$('link[href*='+href+']'));
    $('head').append('&lt;link rel="stylesheet" href="'+href+'" type="text/css" media="screen" /&gt;');
  }
}
}
```
The HTML file should include something like this:
```html
&lt;form name="styleSwitchForm"&gt;
&lt;ul&gt;
&lt;li&gt;&lt;label&gt;&lt;input type="checkbox" rel="/styles/red.css" class="styleToggle"/&gt; Red Style&lt;/label&gt;&lt;/li&gt;
&lt;li&gt;&lt;label&gt;&lt;input type="checkbox" rel="/styles/blue.css" class="styleToggle"/&gt; Blue Style&lt;/label&gt;&lt;/li&gt;
&lt;li&gt;&lt;label&gt;&lt;input type="checkbox" rel="/styles/green.css" class="styleToggle"/&gt; Green Style&lt;/label&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/form&gt;
```
