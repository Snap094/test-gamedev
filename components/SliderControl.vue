<template>
  <div class="slider-control">
    <svg class="slider-control__arrow slider-control__arrow_left" xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60588 0.843461C3.33533 0.593724 2.91356 0.610592 2.66382 0.881138L0.509972 3.21444C0.27424 3.46982 0.274238 3.86344 0.509967 4.11882L2.66382 6.45218C2.91355 6.72273 3.33532 6.7396 3.60587 6.48987C3.87642 6.24013 3.89329 5.81836 3.64356 5.54781L2.52248 4.3333L8.99984 4.3333C9.36803 4.3333 9.6665 4.03482 9.6665 3.66663C9.6665 3.29844 9.36803 2.99997 8.99984 2.99997L2.52251 2.99997L3.64355 1.78552C3.89329 1.51497 3.87642 1.0932 3.60588 0.843461Z" fill="#E6E8EC"/>
    </svg>
    <ul class="slider-control__dots">
      <li class="slider-control__dot active"></li>
      <li class="slider-control__dot"></li>
      <li class="slider-control__dot"></li>
    </ul>
    <svg class="slider-control__arrow slider-control__arrow_right" xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60588 0.843461C3.33533 0.593724 2.91356 0.610592 2.66382 0.881138L0.509972 3.21444C0.27424 3.46982 0.274238 3.86344 0.509967 4.11882L2.66382 6.45218C2.91355 6.72273 3.33532 6.7396 3.60587 6.48987C3.87642 6.24013 3.89329 5.81836 3.64356 5.54781L2.52248 4.3333L8.99984 4.3333C9.36803 4.3333 9.6665 4.03482 9.6665 3.66663C9.6665 3.29844 9.36803 2.99997 8.99984 2.99997L2.52251 2.99997L3.64355 1.78552C3.89329 1.51497 3.87642 1.0932 3.60588 0.843461Z" fill="#E6E8EC"/>
    </svg>
  </div>
</template>

<script setup>

</script>

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