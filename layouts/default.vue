<template>
  <div class="overflow-x-hidden">
    <BaseSideBar />
    <div class="overflow-y-auto ml-[312px] p-8">
      <TopBar />
      <main>
        <slot/>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSideBar from "../components/core/BaseSideBar.vue";
import TopBar from "../components/core/TopBar.vue";
</script>
