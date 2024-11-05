<script setup>
import Titles from '@/components/Titles.vue';
import HistoryLine from '@/components/HistoryLine.vue';
import Return from '@/components/Return.vue';
</script>

<template>
  <img class="fixed w-full h-full object-cover opacity-5 top-0 z-0" src="@/assets/images//background.webp">

  <Titles class="mt-5 z-10" msge="Un Viaje de Conexión, Evolución y Metal"/>

  <section class="max-w-7xl mx-auto p-4">
    <HistoryLine/>
  </section>

  <Return/>  
</template>