<template>
  <div class="slider-control">
    <IconArrow class="slider-control__arrow slider-control__arrow_left"/>
    <ul class="slider-control__dots">
      <li class="slider-control__dot active"></li>
      <li class="slider-control__dot"></li>
      <li class="slider-control__dot"></li>
    </ul>
    <IconArrow class="slider-control__arrow slider-control__arrow_right"/>
  </div>
</template>

<style lang="scss" scoped>
  .slider-control {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    left: 50%;
    bottom: 107px;
    transform: translateX(-50%);
    z-index: 100;

    &__arrow {
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }

      &_right {
        transform: rotate(180deg);
      }
    }

    &__dots {
      display: flex;
      gap: 10px;
    }

    &__dot {
      width: 8px;
      height: 8px;
      background-color: $cl-gray-300;
      border-radius: 8px;

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }

      &.active {
        background-color: $cl-secondary-yellow;
      }
    }
  }
</style>