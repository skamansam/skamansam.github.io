---
title: Contact
updated_at: 2022-06-13T03:48:21.507Z
layout: default
keywords:
  - about
author: Samuel C Tyler
description: Contact SkamanSam for info, resume, hiring, etc.
excerpt: skamansam@gmail.com
---

<script>
  import Settings from '$lib/settings';
  import { browser } from '$app/env';

  if(browser) {
    const iframe = document.querySelector("iframe")?.addEventListener( "load", function(e) {
      // debugger;
      console.log('HEIGHT:', this.contentWindow.document.body.scrollHeight);
      this.style.height = this.contentWindow.document.body.scrollHeight + 'px';

    } );
  }
</script>

# Contact

You can contact us via email at skamansam@gmail.com, or by filling out the following form. Thank you!

<div class="typeform typeform--fix">

  <iframe id="contactForm" src="https://docs.google.com/forms/d/e/1FAIpQLSdryji69bvkVEN3XNeO-WfWaDtdZdaNKVcGbAFRD_oxn9lx4g/viewform?embedded=true" class="w-full" style="height: 110vh" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>
