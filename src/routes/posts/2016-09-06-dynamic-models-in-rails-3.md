---
draft: true
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Dynamic Models in Rails 3
description: How to create dynamic Models in Rails 3
excerpt: Rails 3 has a lot of nifty new features.
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - ruby
tags:
  - Ruby on Rails
created_at: 2016-09-06 09:45:57
updated_at: 2016-09-06 09:45:57
---

Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.

```ruby
class CreateMyDynamicModel < ActiveRecord::Migration
  def change
    create_table :dynamic_models do |t|
      t.string :name, :null=>false
      t.string :description
      t.text :dynamic_methods

      t.timestamps
    end
  end
end

class MyDynamicModel < ActiveRecord::Base

  serialize :dynamic_methods, Hash

  def method_missing(sym,*args,&block)
    #call the super so we can have access to all normal methods/fields/etc.
    unless @meth_miss
      @meth_miss=true   #prevent an infinite call chain. only run once
      super_method_missing(sym,args,block)
    end

    #if we already havde this method, return. This should never happen, but just in case...
    return if defined?(sym.to_sym)

    #if the method passed in is an assignment, create the method and assign a value to it
    if sym =~ /^(\w+)=$/
      self.dynamic_methods[$1]=args.to_s

    #if the method is already assigned something, return it
    elsif actions.keys.include? sym
      return self.dynamic_methods[sym.to_s]

    #If the method has not been assigned anything, we officially have a NoMethodError!
    else
      raise NoMethodError

    end #/if

  end #/method_missing()

end #/end class
```