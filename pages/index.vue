<script setup lang="ts">
import DashboardAnalytics from "../components/pages/dashboard/DashboardAnalytics.vue";
import RecentJobApplications from "../components/pages/dashboard/RecentJobApplications.vue";
import RecentFollowedBusinesses from "~/components/pages/dashboard/RecentFollowedBusinesses.vue";
</script>

<template>
  <div class="flex flex-col justify-stretch gap-6">
    <DashboardAnalytics />
    <RecentJobApplications />
    <SavedJobs />
    <RecentFollowedBusinesses />
  </div>
</template>

<style scoped lang="postcss">

</style>

