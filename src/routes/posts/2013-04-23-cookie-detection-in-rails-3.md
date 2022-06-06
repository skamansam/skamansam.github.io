---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Cookie Detection in Rails 3
description: How to detect cookies in Rails 3
excerpt: I believe this may be a bad idea, in general, but here is a cheap way
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - ruby
tags:
  - Ruby on Rails
created_at: 2013-04-23 17:14:12
updated_at: 2016-08-30 00:00:00
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.


```ruby
class ApplicationController < ActionController::Base

  before_filter :check_cookie

  ...

  private

  def check_cookie
    cookie_name = Rails.application.config.session_options[:key]
    if request.cookies[cookie_name].to_s.blank?
      flash[:error] = "To use this site, you must enable cookies in your browser's settings."
    end
  end

end
```
..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!

UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!
