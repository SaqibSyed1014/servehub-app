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

const jobs = [
  {
    title: 'UI/UX Designer',
    logo: '/images/companies/google.png',
    company: 'Google',
    type: 'Remote',
    description: 'Lorem ipsum dolor sit amet consecte liquam euismod ac sagittis vitae.Lorem ipsum dolor sit amet consecte liquam euismod',
    status: 'Submitted',
    readTime: '5min'
  },
  {
    title: 'President of Sales',
    logo: '/images/companies/lbdo.png',
    company: 'Ferrari',
    type: 'Fairfield, US',
    description: 'Lorem ipsum dolor sit amet consecte liquam euismod ac sagittis vitae.Lorem ipsum dolor sit amet consecte liquam euismod',
    status: 'Submitted',
    readTime: '5min'
  },
  {
    title: 'Marketing Coordinator',
    logo: '/images/companies/hrblock.png',
    company: 'General Electric',
    type: 'Naperville, US',
    description: 'Lorem ipsum dolor sit amet consecte liquam euismod ac sagittis vitae.Lorem ipsum dolor sit amet consecte liquam euismod',
    status: 'Submitted',
    readTime: '5min'
  },
  {
    title: 'Web Designer',
    logo: '/images/companies/kpmg.png',
    company: 'Louis Vuitton',
    type: 'Remote',
    description: 'Lorem ipsum dolor sit amet consecte liquam euismod ac sagittis vitae.Lorem ipsum dolor sit amet consecte liquam euismod',
    status: 'Submitted',
    readTime: '5min'
  }
]
</script>

<template>
  <section class="recent-job-applications-slider">
    <div class="flex flex-col gap-4">

      <div>
        <Swiper
            ref="jobSlider"
            :free-mode="true"
            :space-between="20"
            :breakpoints="sliderBreakpoints"
            class="jobs-slider !flex flex-col-reverse gap-3"
        >
          <SectionHeader>
            <div class="flex items-center gap-4">
              <h3 class="section-heading">Recent Job applications</h3>
              <SwiperControls />
            </div>
            <p class="section-link no-underline">
              View All
            </p>
          </SectionHeader>
          <SwiperSlide v-for="job in jobs" class="md:!w-[340px] max-h-full !h-auto my-1">
            <JobApplication :job="job" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>
