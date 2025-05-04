<script setup>
import Titles from '@/components/Titles.vue';
import Return from '@/components/Return.vue';
import gallery from '@/data/gallery.json'
import { ref } from 'vue'

const selectedImage = ref(null)

function openModal(imgUrl) {
  selectedImage.value = imgUrl
  document.getElementById('image_modal').showModal()
}
</script>

<template>
  <Titles class="mt-5" msge="Galería del Rock and Roll"/>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 my-6">
    <div v-for="item in gallery" :key="item.idGrp" class="grid gap-4">
      <div v-for="pic in item.imgGrp" :key="pic.id">
        <img :src="pic.img" @click="openModal(pic.img)" alt="img" class="h-auto max-w-full rounded-lg hover:cursor-pointer">
      </div>
    </div>
  </div>

  <dialog id="image_modal" class="modal">
    <div class="modal-box relative p-1 rounded-none">

      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl text-white">✕</button>
      </form>

      <img v-if="selectedImage" :src="selectedImage" class="w-auto h-auto" alt="imagen ampliada" />
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

  <Return/>
</template>