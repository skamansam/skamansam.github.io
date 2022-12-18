<script type="ts">
  export let title = "";
  export let updated_on = "";
  export let created_at = "";
</script>

<h1>Portfolio: { title }</h1>
<p class="date">on: { created_at }</p>
<p class="date">by: { updated_on }</p>
<slot>
  <!-- the mdsvex content will be slotted in here -->
</slot>
