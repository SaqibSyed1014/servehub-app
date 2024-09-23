<script setup lang="ts">
import BaseSideBar from "../components/core/BaseSideBar.vue";
import TopBar from "../components/core/TopBar.vue";

let isSidebarExpand = ref(true);
</script>

<template>
  <div class="overflow-x-hidden">
    <BaseSideBar @sidebar-toggled="(val) => isSidebarExpand = val" />
    <div class="overflow-y-auto p-8 transition-all duration-300" :class="[ isSidebarExpand ? 'ml-[312px]' : 'ml-[80px]' ]">
      <TopBar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
