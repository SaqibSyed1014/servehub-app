<script setup lang="ts">
import RecommendedJobs from "~/components/pages/saved-jobs/RecommendedJobs.vue";
</script>

<template>
  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-7">
      <SavedJobsList />
    </div>

    <div class="col-span-5">
      <RecommendedJobs />
    </div>
  </div>
</template>
