<script setup lang="ts">
import BaseSideBar from "../components/core/BaseSideBar.vue";
import TopBar from "../components/core/TopBar.vue";
import PageWrapper from "~/components/pages/common/PageWrapper.vue";
import SectionDivider from "~/components/pages/common/SectionDivider.vue";

let isSidebarExpand = ref(true);
</script>

<template>
  <div class="overflow-x-hidden">
    <BaseSideBar @sidebar-toggled="(val) => isSidebarExpand = val" />
    <div class="overflow-y-auto p-8 transition-all duration-300" :class="[ isSidebarExpand ? 'ml-[312px]' : 'ml-[80px]' ]">
      <TopBar />
      <PageWrapper>
        <slot />
      </PageWrapper>
      <SectionDivider />
      <footer class="flex gap-6">
        <p class="text-gray-500">© 2024 ServeHub, LLC.</p>
        <a href="">Privacy Policy</a>
        <a href="">API</a>
        <a href="">Contact</a>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="postcss">
footer{
  @apply text-sm;
}
footer a{
  @apply font-medium underline hover:no-underline
}
</style>
