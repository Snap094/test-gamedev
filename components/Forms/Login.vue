<template>
  <form class="form" @submit.prevent>
    <div class="form__head">
      <div class="form__img">
        <img src="/lock.svg" alt="lock">
      </div>
      <h3 class="typography_form-title">Вхід</h3>
    </div>
    <div class="form__inner">
      <UiInput :input-type="'email'"
               :placeholder="'Ваш email'"
      />
      <UiInput :input-type="'password'"
               :placeholder="'Ваш пароль'"
      />
      <UiButton class="form__button button_medium button_primary">
        Війти
      </UiButton>
    </div>
  </form>
</template>

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