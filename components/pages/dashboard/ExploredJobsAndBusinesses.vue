<script setup lang="ts">
const viewedJobs = [
  {
    title: 'General manager',
    company: 'Google',
    logo: '/images/companies/google.png',
    readTime: '5min',
    type: 'Remote'
  },
  {
    title: 'Systems analyst',
    company: 'Amazon',
    logo: '/images/companies/amazon.png',
    readTime: '5min',
    type: 'Remote'
  },
  {
    title: 'Graphic designer',
    company: 'Nike',
    logo: '/images/companies/nike.png',
    readTime: '5min',
    type: 'Remote'
  }
]

const exploredBusinesses = [
  {
    company: 'Adidas',
    logo: '/images/companies/adidas.png',
    type: '12 new jobs open'
  },
  {
    company: 'Dell',
    logo: '/images/companies/dell.png',
    type: '8 new jobs open'
  },
  {
    company: 'Amazon',
    logo: '/images/companies/amazon.png',
    type: '6 new jobs open'
  }
]
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <div class="outlined-card">
      <div class="flex flex-col gap-4">
        <div>
          <div class="flex justify-between">
            <div class="flex gap-2 items-center font-medium text-lg">
              <SvgoEye class="text-brand-700 size-5"/>
              <div><span class="text-brand-700 font-bold">75</span> Jobs Viewed</div>
            </div>
            <p class="section-link no-underline">View All</p>
          </div>
          <p class="text-base-500 text-xs">Based on your views, here are jobs you might like:</p>
        </div>

        <div class="flex flex-col gap-4">
          <template v-for="job in viewedJobs">
            <div class="outlined-card">
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
                <p class="text-gray-500 text-xs">{{ job.readTime }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="outlined-card">
      <div class="flex flex-col gap-4">
        <div>
          <div class="flex justify-between">
            <div class="flex gap-2 items-center font-medium text-lg">
              <SvgoEye class="text-brand-700 size-5"/>
              <div><span class="text-brand-700 font-bold">30</span> Businesses Explored</div>
            </div>
            <p class="section-link no-underline">View All</p>
          </div>
          <p class="text-base-500 text-sm">New opportunities at businesses you’ve explored.</p>
        </div>

        <div class="flex flex-col gap-4">
          <template v-for="business in exploredBusinesses">
            <div class="outlined-card">
              <div class="flex justify-between items-center">
                <div class="flex gap-4 items-center">
                  <img :src="business.logo" alt="" class="size-10 shrink-0">
                  <div>
                    <h6 class="text-base">{{ business.company }}</h6>
                    <div class="flex gap-2 text-sm font-medium mt-1">
                      <p class="text-gray-500">{{ business.type }}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button type="button" class="follow-btn">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

