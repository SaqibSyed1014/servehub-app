<script setup lang="ts">
import {ref} from 'vue';
import SectionHeader from "../common/SectionHeader.vue";

const sliderBreakpoints = {
  320: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 'auto',
    autoResize: false
  }
}

const blogs = [
  {
    title: 'Highest Paying Restaurant Jobs: Top Positions in the Food Market',
    image: '/images/blogs/blog-1.png',
    category: 'Career Tips & Development',
    authorName: 'Courtney Henry',
    authorImage: '/images/people/demi.png',
    datePosted: '20 june,2024',
  },
  {
    title: 'Common Mistakes to Avoid as a Server or Waiter: Essential Tips and Tricks',
    image: '/images/blogs/blog-2.png',
    category: 'Career Tips & Development',
    authorName: 'Courtney Henry',
    authorImage: '/images/people/david.png',
    datePosted: '20 june,2024',
  },
  {
    title: 'Highest Paying Restaurant Jobs: Top Positions in the Food Market',
    image: '/images/blogs/blog-3.png',
    category: 'Career Tips & Development',
    authorName: 'Courtney Henry',
    authorImage: '/images/people/lana.png',
    datePosted: '20 june,2024',
  },
  {
    title: 'How to Maximize Your Tips as a Waiter/Waitress: Proven Strategy',
    image: '/images/blogs/blog-4.png',
    category: 'Career Tips & Development',
    authorName: 'Courtney Henry',
    authorImage: '/images/people/andi.png',
    datePosted: '20 june,2024',
  },
  {
    title: 'Hosts and Hostesses - How to Manage Reservations Efficiently',
    image: '/images/blogs/blog-2.png',
    category: 'Career Tips & Development',
    authorName: 'Courtney Henry',
    authorImage: '/images/people/olivia.png',
    datePosted: '20 june,2024',
  },
  {
    title: 'Highest Paying Restaurant Jobs: Top Positions in the Food Market',
    image: '/images/blogs/blog-3.png',
    category: 'Career Tips & Development',
    authorName: 'Courtney Henry',
    authorImage: '/images/people/demi.png',
    datePosted: '20 june,2024',
  },
]
</script>

<template>
  <section class="recent-job-applications-slider">
      <Swiper
          :free-mode="true"
          :space-between="20"
          :breakpoints="sliderBreakpoints"
          class="jobs-slider !flex flex-col-reverse gap-3"
      >
        <SectionHeader class="slider-header">
          <div class="flex items-center gap-4">
            <h3 class="section-heading">Recent Blog Posts</h3>
            <SwiperControls />
          </div>
          <p class="section-link no-underline">
            View All
          </p>
        </SectionHeader>
        <SwiperSlide v-for="blog in blogs" class="!w-auto my-1">
          <BlogPostCard :blog="blog" />
        </SwiperSlide>
      </Swiper>

  </section>
</template>


<style scoped>

</style>
