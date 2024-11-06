<script setup lang="ts">
defineProps(
  {msge: String}
)
</script>

<template>
  <h1 class="p-4 text-center text-neutral-content shadow-red-700 text-4xl sm:text-6xl hover:text-red-100">
    {{ msge }}
  </h1>
</template>

<style scoped>
h1 {
  font-family: "Metal Mania", sans-serif;
  text-shadow: 1px 1px 2px red;
}
</style>