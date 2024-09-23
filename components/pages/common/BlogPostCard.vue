<script setup lang="ts">
defineProps({
  blog: Object
})
</script>

<template>
  <div class="outlined-card no-padding blog-item">
    <div class="blog-image-wrap">
      <img :src="blog.image" alt="Blog Image">
    </div>
    <div class="blog-card-body">
      <p class="text-brand-600 text-sm">{{ blog.category }}</p>
      <h5 class="text-base leading-[24px] line-clamp-2">{{ blog.title }}</h5>
      <div>
        <div class="flex items-center gap-2 mb-2">
          <img :src="blog.authorImage" alt="Author" class="size-6 rounded-full">
          <p class="text-sm font-medium">{{ blog.authorName }}</p>
        </div>
        <p class="text-gray-500 text-sm">{{ blog.datePosted }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.blog-item{
  @apply w-[290px];
}
.blog-image-wrap{
  @apply h-[152px];
}
.blog-image-wrap img{
  @apply w-full h-full object-cover;
}
.blog-card-body{
  @apply py-4 px-6 flex flex-col gap-2;
}
</style>
