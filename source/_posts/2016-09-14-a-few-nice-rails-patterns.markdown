---
layout: post
title: "A Few Nice Rails Patterns"
date: 2016-09-14 10:06:59 -0400
comments: true
categories:
  - programming
  - design patterns
#published: false
---

<div class='note'>
  NOTE: This is part one of a series on programming patterns and good practices for Ruby on Rails developers. Start here.
</div>

## This episode: Data Migrations and You!


## A Little Background

The university from which I graduated did not teach any programming patterns, so when I entered the job market, I was not sure what _programming patterns_ (a.k.a. "*design patterns*") even were. My first job was definitely a learning experience, but since I was on a small team with other newbies, I didn't have many opportunities to grow well as a developer. So when I got my second job, with developers of all walks and experiences, I was thrown into many, many discussions about what pattern to apply to what idea. It was a little confusing at first, but very exhilarating! Here was the chance to lose some old, bad habits, and replace them with new _Patterns_! This post is about some patterns I really really like. I will add references and information about each pattern so you can learn as much about them them as you want!

## Migrations Are Only For Modifying The Database

This is a difficult rule to follow for lots of Rails developers, experienced and not so. Since migrations are ususally automated, it is easy to get in the mindset of adding data changes to migrations. This violates the **Single Responsibility Principle**, which states, _a class should have a responsibility over a single feature of your application_.

<div class='note'>
Scenario: You have a nice chat app and you want to add the ability for users to 'favorite' certain messages. At first, you have a boolean field in your database, so your original migration looks like this:

```ruby
class CreateMessageFavorites < ActiveRecord::Migration
  def self.up
    create_table :message_favorites do |t|
      t.references :message
      t.references :user
      t.boolean    :favorite
      t.timestamps  null: false
    end
  end

  def self.down
    drop_table :message_favorites
  end
end
```
After a few months, and many _many_ messages (6 million!), you decide you want the 'favorite' button to handle a few more emotions, such as "makes me happy," "makes me sad," "makes me angry," "makes me crazy," and "meh, just a note." You then decide
</div>

There are several ways of going about doing this. Once you analyze your requirements, you decide to use the existing `MessageFavorite#favorite` field to store the new information.Your immediate thought is to use a migration as such:

```ruby
class UpdateMessageFavoritesToHandleMoreEmotions < ActiveRecord::Migration
  def change
    add_column :message_favorites, :favorite_int, :int

    MessageFavorite.all.each do |mf|
      mf.update_attributes(favorite_int: MessageFavorite::EMOTIONS[mf.favorite ? 1 : 0])
    end

    remove_column :message_favorites, :favorite
    rename_column :message_favorites, :favorite_int, :favorite
  end
end
```
There are a few problems with this approach, chiefly, running a data migration in the middle of a Rails migration like this is going to grind things to a halt. Your deploy is going to take forever! There is also an issue of what happens when there is an error in your data migration which will prevent everything from happening and could leave you with dangling data that another migration won't be able to fix.

There is also the issue of changes in environemnt. You may have this thoroughly tested while in development or in testing environments, but production is known to throw a wrench in the works. This means you need to baby-sit your data migrations, which you won't be able to do while it's in a deploy migration. You will need to run this separately, in a production console.

Finally, there is the obvious issue of violations to the **SRP**. This migration does three things:

1. creates a new temporary column
2. creates the new data based on the existing data
3. replaces the original column with the new column

The best way to address all these issues is to just break the migration up into its distinct pieces, by doing the following:

1. create and run a migration to create a new column in the Db
2. run the data migration (in the production console)
3. create and run a migration to replace the old column with the new one

For many of us, step 2 is a very daunting task. Rails consoles in production are a hairy endeavor and could lead to bad data integrity and other sorts of bad things, including deleting all data! Fortunately for you guys, Rails already has a solution for this.

### Introducing Rails Runner

Rails runner is a great tool for running data migrations and other one-shot data changes in your Rails application. You can execute rails runner as `rails runner bin/file.rb` or `rails r bin/file.rb`. While this won't solve data integrity issues, it will allow you to run a script in the current Rails context. This means you can have tested and peer reviewed data migrations! Amazing!

Rails runner runs the specified file in the context of your Rals app. This means you can get all the same benefits as running code from the console, but with the added bonus of

For ease of organization, you can put all your data migrations in `db/migrate/data/`. Another common place is `bin/one-shot/:year/:month/`. If this is a hotfix for a tech support ticket, it is helpful to put the ticket number in the name of the file, for instance `bin/one-shot/2016/09/TS-432098-update-bad-data.rb`. The point is, your team should agree on a place to put all these tickets so everyone can keep track of the changes. Developers can add a `post_checkout` git hook to automatically run all new scripts in the agreed-upon directory.

### Flow for Data Migrations

<div class="chart">
%% Waiting for the following chart to load...
graph TB;
  db1{database needs to be changed?}
  done{Done.}
  dm1[Run database migration]
  dm2{data needs to be changed?}
  dm3[run script to change data]
  dm4{database needs cleanup?}
  dm1-->dm2
  db1 -- yes -->dm1
  db1-- no -->done
  dm2 -- no -->done
  dm2 -- yes --> dm3
  dm3 --> dm4
  dm4 -- yes --> dm1
  dm4 -- no --> done
</div>

## Presenting Presenters
[About Presenters, decorator pattern]

## Interacting With Objects
[about interactors, service object patters]

## Keeping Controllers Under Control
[about controllers as parameter fetchers for other objects that actuall do the work]

## ActiveRecord Is For Recording
[AR models should be only datastore - allows for switching DBs out - SQL should all be here - when switching Dbs, you only need to edit the models]

## Views: A New View
[use jbuilder/jb, separate views for each format, instead of `render :json...`]

## Proper Tooling
[Use tools! Use gems! Research which ones work for you and your team. Do not reinvent the wheel!]
