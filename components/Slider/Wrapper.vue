<template>
  <div class="slider-wrapper">
    <SliderSlide>
      <template #title>
        <p class="typography_cl-gray-100 typography_slider-title">
          Зможеш обрати свій варіант
        </p>
      </template>
      <SliderItem :title="'CPA'"
                  :desc="'$25 і вище'"
      />
      <SliderItem :title="'REVSHARE'"
                  :desc="'Піднімай до 60%'"
      />
      <SliderItem :title="'Гібрід'"
                  :desc="'Зробимо як скажеш'"
      />
    </SliderSlide>
    <SliderControl />
  </div>
</template>

<style lang="scss" scoped>
  .slider-wrapper {
    background-color: $cl-primary-green;
    width: 385px;
    min-height: 600px;
    padding: 65px 45px 53px 53px;
    position: relative;
    overflow: hidden;

    &:after {
      content: url("~/assets/images/lines.png");
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &:before {
      content: url("~/assets/images/graph2.png");
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>