<script setup lang="ts">
const recommendedBusinesses = [
  {
    title: 'Sketch',
    logo: '/images/companies/sketch.png',
    location: 'MS, US'
  },
  {
    title: 'Netflix',
    logo: '/images/companies/netflix.png',
    location: 'CA, US',
  },
  {
    title: 'Paypal',
    logo: '/images/companies/paypal.png',
    location: 'TX, US',
  },
  {
    title: 'Adobe',
    logo: '/images/companies/adobe.png',
    location: 'PA, US',
  },
  {
    title: 'Facebook',
    logo: '/images/companies/facebook.png',
    location: 'PA, US',
  }
]

const recentBusinesses = [
  {
    title: 'Ikea',
    logo: '/images/companies/ikea.png',
    location: 'MS, US'
  },
  {
    title: 'Subway',
    logo: '/images/companies/subway.png',
    location: 'CA, US',
  },
  {
    title: 'Starbucks',
    logo: '/images/companies/starbucks.png',
    location: 'TX, US',
  },
  {
    title: 'Taco Bell',
    logo: '/images/companies/taco-bell.png',
    location: 'PA, US',
  },
  {
    title: 'KFC',
    logo: '/images/companies/kfc.png',
    location: 'PA, US',
  }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-6">
      <h3 class="text-lg font-semibold">Recommended Businesses</h3>

      <div class="flex flex-col gap-4">
        <template v-for="business in recommendedBusinesses">
          <div class="border-b border-gray-200 last:border-b-0 pb-4">
            <div class="flex justify-between">
              <div class="flex gap-4 items-center">
                <img :src="business.logo" alt="" class="size-10 shrink-0">
                <div>
                  <h6 class="text-base">{{ business.title }}</h6>
                  <div class="flex gap-2 items-center text-sm font-medium mt-1">
                    <p>{{ business.location }}</p>
                  </div>
                </div>
              </div>
              <div class="shrink-0">
                <button class="follow-btn">Follow</button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <h3 class="text-lg font-semibold">Recently Added</h3>

      <div class="flex flex-col gap-4">
        <template v-for="business in recentBusinesses">
          <div class="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
            <div class="flex justify-between">
              <div class="flex gap-4 items-center">
                <img :src="business.logo" alt="" class="size-10 shrink-0">
                <div>
                  <h6 class="text-base">{{ business.title }}</h6>
                  <div class="flex gap-2 items-center text-sm font-medium mt-1">
                    <p>{{ business.location }}</p>
                  </div>
                </div>
              </div>
              <div class="shrink-0">
                <button class="follow-btn">Follow</button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <SectionDivider />
  <div class="text-center">
    <p class="section-link no-underline">View All</p>
  </div>
</template>
