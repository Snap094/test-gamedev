<template>
  <div class="benefit">
    <div class="benefit__img">
      <img :src="props.img" :alt="props.alt">
    </div>
    <div class="benefit__text">
      <p v-html="props.title"
         class="benefit__title typography_body-bold typography_cl-gray-400 typography_text-center"></p>
      <p class="typography_caption-text typography_cl-gray-500 typography_text-center">{{ props.desc }}</p>
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
  flex-direction: row;
  gap: 25px;
  align-items: center;
  width: 345px;

  @include media-lg {
    flex-direction: column;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      text-align: left;
    }

    @include media-lg {
      gap: 25px;

      p {
        text-align: center;
      }
    }
  }

  &__img {
    background-color: $cl-primary-yellow;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    flex-shrink: 0;

    img {
      width: 25px;
    }

    @include media-lg {
      width: 65px;
      height: 65px;

      img {
        width: initial;
      }
    }
  }

  &__title {
    max-width: 250px;
    margin: 0;

    @include media-lg {
      margin: 0 auto;
    }
  }
}
</style>