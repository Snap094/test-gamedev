<template>
  <fieldset class="custom-input">
    <legend v-if="props.legend" class="custom-input__legend">{{ props.legend }}</legend>
    <div class="custom-input__wrap">
      <input
          required
          :type="props.inputType"
          class="custom-input__input "
          :class="props.className"
          :placeholder="props.placeholder"
      />
      <div class="custom-input__icon custom-input__icon_hide-password"></div>
      <div class="custom-input__icon custom-input__icon_clear"></div>
      <span class="custom-input__message" >{{ props.message }}</span>
    </div>
  </fieldset>

</template>

<script setup>
const props = defineProps({
  inputType: {
    type: String,
    default: 'password',
  },
   placeholder: {
    type: String,
    default: "Input caption",
  },
  legend: {
    type: String,
  },
  message: {
    type: String,
    default: "Display error message here."
  },
  className: {
    type: String
  }
})

</script>

<style lang="scss" scoped>
  .custom-input {
    display: flex;
    flex-direction: column;

    &__legend {
      @include typography_hairline-small;
      color: $cl-gray-400;
      margin-bottom: 12px;
    }

    &__message {
      font-family: $font-poppins;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      padding-left: 16px;
      margin-top: 5px;
      display: none;
    }

    &__wrap {
      position: relative;
    }

    &__icon {
      position: absolute;
      width: 24px;
      height: 24px;
      right: 16px;
      top: 12px;
      opacity: 0;
      pointer-events: none;
      transition: .3s ease;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        transition: .3s ease;
        opacity: 0;
        transform: translate(0, -50%) rotate(0deg);
        width: 25px;
        border-bottom: 2px solid $cl-gray-500;
      }

      &_hide-password {
        &:after {
          opacity: 1;
          transform: translate(0, -50%) rotate(40deg);
        }
      }

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    &__input {
      background-color: $cl-gray-800;
      padding: 14px 44px 14px 14px ;
      outline: none;
      border: 2px solid $cl-gray-600;
      border-radius: 70px;
      transition: border .3s linear;
      color: $cl-gray-300;
      width: 100%;
      @include typography_button-small;

      &[type=password] {
        & ~ .custom-input__icon {
          background-image: url("~/assets/images/eye.svg");
          opacity: 1;
          pointer-events: initial;
        }
      }

      &.valid {
        border: 2px solid $cl-primary-green;

        & ~ .custom-input__icon {
          background-image: url("~/assets/images/check.svg");
          opacity: 1;
          pointer-events: initial;

          &:after {
            content: none;
          }
        }
      }

      &.error {
        color: $cl-primary-orange;
        border: 2px solid $cl-primary-orange;

        &::placeholder {
          color: $cl-primary-orange;
          transition: .3s ease;
        }

        & ~ .custom-input__message {
          display: block;
          color: $cl-primary-orange;
        }

        & ~ .custom-input__icon {
          opacity: 0;
          pointer-events: none;
        }

        & ~ .custom-input__icon_hide-password {
          opacity: 0;
          pointer-events: none;
        }

        & ~ .custom-input__icon_clear {
          background-image: url("~/assets/images/close.svg");
          opacity: 1;
          pointer-events: initial;

          &:after {
            content: none;
          }
        }

      }

      &:hover {
        border: 2px solid $cl-gray-500;

        &::placeholder {
          color: $cl-gray-500;
        }
      }

      &:focus {
        border: 2px solid $cl-primary-yellow;

        &::placeholder {
          color: $cl-gray-300;
        }
      }

      &::placeholder {
        color: $cl-gray-500;
      }
    }
  }
</style>