<script setup>
import Titles from '@/components/Titles.vue';
import Return from '@/components/Return.vue';

import { ref, onMounted } from 'vue'
import data from '@/assets/data/galery.json'

const items = ref([]);

onMounted(() => {
  items.value = data;
});
</script>

<template>
  <Titles class="mt-5" msge="Galería del Rock and Roll"/>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 my-6">
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_01.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_11.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_03.webp" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_18.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_05.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_06.webp" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_07.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_20.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_09.webp" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_10.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_02.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_12.webp" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_13.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_14.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_08.webp" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_16.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_17.webp" alt="">
      </div>
    </div>  
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_19.webp" alt="">
      </div>
    </div>    
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_04.webp" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gal_15.webp" alt="">
      </div>
    </div>    
  </div>

  <Return/>
</template>