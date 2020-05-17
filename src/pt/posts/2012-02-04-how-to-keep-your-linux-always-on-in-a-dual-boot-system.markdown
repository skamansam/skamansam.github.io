---
layout: post
title: "How to Keep Your Linux Always-On In A Dual-Boot System"
date: 2012-02-04 8:10:00 -0400
comments: true
categories:
---

During my move from Greensboro, NC to Baltimore, MD, I accidentally threw away my home server (case of mistaken identity), so I needed to build a new one. This was more fortuitous than not, as it gave me the opportunity to build a system which I could use for another decade. I always insist on older hardware, with the most options for upgrade. So I bought a pretty sweet setup that I can upgrade a little at a time until socket LGA1155 goes out of style. As of now, that means a quad-core i7 will run on my machine - not too bad for the next decade! Here are the complete specs for my machine:
<ul>
	<li>Motherboard: <a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16813135283&amp;Tpk=p67h2-a2">ECS P67H2-A2 Motherboard</a></li>
	<li>CPU: <a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16819116399">Intel G620 2.6GHz</a></li>
	<li>Memory:<a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16820231311"> 8Gb G.Skill Ripjaw</a></li>
	<li>Graphics: <a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16814162054">2x nVidia 9500 1Gb PCIe</a>, in a (software) SLI configuration</li>
	<li>Power Supply: <a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16817148041">Apevia Java 650W</a></li>
	<li>Hard Drive: <a href="Seagate Barracuda Green 2TB SATA 6Gb/s 64MB Cache 3.5-Inch Internal">Seagate Barracuda 2Tb SATA 6Gb/s</a></li>
	<li>Display: <a href="http://www.amazon.com/gp/product/B004KCPH84/ref=oh_o01_s00_i00_details">ViewSonic 24" Widescreen LCD</a></li>
	<li>Total Cost to Me: ~650.00usd</li>
	<li>Total Cost Premade: ~1,400</li>
	<li>Savings: ~ 100%</li>
</ul>
So my next task, once getting all the required parts and assembling them, was to create a dual-boot system with Fedora 16 and Windows 7. I wanted to use my new graphics goodness for CUDA application design and, of course, games. I installed Windows 7, then Fedora 16 for a normal dual-boot configuration. Then came the hard part: how to make Fedora switch video drivers based on whther it boots in VirtualBox or not.
