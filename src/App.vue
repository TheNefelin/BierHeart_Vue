<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import NavFooter from './components/NavFooter.vue';
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <main class="pt-20 pb-10 bg-neutral-900">
    <RouterView></RouterView>
  </main>

  <NavFooter/>
</template>

