---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: How to Keep Your Linux Always-On In A Dual-Boot System
description: Keeping nVidia loaded across boots
excerpt:  Then came the hard part - how to make Fedora switch video drivers based on whther it boots in VirtualBox or not.
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - linux
tags: 
  - Dual Boot
  - nVidia
  - CUDA
created_at: 2012-02-04 8:10:00
updated_at: 2020-09-01 1:29:00
---
During my move from Greensboro, NC to Baltimore, MD, I accidentally threw away
my home server (case of mistaken identity), so I needed to build a new one. This
was more fortuitous than not, as it gave me the opportunity to build a system
which I could use for another decade. I always insist on older hardware, with
the most options for upgrade. So I bought a pretty sweet setup that I can
upgrade a little at a time until socket LGA1155 goes out of style. As of now,
that means a quad-core i7 will run on my machine - not too bad for the next
decade! Here are the complete specs for my machine:
* Motherboard: [ECS P67H2-A2 Motherboard](http://www.newegg.com/Product/Product.aspx?Item=N82E16813135283&amp;Tpk=p67h2-a2)
* CPU: [Intel G620 2.6GHz](http://www.newegg.com/Product/Product.aspx?Item=N82E16819116399)
* Memory:[ 8Gb G.Skill Ripjaw](http://www.newegg.com/Product/Product.aspx?Item=N82E16820231311)
* Graphics: [2x nVidia 9500 1Gb PCIe](http://www.newegg.com/Product/Product.aspx?Item=N82E16814162054), in a (software) SLI configuration
* Power Supply: [Apevia Java 650W](http://www.newegg.com/Product/Product.aspx?Item=N82E16817148041)
* Hard Drive: [Seagate Barracuda 2Tb SATA 6Gb/s](Seagate Barracuda Green 2TB SATA 6Gb/s 64MB Cache 3.5-Inch Internal)
* Display: [ViewSonic 24" Widescreen LCD](http://www.amazon.com/gp/product/B004KCPH84/ref=oh_o01_s00_i00_details)
* Total Cost to Me: ~650.00usd
* Total Cost Premade: ~1,400
* Savings: ~ 100%

So my next task, once getting all the required parts and assembling them, was to
create a dual-boot system with Fedora 16 and Windows 7. I wanted to use my new
graphics goodness for CUDA application design and, of course, games. I installed
Windows 7, then Fedora 16 for a normal dual-boot configuration. Then came the
hard part: how to make Fedora switch video drivers based on whther it boots in
VirtualBox or not.

> ### Update:
> This article was never really finished. Basically, I used an init script to detect the presence of the virtualbox virtual instructionset,
> then loaded the nvidia driver when it wasn't present. In modern linux distros, like Fedora, there is no need for any of this. Just install
> the drivers, and the system will take care of the rest.
