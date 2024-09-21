<script setup lang="ts">
import {ref} from 'vue';
import SectionHeader from "../common/SectionHeader.vue";
import JobApplication from "../common/JobApplication.vue";

const jobSlider = ref(null)

const sliderBreakpoints = {
  320: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 'auto',
    autoResize: false
  }
}

const businesses = [
  {
    name: 'Apple',
    logo: '/images/companies/apple.png',
    link: 'www.apple.com',
    location: 'Orange, US'
  },
  {
    name: 'Facebook',
    logo: '/images/companies/facebook.png',
    link: 'www.facebook.com',
    location: 'Orange, US'
  },
  {
    name: 'Tesla',
    logo: '/images/companies/lbdo.png',
    link: 'www.tesla.io',
    location: 'Orange, US'
  },
  {
    name: 'Amazon',
    logo: '/images/companies/amazon.png',
    link: 'www.amazon.com',
    location: 'Orange, US'
  }
]
</script>

<template>
  <section class="recent-followed-businesses-slider">
      <Swiper
          :free-mode="true"
          :space-between="20"
          :breakpoints="sliderBreakpoints"
          class="jobs-slider !flex flex-col-reverse gap-3"
      >
        <SectionHeader>
          <div class="flex items-center gap-4">
            <h3 class="section-heading">Recent Followed Businesses</h3>
            <SwiperControls />
          </div>
          <p class="section-link no-underline">
            View All
          </p>
        </SectionHeader>
        <SwiperSlide v-for="business in businesses" class="md:!w-[310px] max-h-full !h-auto my-1">
          <BusinessCard :business="business" />
        </SwiperSlide>
      </Swiper>
  </section>
</template>


<style scoped>

</style>
