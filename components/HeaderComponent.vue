<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <img class="header__logo-img" src="~/assets/images/logo.png" alt="logo">
      </div>
      <div class="header__auth">
        <button-component @click="isOpenLogin = true" class="button_small button_dark">Вхід</button-component>
        <button-component @click="isOpenRegister = true" class="button_primary button_small">Реєстрація</button-component>
        <ModalPopUp :open="isOpenLogin" @close="isOpenLogin = !isOpenLogin">
          <FormLogin />
        </ModalPopUp>
        <ModalPopUp :open="isOpenRegister" @close="isOpenRegister = !isOpenRegister">
          <register-wrapper />
        </ModalPopUp>
      </div>
    </div>
  </header>
</template>

<script setup>
import ButtonComponent from "./ui-components/ButtonComponent";
import ModalPopUp from "./ui-components/ModalPopUp";
import {ref} from "vue";
import FormLogin from "./FormLogin"
import FormRegister from "./FormRegister";
import RegisterWrapper from "./RegisterWrapper";

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
    width: 222.2px;
    height: 45px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    &-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @include media-sm {
      width: 148.13px;
      height: 30px;
      position: initial;
      transform: initial;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    width: 100%;
    max-width: 1440px;
    position: relative;

    @include media-sm {
      padding: 10px 15px;
    }
  }


  &__auth {
    display: flex;
    gap: 15px;
  }
}
</style>