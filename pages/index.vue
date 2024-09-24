<script setup lang="ts">
import DashboardAnalytics from "../components/pages/dashboard/DashboardAnalytics.vue";
import RecentJobApplications from "../components/pages/dashboard/RecentJobApplications.vue";
import RecentFollowedBusinesses from "../components/pages/dashboard/RecentFollowedBusinesses.vue";
import RecentBlogs from "../components/pages/dashboard/RecentBlogs.vue";

definePageMeta({
  pageTitle: 'Dashboard',
  pageSubtitle: 'Welcome Olivia'
})
</script>

<template>
    <DashboardAnalytics />
    <RecentJobApplications />
    <SavedJobs />
    <RecentFollowedBusinesses />
    <ExploredJobsAndBusinesses />
    <RecentBlogs />
</template>
