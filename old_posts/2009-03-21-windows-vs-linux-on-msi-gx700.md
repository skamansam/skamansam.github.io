---
layout: post
title: "Windows vs. Linux on MSI GX700"
date: 2009/03/21 9:32:00 -0400
comments: true
categories:
---

When I built my desktop/server in 2005, I used as many MSI (Micro-Satr International) parts as I could find. They were a little more expensive, but some trusted friends told me MSI was the way to go. I have been overly impressed with the hardware, especially after an uptime of 500+ days. The systemwas extremely stable. Now I try to buy MSI products whenever possible.

So - Last summer I knew I would have enough money to finally buy a laptop of my own. I was looking for a Desktop replacement for school.  So naturally, I went in search of an MSI laptop. Since you can't buy from the MSI web site, I had to go to a reseller, and RK Computers was MSI's suggested reseller. For months, I looked at all the models and researched their specifications, as it had to run Linux <strong>and</strong> Windows. After my thorough evaluation, i decided to purchase a MSI GX700. Here are the specs:

<span style="text-decoration: underline;">MSI MS-1719 (GX700).</span>
<strong>Display</strong>: WUXGA 1920 x 1200 Non-Glare-9 Cell Main Battery
<strong>MXM II Graphics Module</strong>: NVIDIA® GeForce® 8600M-GT 512MB VRAM + Turbo Cache-DX 10
<strong>Optical-DVD Or Blu-ray</strong>: Integrated Super-Multi Drive-Dual Layer
<strong>Core 2 Duo Processor</strong>: Intel Core™2 45nm T8300 2.40Ghz 3MB 800MHz
<strong>Compound-Heat Sink</strong>: Wet Arctic Silver 5 High-Density CPU Thermal Compound
<strong>2.5 Hard Drive</strong>: 320GB WD SATA II 5400 RPM 3Gbs 8MB Cache
<strong>Turbo Memory</strong>: No Turbo Memory-Windows Vista Support Only
<strong>Memory-DDR2 667</strong>: 4GB OCZ DDR2 667 PC2-5400 CL5 Dual Channel Kit
<strong>Wireless</strong>: Intel PRO Wireless 3945 802.11 a/b/g 11/54Mbps
<strong>Bluetooth</strong>: Integrated MS-6837D Bluetooth 2.0 + EDR USB Module
<strong>ExpressCard Remote</strong>: No Media Remote
<strong>NoteBook Cooler</strong>: Cooler Master Notebook Cooler Widscreen-USB Powered-Black
<strong>Operating System</strong>: No Operating System
<strong>Microsoft Office MLK</strong>: No Software
<strong>Warranty Options</strong>: 3 Year Parts-Lifetime Labor Warranty*-Lifetime Tech Support*
<strong><em>Total:</em></strong> $1878.04
<h2>Windows Vista 64bit</h2>
Since I was a student when I purchased this fine machine, I could get Windows Vista through the MSDNAA (Microsoft Develepers Network Academic Alliance). So I got down to it and installed Vista 32bit, because I thought programs would be more compatable. This turned out to be a mistake. Even though all of the software and drivers seemed to work fine, after only a few short days, I ran into problems (including a BSOD). I can't remember exactly what those problems were, but I decided to switch to 64bit Vista. Now that I have experienced it, Vista seems to have been made for 64bit architectures. Everything ran so much faster and much more stable than its 32bit counterpart.
<h3>Problems</h3>
The only problem I encountered is that the software for the special buttons (MSVCtrl) won't work under 64bit, even though they are 64bit versions. One other mention is that you have to use the nVidia graphics drivers from MSI's web site, as nVidia's version won't work properly.
<h2>Fedora 10 x86_64</h2>
After installing Vista, I moved on to Linux. My first Linux distribution ("distro" for short) was RedHat 5, and I have been using RedHat or Fedora ever since. Fedora 9 installed and worked fine, but I will only be covering Fedora 10 here, as it is the current release and is a LOT more stable. Fedora 10 is a great distro, with a lot of features and software for just about anything. All of the laptop's hardware works great in Fedora.

After installing Fedora, I went straight to the nVidia web site to get drivers for the graphics card. Since I am interested in programming, I downloaded the CUDA-enabled drivers. (Note: you do not need any special nVidia drivers like with Vista - just use the standard Linux drivers.) <a href="http://www.nvidia.com/object/cuda_home.html">CUDA </a>is a technology, created by nVidia, which allows programs to use the graphics card processor (GPU) as if it were another CPU. These drivers were extremely stable, even though they were a beta release. As of now, CUDA support is enabled, by default, for all of nVidia's stable drivers (greater than version 1.80).

I was expecting to have a few problems with the wireless card, as Linux support for wireless cards is a little limited, but it works great with the default drivers. The integrated bluetooth works, as well.
<h3>Problems</h3>
There are a few problems with Linux in general on this Laptop. The on-board sound chip is an Intel High-Definition audio chip, and Linux doesn't have the proper drivers for this yet. The sound works, but when you plug in headphones, the laptop's speakers do not mute as expected. (I am currently pouring over Intel's driver guide for this chip, and may end up hacking the current driver to fix this problem.) There are also no working drivers available for the integrated webcam.

So that's it! This laptop is a great buy for anyone - whether you want to play games or just want a nice big screen to type up your latest best-selling novel.
