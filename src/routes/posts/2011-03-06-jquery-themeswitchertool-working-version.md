---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: jQuery ThemeSwitcherTool - Working Version!!!!!
description: A working version of my ThemeSwitcherTool
excerpt: I added a few extra options to cover the changes I made.
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - web-development
tags:
  - jQuery
created_at: 2011-03-06 21:20:00
updated_at: 2011-03-06 21:20:00
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
lastmod: 2022-06-11T21:01:45.827Z
---

I recently tried to install the jQuery UI
[ThemeSwitcher](tp://docs.jquery.com/UI/Theming/ThemeSwitcher) on a site for a
project on which I am working. It failed. Miserably! I scoured the interwebs for
a working version, but could not find one anywhere. However, I did find out why
the tool was not working. It seems the jQuery team disabled hotlinking to its
servers. This was extremely good news, as it meant I could simply recode the
widget to point to the new files or download them and point the script to the
downloaded files.  I dove right in to the code and made some modifications to
the start of the script. Then I optimized some of the rest of the code. Finally,
I added a few extra options to cover the changes I made.

### Download
You can click on the following links to download the files.

* [themeswitchertool.js](http://blog.rbe.homeip.net/wp-content/uploads/2011/03/themeswitchertool.js) - The themeswitcher.
* The Following files are images used by themeswitcher. To use them, place them
  in /javascripts/jquery/themeswitcher/ or use the imageLocation option to point
  to the directory where these are stored.
  * [menuhoverbg.png](/files/themeswitcher/menuhoverbg.png)
  * [icon_color_arrow.gif](/files/themeswitcher/icon_color_arrow.gif)
  * [buttonbg.png](/files/themeswitcher/buttonbg.png)
  * [base.png](/files/themeswitcher/base.png) This is an icon used for the
    'base' theme (no styles), to use this, you need to specify the icon location
    in the options or put it in with the rest of the images.

### Changes
* The old script appended up to three styles to the document, then removed the
  first one. It now uses the selector "head link#ui-theme" to change the
  stylesheet. I changed this so you can set the id of your default custom theme
  to "ui-theme" and it will change this. If the id isn't found, it creates a new
  one.
* Added new options for specifying your own themes to add to the list.
* Added new option, useStandard, for specifying whether to use the themes from the jQuery UI site.
* Added new options for specifying where to find the UI icons and stylesheets
* Added new option, imageLocation, for specifying where to find the widget images (found in the downloaded file)
* Added the widget images to the downloaded file, so you don't have to link to jQuery's servers
* Added option, useCookie, for whether to use a cookie for saving the theme for later use on the same page.

### Examples
#### Basic usage, no custom theme support
```javascript
$('<div id="theme-switcher"></div>').prependTo('body').themeswitchertool( );
```

#### Adding custom themes
```javascript
$('<div id="theme-switcher"></div>').prependTo('body').themeswitchertool( {
    themes: {
       'theme1': {
           icon:"/path/to/theme-icon.png",
           css:"/path/to/theme.css"
       },
       'theme2': {
           icon:"/path/to/theme2-icon.png",
           css:"/path/to/theme2.css"
       }
    }
});
```

### Using Only Custom Themes
```javascript
$('<div id="theme-switcher"></div>').prependTo('body').themeswitchertool( {
    useStandard: false,
    themes: {
       'theme1': {
           icon:"/path/to/theme-icon.png",
           css:"/path/to/theme.css"
       },
       'theme2': {
           icon:"/path/to/theme2-icon.png",
           css:"/path/to/theme2.css"
       }
    }
});
```

### New Options

#### themes
##### Default: `{}`
A hash of themes, where each key is the theme name, and the value is another
hash specifying the icon to use and the css file for the theme. Here is an
example:
```javascript
{
'theme1': {
    icon:"/path/to/theme-icon.png",
    css:"/path/to/theme.css"
}
}
```
#### useStandard
##### Default: true
If you don't want the themes from the jQuery UI site to show up in the list, set this to false.
#### useCookie
##### Default: true
The Theme Switcher uses a browser cookie to store and retrieve the theme name
for the current site. Set this option to false if you do not want your site to
remember the theme.
#### imageLocation
##### Default: "/javascripts/jquery/themeswitcher/"
This is where the images are stored which Theme Switcher uses. The following
files must be in the folder: buttonbg.png, icon_color_arrow.gif, menuhoverbg.png
. You can get these from the download.
#### imgPrefix
##### Default: "http://static.jquery.com/ui/themeroller/images/themeGallery/theme_90_"
This option specifies the default icon prefix URI. The icons are the previews
for each theme. The default option sets the default images to the jquery hotlink
site. This may change in the future, so it is specified here as an option.
#### imgSuffix
##### Default: ".png"
This option specifies the rest of the image URI.
#### cssPrefix
##### Default: "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/themes/"
This option specifies the deafault css location prefix.
#### cssSuffix
##### Default: "/jquery-ui.css"
This option specifies the deafault css location sufffix.

