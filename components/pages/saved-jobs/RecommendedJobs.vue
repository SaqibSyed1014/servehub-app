<script setup lang="ts">
const savedJobs = [
  {
    title: 'Project Manager',
    logo: '/images/companies/nike.png',
    company: 'General Electric',
    type: 'PA, US',
    postedBefore: '1 days ago'
  },
  {
    title: 'Web Designer',
    logo: '/images/companies/amazon.png',
    company: 'Mini Stop',
    type: 'Naperville, US',
    postedBefore: '1 days ago'
  },
  {
    title: 'Marketing Coordinator',
    logo: '/images/companies/google.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '5 days ago'
  },
  {
    title: 'Waitress',
    logo: '/images/companies/kpmg.png',
    company: 'CoThiiy',
    type: 'Toledo, US',
    postedBefore: '1 week ago'
  },
  {
    title: 'Receptionist',
    logo: '/images/companies/adidas.png',
    company: 'General Electric',
    type: 'Naperville, US',
    postedBefore: '2 days ago'
  }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="text-lg font-semibold">Recommended Jobs</h3>

    <div class="flex flex-col gap-4">
      <template v-for="job in savedJobs">
        <div class="border-b border-gray-200 pb-5">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img :src="job.logo" alt="" class="size-10 shrink-0">
              <div>
                <h6 class="text-base">{{ job.title }}</h6>
                <div class="flex gap-2 items-center text-sm font-medium mt-1">
                  <p>{{ job.company }}</p>
                  <div class="h-4 w-px bg-gray-200"></div>
                  <p class="text-gray-500">{{ job.type }}</p>
                </div>
              </div>
            </div>
            <p class="text-gray-500 text-xs">{{ job.postedBefore }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
  <SectionDivider />
  <div class="text-center">
    <p class="section-link no-underline">View all Jobs</p>
  </div>
</template>
