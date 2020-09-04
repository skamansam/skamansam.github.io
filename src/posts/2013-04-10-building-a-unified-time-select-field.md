---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Building a unified `time_select` field
description: Build a unified `time_select` field
excerpt: I was happy until the Rails upgrade caused my gem to inexplicably stop working.
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - ruby
tags:
  - Ruby on Rails
created_at: 2013-04-10 11:10:11
updated_at: 2013-04-10 11:10:11
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

Before I migrated to Rails 3.2, I used a plugin to provide a unified input field
for time_select with either the standard Rails ActionView or the SimpleForm gem
(SimpleForm uses ActionView under the hood). I was happy until the Rails upgrade
caused my gem to inexplicably stop working. I had a deadline to meet and could
not be bothered with complicated solutions. I searched and searched for
alternatives to this fine gem, but none were found. Then it hit me: why not just
write my own code and replace the inputs with my own code? Surely it can't take
too long to build a time input based on the simple_time_select gem! So here it
is: my simple version of the gem, with only a few modifications from the
simple_time_select gem.

Here is my old code, utilizing simple_time_select. The gem is used only
if `:simple_time_select` is true, and it uses the `:minute_interval`,
`:time_separator`, `:start_hour`, `:end_hour`, and a host of other options for setting
the times. I wish it had a way for specifying just a start_time and end_time.

```ruby
<div class="field">
  <%= f.input :start_time,
              :label=>"Start Time:",
              :default=>appt.start_time,
              :wrapper=>false,
              :simple_time_select => true,
              :label_html=>{:class=>"head"},
              :minute_interval => 5,
              :time_separator => "",
              :start_hour => 06,
              :end_hour => 17
   %>
</div>
```

I had to search for an algorithm to use for the periodicity, and settled on the
algorithm discussed in [this discussion on Stack
Overflow](http://stackoverflow.com/questions/6783589/display-15-minute-steps-between-two-given-times),
and is inlined as the :collection option. Since the :default option removes the
inital blank I wanted as the first item in the list, I has to add a blank
`:include_blank` option.

```ruby
<div class="field">
  <%- time_start = Time.now.change(:hour=>6,:minute=>0) %>
  <%- time_end = Time.now.change(:hour=>17,:minute=>55) %>
  <%- period = 5.minutes %>
  <%= f.input :start_time,
           :as=>:collection_select,
           :required=>true,
           :include_blank => '',
           :selected=>(
             f.object.start_time.blank? ?
               "" : f.object.start_time.strftime("%H:%M")
           ),
           :input_html=>{
             :name=>"appt[start_time(5i)]",
             :id=>"appt_start_time_5i"},
           :collection=> (
             [time_start].tap{
               |array| array << array.last + period
                 while array.last < time_end
             }).map{
               |t| [t.strftime("%l:%M %p"), t.strftime("%H:%M")]
             }
   %>
</div>
```


I am sure you can wrap this in a Helper class somewhere, and it should be easy
to monkeypatch ActiveView or SimpleForm to display this instead of the default.


References:
* [Stack Overflow discussion on time periodicity in Rails](http://stackoverflow.com/questions/6783589/display-15-minute-steps-between-two-given-times) (used for periodicity algorithm)
* [Tutorial on using simple_time_select](http://www.tonyamoyal.com/2009/04/21/simple-time-select-the-most-compact-time_select-for-ruby-on-rails/)
* [SimpleForm gem](https://github.com/plataformatec/simple_form)
* [simple_time_select gem](https://github.com/tamoyal/simple_time_select)

