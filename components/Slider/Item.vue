<template>
  <div class="slider-item">
    <div class="slider-item__image">
      <IconCheck />
    </div>
    <div>
      <p class="typography_button-small typography_cl-gray-100">{{props.title}}</p>
      <p class="typography_caption-text typography_cl-gray-100">{{props.desc}}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    desc: String
  })
</script>

<style lang="scss" scoped>
  .slider-item {
    display: flex;
    gap: 25px;

    &__image {
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }
  }
</style>