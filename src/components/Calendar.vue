<script setup>
import events from '@/data/events.json'
import { ref } from 'vue'

const selectedImage = ref(null)

function openModal(imgUrl) {
  selectedImage.value = imgUrl
  document.getElementById('image_modal').showModal()
}
</script>

<template>
  <ul class="list bg-neutral text-neutral-content rounded-box shadow-md max-w-screen-lg mt-5 mx-4 lg:mx-auto">
  
    <li class="p-4 pb-2 text-xs tracking-wide">Fechas de Tocatas y Conciertos</li>

    <li v-for="(event, index) in events" :key="index" class="bg-gradient-to-b from-red-900 to-black flex flex-col sm:flex-row items-center sm:items-center gap-4 p-4 m-2 text-center sm:text-left rounded-lg" >
      <div class="text-4xl font-thin opacity-70 tabular-nums sm:text-right">
        <div>{{ event.date }}</div>
        <div class="text-sm">{{ event.time }}</div>
      </div>

      <div class="flex justify-center">
        <img class="h-48 object-contain cursor-pointer" :src="event.img" alt="evento" @click="openModal(event.img)" />
      </div>

      <div class="flex-1 sm:self-stretch sm:flex sm:flex-col sm:justify-center">
        <div class="font-semibold text-lg">{{ event.club }}</div>
        <div class="text-xs uppercase font-semibold opacity-60">{{ event.place }}</div>
        <div class="text-xs uppercase font-semibold opacity-60">{{ event.tiket }}</div>
        <div class="text-xs uppercase font-semibold opacity-60">{{ event.details }}</div>
      </div>
    </li>

    <dialog id="image_modal" class="modal">
      <div class="modal-box relative p-1 rounded-none">

        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl">✕</button>
        </form>

        <img v-if="selectedImage" :src="selectedImage" class="w-auto h-auto" alt="imagen ampliada" />
      </div>

      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
      
    <li class="p-4 pt-2 text-xs tracking-wide">Fechas de Tocatas y Conciertos</li>
  </ul>
</template>