<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="fixed z-20 flex justify-around navbar bg-black text-neutral-content shadow-red-700 shadow-xl">
    <RouterLink to="/" class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/ico_01.webp"/>
      Bier Heart
    </RouterLink>

    <RouterLink to="/history" class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/ico_02.webp"/>
      Historia
    </RouterLink>

    <RouterLink to="/galery" class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/ico_03.webp"/>
      Galería
    </RouterLink>
    
    <RouterLink to="/store" class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/ico_04.webp"/>
      Tienda
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  font-family: "Metal Mania", sans-serif;
  text-shadow: 1px 1px 2px red;
}
</style>