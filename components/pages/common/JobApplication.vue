<template>
  <div class="outlined-card">
    <div class="flex justify-between items-start text-xs font-medium">
      <img :src="job.logo" alt="Logo">
      <div class="flex gap-2 items-center">
        <div class="bg-blue-50 text-blue-900 rounded-2xl px-2 py-0.5">
          Submitted
        </div>
        <div class="h-4 w-px bg-gray-200"></div>
        <span>{{ job.readTime }}</span>
      </div>
    </div>
    <div class="mt-4">
      <h4 class="text-lg font-bolder">
        {{ job.title }}
      </h4>
      <div class="flex gap-2 items-center text-sm font-medium">
        <p>{{ job.company }}</p>
        <div class="h-4 w-px bg-gray-200"></div>
        <p class="text-gray-500">{{ job.type }}</p>
      </div>
      <p class="text-gray-500 pt-3">{{ job.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  job: Object
})
</script>

<style scoped>

</style>
