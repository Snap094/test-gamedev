<template>
  <transition name="fade">
    <div class="popup" v-show="props.open" ref="modal" @mousedown="closeModal">
      <div class="popup__inner" ref="modal">
        <div class="popup__content">
          <slot />
          <div class="popup__close" @click="$emit('close')">
            <IconCross />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
})

const emits = defineEmits(['close'])

const modal = ref(null);

watch(() => props.open, (val) => {
  if (val) {
    document.querySelector('body').className = "open-modal"
  } else {
    document.querySelector('body').classList.remove("open-modal")
  }
})

const closeModal = function ($event) {
  if ($event.target === modal.value) {
    emits('close')
  }
}

</script>

<style lang="scss" scoped>
.popup {
  height: calc(100vh - (100vh - 100%));
  overflow-y: auto;
  padding: 10px;
  top: 0;
  left: 0;
  background: rgba(53, 57, 69, 0.9);
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  pointer-events: initial;
  z-index: 500;

  @include media-lg {
    align-items: center;
  }

  &__inner {
    min-width: 355px;
    min-height: 284px;
    position: relative;
    transition: 0.5s ease-in-out;
    background: $cl-gray-700;
    opacity: 0.95;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    transition: .3s ease;
    opacity: 1;
    background-color: $cl-gray-600;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  &__content {
    height: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>

