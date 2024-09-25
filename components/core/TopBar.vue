<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

let title = ref('');
let subTitle = ref('');

watchEffect(() => {
  const { pageTitle, pageSubtitle } = route.meta;
  title.value = pageTitle;
  subTitle.value = pageSubtitle;
})
</script>

<template>
  <div class="pb-6">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl text-gray-700">{{ title }}</h1>
        <p class="text-sm text-gray-500">{{ subTitle }}</p>
      </div>

      <div class="w-[500px] flex justify-stretch">
        <div class="relative w-full">
          <SvgoSearch class="pointer-events-none absolute inset-y-0 left-3 h-full w-5 text-gray-500" />
          <input
              id="searchKeywordField"
              type="search"
              placeholder="Search"
              class="block h-full rounded-lg w-full !shadow-xs border !border-gray-300 bg-transparent !py-[13px] !pl-10 pr-0 placeholder:!text-gray-500 text-black sm:text-sm !text-base"
          >
        </div>
      </div>

      <div class="flex items-center gap-7">
        <div>
          <SvgoBell class="top-bar-icon" />
        </div>
        <div>
          <SvgoHelpCircle class="top-bar-icon" />
        </div>
        <div class="size-10 rounded-full overflow-hidden border border-black/10">
          <img src="/images/people/olivia.png" alt="User" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.top-bar-icon{
  @apply size-6 cursor-pointer text-gray-500 hover:text-gray-700 transition;
}
</style>
