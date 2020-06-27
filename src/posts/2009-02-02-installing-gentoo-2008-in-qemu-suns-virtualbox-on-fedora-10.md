---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Installing Gentoo 2008 in (qemu) Sun's VirtualBox on Fedora 10
description: Information on virtual OSs and benchmarks
excerpt: I am currently taking a class on Operating System design and need to do some kernel hacking for the class. 
cover: false
coverImage: /images/GSoC-logo-horizontal-800.png
coverAlt: RBE Logo
categories:
  - linux
tags: 
  - Fedora
  - VirtualBox
  - Gentoo
created_at: 2009-02-02 08:31
updated_at: 2009-02-02 08:31
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

# Why I Need A Virtual OS
I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about 
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into 
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding 
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my 
virtual machine because it rebuilds everyting on the fly.

I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won't even boot, just hangs.

Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the 
kernel module loading step.

I finally decided to try a LiveCD. This worked beautifully. However, I couldn't start an X session, as the appropriate 
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran `/opt/installer/bin/install` 
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the 
end of the day. (I have classes all day, and will resume install this evening.)

[more to come later...]

So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to 
try out Sun's VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The 
reason for testing on VBox is that qemu doesn't really support 64 bit OSs. I also wanted something that could take 
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I 
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will 
post the results here when I finish.

## `nbench` result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):

```
BYTEmark* Native Mode Benchmark ver. 2 (10/95)
Index-split by Andrew D. Balsa (11/97)
Linux/Unix* port by Uwe F. Mayer (12/96,11/97)

TEST                : Iterations/sec.  : Old Index   : New Index
                    :                  : Pentium 90* : AMD K6/233*
--------------------:------------------:-------------:------------
NUMERIC SORT        :          1165.6  :      29.89  :       9.82
STRING SORT         :          258.88  :     115.67  :      17.90
BITFIELD            :      4.6794e+08  :      80.27  :      16.77
FP EMULATION        :          251.44  :     120.65  :      27.84
FOURIER             :           25958  :      29.52  :      16.58
ASSIGNMENT          :          34.798  :     132.41  :      34.34
IDEA                :            7068  :     108.10  :      32.10
HUFFMAN             :          2325.1  :      64.48  :      20.59
NEURAL NET          :          50.819  :      81.64  :      34.34
LU DECOMPOSITION    :            1652  :      85.58  :      61.80
==========================ORIGINAL BYTEMARK RESULTS==========================
INTEGER INDEX       : 84.556
FLOATING-POINT INDEX: 59.082
Baseline (MSDOS*)   : Pentium* 90, 256 KB L2-cache, Watcom* compiler 10.0
==============================LINUX DATA BELOW===============================
CPU                 : Dual GenuineIntel Intel(R) Core(TM)2 Duo CPU     T8300  @ 2.40GHz 800MHz
L2 Cache            : 3072 KB
OS                  : Linux 2.6.27.12-170.2.5.fc10.x86_64
C compiler          : gcc version 4.3.2 20081105 (Red Hat 4.3.2-7) (GCC)
libc                : libc-2.9.so
MEMORY INDEX        : 21.765
INTEGER INDEX       : 20.615
FLOATING-POINT INDEX: 32.769
Baseline (LINUX)    : AMD K6/233*, 512 KB L2-cache, gcc 2.7.2.3, libc-5.4.38
* Trademarks are property of their respective holder.
```

## `nbench` result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):
```
BYTEmark* Native Mode Benchmark ver. 2 (10/95)
Index-split by Andrew D. Balsa (11/97)
Linux/Unix* port by Uwe F. Mayer (12/96,11/97)

TEST                : Iterations/sec.  : Old Index   : New Index
                    :                  : Pentium 90* : AMD K6/233*
--------------------:------------------:-------------:------------
NUMERIC SORT        :          1139.8  :      29.23  :       9.60
STRING SORT         :          250.16  :     111.78  :      17.30
BITFIELD            :      4.2657e+08  :      73.17  :      15.28
FP EMULATION        :          108.16  :      51.90  :      11.98
FOURIER             :           20163  :      22.93  :      12.88
ASSIGNMENT          :          34.385  :     130.84  :      33.94
IDEA                :            4207  :      64.34  :      19.10
HUFFMAN             :          2259.9  :      62.67  :      20.01
NEURAL NET          :          44.636  :      71.70  :      30.16
LU DECOMPOSITION    :          1589.6  :      82.35  :      59.46
==========================ORIGINAL BYTEMARK RESULTS==========================
INTEGER INDEX       : 67.742
FLOATING-POINT INDEX: 51.348
Baseline (MSDOS*)   : Pentium* 90, 256 KB L2-cache, Watcom* compiler 10.0
==============================LINUX DATA BELOW===============================
CPU                 : Dual GenuineIntel Intel(R) Core(TM)2 Duo CPU     T8300  @ 2.40GHz 2399MHz
L2 Cache            : 64 KB
OS                  : Linux 2.6.27-gentoo-r8
C compiler          : x86_64-pc-linux-gnu-gcc
libc                :
MEMORY INDEX        : 20.781
INTEGER INDEX       : 14.479
FLOATING-POINT INDEX: 28.480
Baseline (LINUX)    : AMD K6/233*, 512 KB L2-cache, gcc 2.7.2.3, libc-5.4.38
* Trademarks are property of their respective holder.
```