<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <img class="header__logo-img" src="~/assets/images/logo.png" alt="logo">
      </div>
      <div class="header__auth">
        <UiButton @click="isOpenLogin = true" class="button_small button_dark">Вхід</UiButton>
        <UiButton @click="isOpenRegister = true" class="button_primary button_small">Реєстрація</UiButton>
        <UiModal :open="isOpenLogin" @close="isOpenLogin = !isOpenLogin">
          <FormsLogin/>
        </UiModal>
        <UiModal :open="isOpenRegister" @close="isOpenRegister = !isOpenRegister">
          <FormsRegisterWrapper />
        </UiModal>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue";

const isOpenLogin = ref(false);
const isOpenRegister = ref(false);

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid $cl-gray-700;

  &__logo {
    width: 148.13px;
    height: 30px;
    position: initial;
    transform: initial;
    left: 50%;

    &-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @include media-lg {
      width: 222.2px;
      height: 45px;
      position: relative;
      transform: translateX(-50%);
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    width: 100%;
    max-width: 1440px;
    position: relative;

    @include media-lg {
      padding: 24px;
    }
  }

  &__auth {
    display: flex;
    gap: 15px;
  }
}
</style>