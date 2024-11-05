<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import Titles from '@/components/Titles.vue';
import Youtube from '@/components/Youtube.vue';
import Phone from '@/components/Phone.vue';
</script>

<template>
  <Banner/>
  <Titles class="mt-20"/>
  <Youtube class="px-4"/>
  <Phone/>

  <a class="fixed bottom-4 right-2 cursor-pointer" href="#">
    <img class="h-14" src="@/assets/images/pentagram.png">
  </a>
</template>
