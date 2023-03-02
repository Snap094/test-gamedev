<template>
  <div class="register-wrapper">
    <slider-wrapper  class="register-wrapper__slider"/>
    <form-register />
  </div>
</template>

<script setup>

import FormRegister from "./FormRegister";
import SliderWrapper from "./SliderWrapper";
</script>

<style lang="scss" scoped>
  .register-wrapper {
    display: flex;

    &__slider {
      @include media-sm {
        display: none;
      }
    }
  }
</style>