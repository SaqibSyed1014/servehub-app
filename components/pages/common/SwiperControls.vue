<script setup lang="ts">
import {useSwiper} from "swiper/vue";

const swiper = useSwiper();
</script>

<template>
  <div class="flex gap-2">
    <div class="slider-control">
      <SvgoArrowLeft @click="swiper.slidePrev()" class="size-4 text-gray-500" />
    </div>
    <div class="slider-control">
      <SvgoArrowRight @click="swiper.slideNext()" class="size-4 text-gray-500" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
