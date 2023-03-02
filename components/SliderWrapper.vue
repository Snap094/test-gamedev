<template>
  <div class="slider-wrapper">
    <slider-slide>
      <template #title>
        <p class="typography_cl-gray-100 typography_slider-title">
          Зможеш обрати свій варіант
        </p>
      </template>
      <slider-item :title="'CPA'" :desc="'$25 і вище'"/>
      <slider-item :title="'REVSHARE'" :desc="'Піднімай до 60%'"/>
      <slider-item :title="'Гібрід'" :desc="'Зробимо як скажеш'"/>
    </slider-slide>
    <slider-control />
  </div>
</template>

<script setup>
import SliderControl from "./SliderControl";
import SliderSlide from  "./SliderSlide"
import SliderItem from "./SliderItem";
</script>

<style lang="scss" scoped>
  .slider-wrapper {
    background-color: $cl-primary-green;
    width: 385px;
    min-height: 600px;
    padding: 65px 45px 53px 53px;
    position: relative;
    overflow: hidden;

    &:after {
      content: url("assets/images/lines.png");
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &:before {
      content: url("assets/images/graph2.png");
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>