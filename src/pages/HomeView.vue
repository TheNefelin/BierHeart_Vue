<script setup lang="ts">
  import Banner from '@/components/Banner.vue';
  import Titles from '@/components/Titles.vue';
  import Youtube from '@/components/Youtube.vue';
  import Phone from '@/components/Phone.vue';
  import Return from '@/components/Return.vue';
  import Calendar from '@/components/Calendar.vue';
</script>

<template>
  <Banner/>
  <Titles class="mt-20" msge="Eventos"/>
  <Youtube class="px-4"/>
  <Phone/>
  <Titles class="mt-5" msge="Calendario"/>
  <Calendar/>
  <Return/>
</template>
