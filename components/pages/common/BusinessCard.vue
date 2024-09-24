<template>
  <div class="outlined-card">
    <div class="flex gap-4 text-xs font-medium mb-6">
      <img class="shrink-0 size-10" :src="business.logo" alt="Logo">
      <div>
        <h4 class="text-lg font-bolder pb-1">
          {{ business.name }}
        </h4>
        <p class="text-gray-500 text-sm pb-2">{{ business.location }}</p>
        <p class="section-link text-sm">{{ business.link }}</p>
      </div>
    </div>
    <button class="unfollow-btn">Unfollow</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  business: Object
})
</script>

