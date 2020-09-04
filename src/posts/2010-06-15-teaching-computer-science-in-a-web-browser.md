---
published: false
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Teaching Computer Science in a Web Browser?
description: Ideas on how to teach CSC courses using only a web browser
excerpt: 
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - programming
tags: 
  - Education
  - Online Education
  - Computer Science
created_at: 2010-06-15 08:28:37
updated_at: 2010-06-15 08:28:37
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

With the web becoming more pervasive and HTML5 threatening to annihilate Flash,
is JavaScript becoming a viable language for teaching advanced topics in
computer science? Here is a run-down of topics and projects that could be used
to teach the courses. The following course listing is taken from my university,
the University of North Carolina at Greensboro. I have organized them by course
content, as some courses use similar tools/methods. Also note that some courses
are designed to teach specific software, outside of the browser, so I have
placed them under the topic "Outside the Browser"

## General Programming Courses

## Graphics

## Algorithms

### 230 Elementary Data Structures and Algorithms
Advanced syntax of high level language taught in CSC 130. Emphasis on
modularization and abstraction. Big-O analysis of algorithms. Design and use of
abstract data types with various implementations.

## Networking

## Math-Based Courses

### 250 Foundations of Computer Science I
An introduction to the fundamental ideas underlying contemporary computer
science with a focus on the computation and construction of objects.

## Hardware
These classes are designed to teach specific hardware concepts

### 261 Computer Organization and Assembly Language
CPU, memory, I/O devices, digital logic design, psw. Number representations and
machine language. Assembly language instruction types, registers, addressing,
arithmetic, instruction format, opcodes, pseudo-opcodes, assembler directives,
system calls, and macros.

Many would think this class would be
difficult to do in the browser, but there are many assembly interpreters written
in JavaScript.  Here are a few online interpreters of interest for this
classJS:
* [JSAssembly](http://http://timhatch.com/projects/jsassembly/) - an interpeter for x86 assembly codes
* [JSNES](http://benfirshman.com/projects/jsnes/) - Great working interpreter for SNES ROM images
* [6502asm](http://6502asm.com/) - 6502 assembly code interpreter

I did not find any online SPARC interpreters, as UNCG teaches this course in
SPARC assembly, but it would be trivial to modify one of the above to suit. As
for the Hardware design portion of this course, it is taught from a
textbook on SPARC assembly.

## Outside the Browser
These courses are designed to teach specific software, and

### 330 Advanced Data Structures
Static and dynamic data structures emphasizing binary trees and graphs. Advanced
programming techniques. Advanced sorting and searching algorithms. Hashing
techniques. Performance analysis. Methods of developing large applications
programs.

### 339 Concepts of Programming Languages
Concepts of block-structured, object-oriented, functional, logic, and concurrent
programming languages. Comparative study of syntactic and semantic features of
these languages and writing programs using them.

### 340 Software Engineering
Practical and theoretical concepts of software engineering.

### 350 Foundations of Computer Science II
High level concepts in the theoretical foundations of computer science.

### 463 Basic Systems Administration Laboratory
Installing operating systems, peripherals, hardware, and software. Backups,
recompiling the kernel (loading/unloading modules), providing Web services, and
user administration. (Formerly CSC 563)

### 464 Intermediate Systems Administration Laboratory
Topics selected from routing, firewall, Primary Domain Controller, Backup Domain
Controller, Domain Controller trust, SAMBA, DNS round robin, and PPP
connectivity setup. (Formerly CSC 564)

### 465 Advanced Systems Administration Laboratory
Automated installation, software installation, systems programming, system
administration in a large organization. Projects will include departmental or
university computer system work. (Formerly CSC 565)

### 471 Principles of Database Systems
Contemporary database systems. Emphasis on query processing, design, and
implementation of applications in relational (SQL) databases. Introduction to
other database models such as XML, object-oriented, and deductive.

### 490 Senior Project
Application of classroom knowledge and skills in computer science to solve
real-world problems and to develop research and development skills.

### 493 Honors Work in Computer Science
Research in a topic of special interest at the Honors level.

### 495 Selected Topics in Computer Science
May be repeated for credit for a total of 6 s.h. when topic of study changes.
A topic of special interest is studied in depth.

### 521 Computer Graphics
Survey of graphics algorithms, data structures, and techniques.

### 522 Digital Image Processing
Image representation, enhancement, compression, coding, restoration, and wavelet
transforms.

### 523 Numerical Analysis and Computing
Number systems and errors, solutions of non-linear and linear systems,
eigenvalue problems, interpolation and approximation, numerical differentiation
and integration, solution of differential equations.

### 524 Numerical Analysis and Computing
Continuation of 523 with special topics in numerical analysis, emphasis on
applied mathematics.

### 526 Bioinformatics
Introduction to the problems and methods in Bioinformatics. Problem areas
include restriction mapping, map assembly, sequencing, DNA arrays, and sequence
comparison.

### 529 Artificial Intelligence
Logical foundations, knowledge representation and reasoning, search, and
selected topics such as natural language processing and reasoning under
uncertainty.

### 539 Introduction to Compiler Design
Basic techniques of compiler design and implementation: lexical analysis,
parsing, code generation. Sizable programming project implementing a compiler
for a block-structured language with strong typing.

### 540 Human-Computer Interface Development
Survey of concepts and techniques for human-computer interface development.
Topics include user-centered design, user interface programming, and usability
evaluation.

### 550 Combinatorics on Words
Introduction to the problems and methods in algorithmic combinatorics on words.
Problem areas include periodicity, primitivity, and borderedness.

### 553 Theory of Computation
Finite state automata and regular expressions, context-free grammars, push-down
automata and their use in parsing, overview of language translation systems,
models for programming language semantics, computability and undecidability.

### 555 Algorithm Analysis and Design
Sequential algorithm design and complexity analysis. Dynamic programming. Greedy
algorithms. Graph algorithms. Selected advanced topics from NP-completeness;
approximation, randomized, parallel, number-theoretic algorithms; Fast Fourier
Transform; computational geometry; string matching.

### 561 Principles of Computer Architecture
Hardware and software components of computer systems, their organization and
operations. Topics: comparative instruction set architectures, microprogramming,
memory management, processor management, I/O, interrupts, and emulation of
processors.

### 562 Principles of Operating Systems
Techniques and strategies used in operating system design and implementation:
managing processes, input/output, memory, scheduling, file systems, and
protection.

### 567 Principles of Computer Networks
Hardware and software components of computer networks, their organization and
operations. Topics: open system interconnection; local area networks; TCP/IP
internetworking, routing, and packet switching; network programming.

### 568 Principles of Wireless Networks
Digitial communications, Communication networks, wireless communication
technology, wireless networking, wireless LANs and wireless network programming.

### 580 Cryptography and Security in Computing
Modern development of cryptography and secure encryption protocols. Program
security and viruses. Operating system protection. Network and distributed
system security. Database security. Administering security.

### 583 Firewall Architecture and Computer Security
Firewall hardware and software technologies. Architectures, protocols and their
applications.
