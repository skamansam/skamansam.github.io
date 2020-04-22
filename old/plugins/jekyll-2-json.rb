# encoding: utf-8
#
# Title:
# ======
# Jekyll to JSON Generator
#
# Description:
# ============
# A plugin for generating JSON representations of your
# site content for easy use with JS MVC frameworks like Backbone.
#
# Author:
# ======
# Jezen Thomas
# jezenthomas@gmail.com
# http://jezenthomas.com
=begin
require 'pry'
  require 'json'
  module Jekyll

  class JSONPage < Post
    def initialize(post, site, dir, name)
      @site = site
      @base = base
      @dir = dir
      @name = filename
    end

    def output_ext
      '.json'
    end

    def place_in_layout?
      false
    end

    def jekyll_to_json
      # Converter for .md > .html
      converter = site.getConverterImpl(Jekyll::Converters::Markdown)

      # Encode the HTML to JSON
      hash = { "content" => converter.convert(post.content)}
      title = post.title.downcase.tr(' _', '-').delete("’!")

      # Start building the path
      (year,month,day,title) = post.path.match(/(\d+)-(\d+)-(\d+)-(.*).markdown/)
      date_path = sprintf("%d/%0.2d/%0.2d", year, month, day)
      path = "#{site.config['destination']}/blog/#{date_path}/#{title}/"

      # Add categories to path if they exist
      #if (post.data['categories'].class == String)
      #  path << post.data['categories'].tr(' ', '/')
      #elsif (post.data['categories'].class == Array)
      #  path <<  post.data['categories'].join('/')
      #end

      # Add the sanitized post title to complete the path
      #path << "#{title}.json"

      # Create the directories from the path
      FileUtils.mkpath(path) unless File.exists?(path)

      binding.pry
      # Create the JSON file and inject the data
      puts "creating file at #{path}/index.json"
      f = File.new("#{path}/index.json", "w")
      f.write JSON.generate(hash)

    end
  end

  class JSONGenerator < Generator
    safe true
    #priority :low

    def generate(site)
      return unless site.config['generate_json']
      posts = site.posts
      posts.each do |post|
        next if post.data['skip_json'] == true
        new_post = post.dup
        #binding.pry
        post.instance_eval do
          def ext
            '.json'
          end
          def ext=
          end
          def output_ext
            '.json'
          end

          def place_in_layout?
            false
          end

          def jekyll_to_json
            # Converter for .md > .html
            converter = site.getConverterImpl(Jekyll::Converters::Markdown)

            # Encode the HTML to JSON
            hash = { "content" => converter.convert(post.content)}
            title = post.title.downcase.tr(' _', '-').delete("’!")

            # Start building the path
            (year,month,day,title) = post.path.match(/(\d+)-(\d+)-(\d+)-(.*).markdown/)
            date_path = sprintf("%d/%0.2d/%0.2d", year, month, day)
            path = "#{site.config['destination']}/blog/#{date_path}/#{title}/"

            # Add categories to path if they exist
            #if (post.data['categories'].class == String)
            #  path << post.data['categories'].tr(' ', '/')
            #elsif (post.data['categories'].class == Array)
            #  path <<  post.data['categories'].join('/')
            #end

            # Add the sanitized post title to complete the path
            #path << "#{title}.json"

            # Create the directories from the path
            FileUtils.mkpath(path) unless File.exists?(path)

            binding.pry
            # Create the JSON file and inject the data
            puts "creating file at #{path}/index.json"
            f = File.new("#{path}/index.json", "w")
            f.write JSON.generate(hash)

          end
        end
        site.posts << new_post #JSONPage.new(post, site)
      end
    end

  end

end
=end
