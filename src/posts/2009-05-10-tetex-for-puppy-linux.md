---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: TeTex for Puppy Linux
description: Creating a TeTex .pup for Puppy Linux 4.20
excerpt: I really wanted tetex and a good editor, but don't really like installing pups/pets
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - linux
tags: 
  - Puppy Linux
created_at: 2009-05-10 17:02:00
updated_at: 2009-05-10 17:02:00
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

SORRY!: The current sfs file is broken. I am working as fast as I can to fix this, so check back for more!

I have recently had to send my new laptop back for a power board replacement, so
I have resurrected my old laptop. It is a HP Pavilion ze4900 that my coworker
gave me 2 years ago. (It was an old one he didn't want.) This laptop was pretty
old when I got it, and a series of unfortunate events occured.

First, the power cord got fragged. Then the battery died. Lastly, the hard drive
failed. With all these problems, there was only one solution: a small,
lightweight linux distro to use as a dumb terminal for my server. So I installed
Puppy Linux on a CD, ran it with a USB drive and worked on my Summer of Code
project with it. I loved Puppy Linux!

Since I am now in that same position, I have decided to update my version of
Puppy from 4.00 to 4.20. I also found out that without a hard drive even
attached, this laptop will boot from a USB drive. Since I now have a 8 Gb drive
and plenty of space, I decided to install a few extra programs, including the
development .sfs file, which allows me to build software for this excellent
distro!

I really wanted tetex and a good editor, but don't really like installing
pups/pets. I prefer sfs files, so I can have better control over what is
installed and how it is installed. So I got down to it!

I went over to the the Puppy Linux forum to find out how to make sfs files, and
found a great tool <a title="Edit-SFS"
href="http://www.murga-linux.com/puppy/viewtopic.php?t=12112">here</a>. Then I
downloaded tetex and texmf, compiled it in /usr/local/tetex, and created <a
title="tetex/texmf file"
href="http://rbe.homeip.net/content/downloads/files/texmf_420.sfs">this sfs
file</a>. To use it, just put it in the same location as your pup_save.2fs file
and reboot. If you want to use it with other versions of Puppy Linux, change the
420 in the filename to 400 or 300 or whatever the standard is for your version.

I am also working on incorporating several tex editors with it, so keep checking
back for more!
