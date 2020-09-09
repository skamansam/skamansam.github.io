<template>
  <div class="note">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Note',
  }
</script>

<style lang="stylus">
@import '~@theme/styles/config.styl'
.note
  margin: 1em
  padding: 1em
  border: 2px dashed $primaryColor
  &:before
    content: 'Note'
    margin-top: -1.9em
    color: $primaryColor
    background: $bgColor
    display: block
    width: fit-content
    padding: 0px 0.25em
</style>
