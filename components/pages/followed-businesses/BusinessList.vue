<script setup lang="ts">
const businesses = [
  {
    title: 'Adidas',
    logo: '/images/companies/adidas.png',
    location: 'Chilliwack, BC, Canada',
    jobsOpened: '12 new jobs open'
  },
  {
    title: 'Dell',
    logo: '/images/companies/dell.png',
    location: 'Hollywood, CA, US',
    jobsOpened: '8 new jobs open'
  },
  {
    title: 'Apple',
    logo: '/images/companies/apple.png',
    location: 'Texas, TX, US',
    jobsOpened: '2 new jobs open'
  },
  {
    title: 'Amazon',
    logo: '/images/companies/amazon.png',
    location: 'Gibsonia, PA, US',
    jobsOpened: '8 new jobs open'
  },
  {
    title: 'KPMG',
    logo: '/images/companies/kpmg.png',
    location: 'Texas, TX, US',
    jobsOpened: '11 new jobs open'
  },
  {
    title: 'Facebook',
    logo: '/images/companies/facebook.png',
    location: 'Sharlotte, PA, US',
    jobsOpened: '8 new jobs open'
  },
  {
    title: 'Tesla',
    logo: '/images/companies/tesla.png',
    location: 'Houston, TX, US',
    jobsOpened: '9 new jobs open'
  },
  {
    title: 'LBDO',
    logo: '/images/companies/lbdo.png',
    location: 'Sharlotte, PA, US',
    jobsOpened: '1 new jobs open'
  },
  {
    title: 'KFC',
    logo: '/images/companies/kfc.png',
    location: 'Texas, TX, US',
    jobsOpened: '25 new jobs open'
  },
  {
    title: 'Subway',
    logo: '/images/companies/subway.png',
    location: 'Chilliwack, BC, Canada',
    jobsOpened: '1 new jobs open'
  },
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-semibold">Business List</h3>

    <div class="flex flex-col gap-4">
      <template v-for="business in businesses">
        <div class="outlined-card">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img :src="business.logo" alt="" class="size-12 shrink-0">
              <div>
                <h6 class="text-base">{{ business.title }}</h6>
                <div class="flex gap-2 items-center text-sm font-medium mt-1">
                  <p>{{ business.location }}</p>
                  <div class="h-4 w-px bg-gray-200"></div>
                  <p class="text-gray-500">{{ business.jobsOpened }}</p>
                </div>
              </div>
            </div>
            <div class="shrink-0">
              <button class="unfollow-btn">Unfollow</button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <SectionDivider />
  <div class="text-center">
    <button type="button" class="load-more">Load More</button>
  </div>
</template>

<style scoped lang="postcss">

</style>
