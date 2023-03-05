<template>
  <form class="form" @submit.prevent>
    <div class="form__head">
      <div class="form__img">
        <img src="~/assets/images/user.svg" alt="user">
      </div>
      <h3 class="typography_form-title">Реєстрація</h3>
    </div>
    <div class="form__inner">
      <UiInput :class-name="'valid'"
               :input-type="'text'"
               :placeholder="'Ваше імʼя'"
      />
      <UiInput :input-type="'email'"
               :placeholder="'Ваш email'"
      />
      <UiInput :input-type="'password'"
               :placeholder="'Ваш пароль'"
      />
      <UiInput :class-name="'error'"
               :message="'Паролі не співпадають'"
               :input-type="'password'"
               :placeholder="'Повторіть пароль'"
      />
      <div class="form__contact">
        <p class="form__contact-title typography_hairline-small typography_cl-gray-400 typography_text-center">
          Оберіть спосіб звязку
        </p>
        <div class="form__contact-row">
          <UiButton class="form__social form__social_telegram button_medium button_light button_icon-only">
            <template #icon>
              <img src="~/assets/images/telegram.svg" alt="telegram">
            </template>
          </UiButton>
          <UiButton class="form__social button_medium button_light button_icon-only">
            <template #icon>
              <img src="~/assets/images/skype.svg" alt="skype">
            </template>
          </UiButton>
          <UiInput :input-type="'text'"
                   :placeholder="'@телеграм_адреса'"
          />
        </div>
      </div>
      <UiButton class="form__button button_medium button_primary">
        Реєстрація
      </UiButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 25px;

  @include media-lg {
    padding: 60px 45px 45px;
  }

  &__contact-row {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }

  &__contact {
    padding: 15px 0;
  }

  &__head {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin-bottom: 25px;

    @include media-lg {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__img {
    background-color: $cl-primary-green;
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

  &__social {
    padding: 10px;
    height: 45px;

    &:hover {
      opacity: 0.7;
    }

    &_telegram {
      background-color: $cl-gray-600;
    }
  }
}
</style>