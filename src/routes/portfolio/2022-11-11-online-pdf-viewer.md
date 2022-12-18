---
title: Online PDF Viewer with API
description: "Create an API to store and retrieve data produced by machine learning models
  and display it in a meaningful way. "
excerpt: ""
created_at: 2022-11-11T18:43:13.911Z
updated_at: 2022-11-15T22:15:18.678Z
coverImage: /images/redshred-pdf-viewer.png
coverImageAlt: The RedShred Viewer, an online PDF viewer used to visualize data pulled from
  documents.
draft: false
tags: ""
categories: ""
twitterImage: /images/redshred-pdf-viewer.png
opengraphImage: /images/redshred-pdf-viewer.png
meta: ""
layout: portfolio
---

<script>
  import ImageExpander from '../../components/ImageExpander.svelte'
</script>

# The Challenge

 Today's world is a very fast-paced environment where the ability to glean important information from documents in the quickest way possible is a MUST. To aid in this process, we need an API to store data created by processing these documents with machine learning. We also needed to have the ability for customers to upload documents to be processed and access the processed data so they can include it in their own applications. To improve our machine learning and to help customers better understand the data we are gathering, we needed a tool to view the data that was gathered. To set all this up, we need to do it on Google Cloud so we can minimize server management.
 
# The TL;DR

Here is what I did and the tools I used to accomplish it.

* **Kubernetes** - learned kubernetes; managed, deployed, and upgraded 3 clusters (prod, staging, dev) for 4 years, mostly using hand-crafted YAML. 
* **API Server** - used Python and Django to create a versioned API for use by internal and external teams
* **Dashboard** - used React for the first version, then Vue.js for all subsequent versions
* **Online Document Viewer** - used Vue.js to create an online document viewer that can overlay many different types of data on top of an image of a document. Data includes text highlight, charts, graphs, and search results.

<ImageExpander title="RedShred Document Viewer" caption="RedShred Document Viewer" alt="Image of RedShred Document Viewer" src="/images/redshred-pdf-viewer.png"/>

<!-- # The Basics

Before getting started with any of this, I had to learn about and setup a Kubernetes cluster. It was not easy and the abstraction tools at the time were not conducive to learning about Kubernetes, so it seemed the best option was to hand-roll a cluster using a series of yaml configuration files. Managing and deploying all the services we needed is easy to do in yaml, even when there are a dozen or so services. Once setup, all I had to do was move the deployments from a Docker Compose file to kubernetes.

After this
 I created a Kubernetes cluster from scratch to manage many microservices used to process documents and store the results for clients. I used Python and Django to create a REST API to send data to backend processing services and store their results so clients can retrieve that data to use in their own applications. I built a dashboard in Vue.js to view that data and an online PDF viewer to better visualize it in a more meaningful way. 

  -->