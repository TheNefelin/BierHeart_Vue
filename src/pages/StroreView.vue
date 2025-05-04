<script setup>
import Titles from '@/components/Titles.vue';
import Return from '@/components/Return.vue';
import store from '@/data/store.json'
import { ref } from 'vue'

const selectedImage = ref(null)

function openModal(imgUrl) {
  selectedImage.value = imgUrl
  document.getElementById('image_modal').showModal()
}
</script>

<template>
  <img class="fixed w-full h-full object-cover opacity-10 z-0" src="@/assets/images//background.webp">
  <Titles class="mt-5" msge="Tienda Infernal"/>

  <section class="flex justify-center mt-4">
    <ul class="steps steps-vertical lg:steps-horizontal text-neutral-content">
      <li class="step step-warning">Contacto via Instagram</li>
      <li class="step step-warning">Elige o Encarganos la/s polera/s</li>
      <li class="step step-warning">Concretar pedido</li>
      <li class="step">Realiza pago por Transferencia</li>
      <li class="step">Entrega de productos</li>
    </ul>
  </section>

  <section class="flex flex-wrap gap-6 justify-center mt-10 max-w-screen-xl m-auto">
    <div v-for="item in store" :key="item.id" class="card glass w-56 text-neutral-content">
      <figure>
        <img :src="item.img" :alt="item.description" @click="openModal(item.img)" class=" cursor-pointer"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ item.price.toLocaleString('es-CL') }} {{ item.currency }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>

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

  <Return/>
</template>