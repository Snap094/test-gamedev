<template>
  <div class="slide">
    <div class="slide__title">
      <slot name="title"></slot>
    </div>
    <div class="slide__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .slide {
    display: flex;
    flex-direction: column;
    row-gap: 65px;

    &__body {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
</style>