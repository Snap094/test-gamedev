<template>
  <button class="button">
    <slot></slot>
    <slot name="icon" v-if="$slots.icon"></slot>
    <IconStar v-else class="button__star"/>
  </button>
</template>

<script setup>


</script>

<style lang="scss">
  @import "~/assets/styles/button";
</style>