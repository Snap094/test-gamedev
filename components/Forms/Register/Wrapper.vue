<template>
  <div class="register-wrapper">
    <SliderWrapper class="register-wrapper__slider"/>
    <FormsRegister />
  </div>
</template>

<style lang="scss" scoped>
  .register-wrapper {
    display: flex;

    &__slider {
      display: none;

      @include media-lg {
        display: block;
      }
    }
  }
</style>