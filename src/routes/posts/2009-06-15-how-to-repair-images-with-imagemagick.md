---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: How To Repair Images with ImageMagick
description: Using ImageMagick to repair corrupted images
excerpt: the images [...] were taken with my phone's camera and all had errors
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - web-development
tags: 
  - Coppermine
  - Image Repair
created_at: 2009-06-15 11:23:00
updated_at: 2009-06-15 11:23:00
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

I have been doing a lot of importing of photos on my photo site, and have noticed some images do not display properly. 
Since I love ImageMagick so much, I set up  my gallery to use it. However, there appears to be a check in the Coppermine 
software that aborts reading the file upon errors in the image. So I typed the command "display imagename.jpg" for some 
of the files that did not import properly, and everything appeared to be fine. But I did notice something peculiar about 
the images: they were taken with my phone's camera and all had errors printed out when I tried to open them, but seem to 
display correctly.

Since these files could be opened by ImageMagick, I figured if I saved them again, I would be able to fix the errors. I 
ran "convert image1.jpg image1.jpg", got the familiar errors printed and opened the file again. This time, no errors! 
But since I have a  lot of files I want to import, I needed a way to convert a bunch at once.

I created a neat little Perl script to do just that. All you need is ImageMagick and perl installed. This script does 
not rely on PerlMagick, as it runs the convert command. So here it is:


```perl
#!/usr/bin/perl

processFile("$_") foreach (@ARGV);

#recursively fix images
sub processFile {
   my $file=shift;
   return (-d "$file")?( do{ processFile("$_") foreach (<"$file"/*>) }) : `convert "$file" "$file"`;
}
```

I saved this file as $HOME/bin/fiximage. All you need to do to run it is type "fiximage file1 file2 directory1 directory2 ...". 
One other thing to note is that this script has been purposefully shortened. I like to use the ternary operator whenever 
possible in my scripts for just this reason. As such, it does not print anything to the command line itself, but if the 
convert command encounters an error, that will be printed.

I hope you have found this article useful!
