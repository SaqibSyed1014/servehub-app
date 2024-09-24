<script setup lang="ts">
const savedJobs = [
  {
    title: 'Executive assistant',
    logo: '/images/companies/lbdo.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '1 days ago'
  },
  {
    title: 'Developer',
    logo: '/images/companies/facebook.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '1 days ago'
  },
  {
    title: 'Marketing manager',
    logo: '/images/companies/adidas.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '1 days ago'
  },
  {
    title: 'Hairdresser',
    logo: '/images/companies/hrblock.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '1 days ago'
  },
  {
    title: 'Marketing Coordinator',
    logo: '/images/companies/apple.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '5 days ago'
  },
  {
    title: 'Waitress',
    logo: '/images/companies/kpmg.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '1 week ago'
  },
  {
    title: 'Receptionist',
    logo: '/images/companies/dell.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '2 days ago'
  }
]
</script>

<template>
  <div>
    <div class="flex flex-col gap-4">
      <template v-for="job in savedJobs">
        <div class="outlined-card">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img :src="job.logo" alt="" class="size-12 shrink-0">
              <div>
                <h6 class="text-base">{{ job.title }}</h6>
                <div class="flex gap-2 items-center text-sm font-medium mt-1">
                  <p>{{ job.company }}</p>
                  <div class="h-4 w-px bg-gray-200"></div>
                  <p class="text-gray-500">{{ job.type }}</p>
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <p class="text-gray-500 text-xs">{{ job.postedBefore }}</p>
              <div class="h-4 w-px bg-gray-200"></div>
              <SvgoBookmarked class="size-4"/>
            </div>
          </div>
        </div>
      </template>
    </div>
    <SectionDivider />
    <div class="text-center">
      <button type="button" class="load-more">Load More</button>
    </div>
  </div>
</template>
