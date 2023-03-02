<template>
  <form class="form" @submit.prevent>
    <div class="form__head">
      <div class="form__img">
        <img src="~/assets/images/lock.svg" alt="lock">
      </div>
      <h3 class="typography_form-title">Вхід</h3>
    </div>
    <div class="form__inner">
      <input-component :input-type="'email'" :placeholder="'Ваш email'"/>
      <input-component :input-type="'password'" :placeholder="'Ваш пароль'"/>
      <ButtonComponent class="form__button button_medium button_primary">Війти</ButtonComponent>
    </div>
  </form>
</template>

<script setup>
import ButtonComponent from "./ui-components/ButtonComponent";
import InputComponent from "./ui-components/InputComponent";

</script>

<style lang="scss" scoped>
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px;

    &__head {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 25px;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__img {
      background-color: $cl-primary-orange;
      border-radius: 15px;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__button {
      margin: 0 auto;
    }
  }
</style>