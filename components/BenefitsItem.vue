<template>
  <div class="benefit">
    <div class="benefit__img">
      <img :src="props.img" :alt="props.alt">
    </div>
    <div class="benefit__text">
      <p v-html="props.title" class="benefit__title typography_body-bold typography_cl-gray-400 typography_text-center"></p>
      <p  class="typography_caption-text typography_cl-gray-500 typography_text-center">{{ props.desc }}</p>
    </div>
  </div>
</template>

<script setup>
 const props = defineProps({
   img: String,
   title: String,
   desc: String,
   alt: String
 })
</script>

<style lang="scss" scoped>
  .benefit {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    width: 345px;

    @include media-sm {
      align-items: center;
      flex-direction: row;

    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 25px;

      @include media-sm {
        p {
          text-align: left;
        }

        gap: 5px;
      }
    }

    &__img {
      background-color: $cl-primary-yellow;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65px;
      height: 65px;
      flex-shrink: 0;

      @include media-sm {
        width: 45px;
        height: 45px;

        img {
          width: 25px;
        }
      }
    }

    &__title {
      max-width: 250px;
      margin: 0 auto;

      @include media-sm {
        margin: 0;
      }
    }
  }
</style>