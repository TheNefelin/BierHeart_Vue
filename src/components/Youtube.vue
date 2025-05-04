<script setup>
import youtube from '@/data/youtube.json'
</script>

<template>
  <div class="flex flex-wrap gap-4 justify-center max-w-screen-xl mx-auto my-5">
    <div v-for="item in youtube" :key="item.id" class="card w-96 bg-base-100 shadow-red-700 shadow-md">
      <iframe :src="item.url" class="w-full aspect-video rounded-xl"></iframe>
    </div>
  </div>
</template>