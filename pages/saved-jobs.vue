<script setup lang="ts">
import PageInfoBar from "../components/pages/common/PageInfoBar.vue";
import SavedAndRecommendedJobs from "~/components/pages/saved-jobs/SavedAndRecommendedJobs.vue";

definePageMeta({
  pageTitle: 'Saved Jobs',
  pageSubtitle: '80 Total Saved Jobs'
})
</script>

<template>
  <PageInfoBar />
  <SavedAndRecommendedJobs />
</template>
