<script setup lang="ts">
import RecommendedAndRecentBusinesses from "~/components/pages/followed-businesses/RecommendedAndRecentBusinesses.vue";
</script>

<template>
  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-7">
      <BusinessList />
    </div>

    <div class="col-span-5">
      <RecommendedAndRecentBusinesses />
    </div>
  </div>
</template>
