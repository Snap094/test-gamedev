<template>
  <div class="slider-item">
    <div class="slider-item__image">
      <svg class="slider-item__check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 12L10 16L18 8" stroke="#58BD7D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
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

    &__check {
      path {
        stroke: $cl-gray-100;
      }
    }
  }
</style>