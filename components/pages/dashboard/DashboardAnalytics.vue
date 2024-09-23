<template>
  <section class="profile-summary grid grid-cols-12 gap-6">
    <div class="col-span-12 xl:col-span-8">
      <div class="outlined-card no-padding">
        <div class="flex justify-between items-center p-4 border-b border-gray-200">
          <div class="flex items-center gap-4">
            <div class="rounded-circle bg-brand-700 border-4 border-brand-900">
              <SvgoUser class="size-3 text-white"/>
            </div>
            <h3>Profile summary</h3>
          </div>

          <div>
            <p class="section-link">
              Edit Profile
            </p>
          </div>
        </div>

        <div class="pt-6 pb-8 px-4">
          <div class="flex items-center justify-between">
            <div class="border-r border-gray-200 pr-6">
              <div class="flex items-center gap-2 pb-2">
                <h4 class="text-lg text-gray-700 font-bold">Olivia Rhye</h4>
                <div class="bg-warning-50 text-warning-700 rounded-2xl font-medium text-xs py-0.5 px-2">
                  Strength: Medium
                </div>
              </div>
              <div class="">
                <div class="checkbox-group">
                  <input type="checkbox" class="rounded-cb">
                  <p>Lorem ipsum dolor sit amet consecte liquam euismod ac sagittis vitae.</p>
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" class="rounded-cb">
                  <p>Lorem ipsum dolor sit amet consecte liquam euismod ac sagittis vitae.</p>
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" class="rounded-cb">
                  <p>Lorem ipsum dolor sit amet consecte liquam</p>
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" class="rounded-cb">
                  <p>Lorem ipsum dolor sit amet consecte</p>
                </div>
              </div>
              <p class="section-link mt-8">
                (4) Show All Pending Task
              </p>
            </div>

            <div class="flex flex-col gap-6 items-center relative">
              <SemiCircleProgressBar />
              <p class="text-brand-700 underline cursor-pointer">Complete Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-4 flex flex-col gap-6">
      <div class="outlined-card h-full">
        <div class="flex items-center gap-4 pb-2">
          <div class="rounded-circle bg-[#3E4784] border-4 border-[#293056]">
            <SvgoUser class="size-3 text-white"/>
          </div>
          <div>
            <h5 class="font-medium pb-1">Total Applications Submitted</h5>
            <p class="text-3xl font-semibold">125</p>
          </div>
        </div>
        <p class="text-xs text-gray-500">Application applied last year were <strong>240</strong></p>
        <div class="absolute -right-3 -bottom-3">
          <SvgoApplication class="size-16 text-[293056] opacity-20" />
        </div>
      </div>
      <div class="outlined-card h-full">
        <div class="flex items-center gap-4 pb-2">
          <div class="rounded-circle bg-warning-400 border-4 border-warning-500">
            <SvgoDataFlow class="size-3 text-white"/>
          </div>
          <div>
            <h5 class="font-medium pb-1">Applications in Progress</h5>
            <p class="text-3xl font-semibold">47</p>
          </div>
        </div>
        <p class="text-xs text-gray-500">Application applied last year were <strong>240</strong></p>
        <div class="absolute -right-3 -bottom-3">
          <SvgoDataFlow class="size-16 text-warning-500 opacity-30" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SemiCircleProgressBar from "~/components/pages/common/SemiCircleProgressBar.vue";
</script>
