<template>
  <main class="main">
    <div class="container">
      <div class="main__inner">
        <div class="main__about">
          <div class="main__title">
            <img class="main__img" src="~/assets/images/head.png" alt="rock-head">
            <h1 class="typography_head3 typography_cl-gray-200 typography_text-center">Володарі Трафіку</h1>
            <img class="main__img main__img_second" src="~/assets/images/head.png" alt="rock-head">
          </div>
          <p class="typography_caption-text typography_cl-gray-500 typography_text-center">SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш партнер отримує
            очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на відстані
            одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами.</p>
          <div class="main__stars">
            <img src="~/assets/images/star.svg" alt="star">
            <img src="~/assets/images/star.svg" alt="star">
            <img src="~/assets/images/star.svg" alt="star">
            <img src="~/assets/images/star.svg" alt="star">
            <img src="~/assets/images/star.svg" alt="star">
          </div>
        </div>
        <div class="main__benefits">
          <h2 class="typography_head4 typography_text-center">Тим, хто нагоняє Траф</h2>
          <div class="main__benefits-items">
            <benefits-item
                :img="'/test-gamedev/_nuxt/assets/images/megaphone.svg'"
                :alt="'megaphone'"
                :title="'Круті акції, призи та прибуткова бонусна програма'"
                :desc="'Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!'"
            />
            <benefits-item
                :img="'/test-gamedev/_nuxt/assets/images/smile.svg'"
                :alt="'smile'"
                :title="'Особлива підтримка для кожного 24/7'"
                :desc="'У вас буде свій персональний менеджер'"
            />
            <benefits-item
                :img="'/test-gamedev/_nuxt/assets/images/chart-bar.svg'"
                :alt="'chart-bar'"
                :title="'Детальна<br>статистика'"
                :desc="'Миттєве оновлення, зрозуміла система відображення статистики'"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

import BenefitsItem from "../components/BenefitsItem";
</script>

<style lang="scss" scoped>
.main {
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @include media-sm {
    padding: 50px 0;
  }

  &:before {
    content: '';
    position: fixed;
    opacity: 0.3;
    background: url("assets/images/centauri.png") center / 100% 100% no-repeat;
    left: 0;
    bottom: 0;
    transform: translate(-10vw, 20vh)scale(1.2);
    height: 50vh;
    width: 30vw;
    z-index: -1;

    @include media-sm {
      transform: translate(-20vw, 20vh)scale(1.2);
      width: 50vw;
    }
  }

  &:after {
    content: '';
    position: fixed;
    background: url("assets/images/centauri.png") center / 100% 100% no-repeat;
    right: 0;
    transform: translateX(35vw)scale(1.2);
    top: 93px;
    height: 80vh;
    width: 50vw;
    z-index: -1;

    @include media-sm {
      height: 50%;
      transform: translateX(30vw)scale(1.2);
      width: 60vw;
      opacity: 0.3;
    }
  }

  &__inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 125px;

    @include media-sm {
      row-gap: 50px;
    }
  }

  &__about {
    display: flex;
    row-gap: 25px;
    align-items: center;
    flex-direction: column;
    padding: 39px 44px;
    position: relative;
    z-index: 2;
    max-width: 900px;
    width: 100%;
    border-radius: 24px;
    background: rgba(35, 38, 47, 0.5);
    background-image: url("assets/images/graph.png");
    background-position: center;
    background-size: 100% 183px;
    background-repeat: no-repeat;

    @include media-sm {
      padding: 25px;
    }
  }

  &__benefits {
    display: flex;
    flex-direction: column;
    row-gap: 75px;
    width: 100%;

    @include media-sm {
      row-gap: 35px;
    }

    &-items {
      display: flex;
      justify-content: space-between;

      @include media-sm {
        flex-direction: column;
        gap: 25px;
        align-items: center;
      }
    }

  }

  &__title {
    display: flex;
    gap: 25px;

    @include media-sm {
      gap: 10px;
    }
  }

  &__img {
    height: 45px;

    &_second {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    @include media-sm {
      height: 25px;
    }
  }

  &__stars {
    display: flex;
    column-gap: 25px;
  }

}
</style>