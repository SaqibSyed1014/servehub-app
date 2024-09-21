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

<style scoped>
.unfollow-btn {
  @apply w-full py-2 rounded-lg bg-brand-50 text-brand-700 text-center text-sm font-semibold;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.1);
}
</style>
