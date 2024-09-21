<script setup lang="ts">
import { useHomeStore } from "~/segments/home/store";

const nuxtApp = useNuxtApp();
const homeStore = useHomeStore();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0); // emphasize scroll to top on route change
})
</script>

<template>
  <Html lang="en-US">
  <VitePwaManifest />
    <Body class="bg-white text-gray-700 antialiased transition-colors duration-300">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

