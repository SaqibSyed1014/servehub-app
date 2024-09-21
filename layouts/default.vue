<template>
  <div>
    <BaseSideBar></BaseSideBar>
    <slot />
  </div>
</template>

<script setup lang="ts">
import BaseSideBar from "~/components/core/BaseSideBar.vue";
</script>
