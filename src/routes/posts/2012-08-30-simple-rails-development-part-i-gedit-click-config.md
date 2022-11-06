---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: "Simple Rails Development Part I: Gedit Click Config"
description: Configuring GEdit Click Config Plugin
excerpt: "I installed a few plugins, but only one of them took me by surprise\\: Click Config."
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - ruby
tags:
  - Ruby on Rails
  - IDE
created_at: 2012-08-30 23:29:00
updated_at: 2012-08-30 23:29:00
---
After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit. In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.

**NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2.**

Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:

* **Single-Click**: Move the editing cursor to the mouse cursor's location
* **Double-Click**: Select the word that is under the mouse cursor
* **Triple-Click**: Select the entire line that is under the mouse cursor

Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression ("regex" for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.

## I Gotta Have It!

I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro's repository or already
installed it.  If you don't have it already, you can pick it up from
[the google code repo](http://code.google.com/p/gedit-click-config/), and it doesn't require root
access, so setup should be really simple, just follow the directions.

## You mentioned Ruby on Rails?

Yes... yes I did.  You can find out more about Ruby words, constants, and other
things
[here](http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants).
Ruby words are pretty simple: they:

1. **can begin with a single $ sign**
2. **can begin with a single or double @ sign, a**
3. **can contain any letter a-z, case insensitive**

I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: **can contain two colons in a row**.

To put all that in simple regular
expressions: `((\$?)|(@?@?))([_a-zA-Z]+(::)?)+`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \2,\3,\4.\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit-&gt;Click Config-&gt;Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
"Add" button and entering a name for it. I suggest using "Ruby Word" for the
name.

I also find myself moving ruby strings around a lot. Wouldn't it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression: `(['"]).*?\1`. Make sure to check the 'M' flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The '\1' means to
match the value from the first parenthetical match, so the quotes will line up
properly. The '.*?' means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.

## Come Together
I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:

#### Selection Rules
* Ruby Word: `((\$?)|(@?@?))([_a-zA-Z]+(::)?)+`    (Flags: None)
* Full Quote: `(['"]).*?\1   (Flags: M)`
* Single-Line Quote  (Flags: None)
* Haml Word: `(\.|\#|\$?|(@?@?))([_a-zA-Z]+(::)?)+`
