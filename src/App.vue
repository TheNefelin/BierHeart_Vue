<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Banner from './components/Banner.vue';
import NavFooter from './components/NavFooter.vue';
import History from './components/History.vue';
</script>

<template>

  <header>
    <NavBar/>
    <Banner/>
  </header>

  <main class="mt-20 py-4 bg-stone-900">
    <History/>

    <section class="flex">
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            <h1>EVENTOS</h1>
            <img src="@/assets/images/event_01.jpg">
          </div>
        </div>
      </div>
    </section>

    <!-- <section>
      <iframe width="640" height="390"
      src="https://www.youtube.com/embed/Y-JJLG4AXFY?si=9LAR4bzxzVUJmDKb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section> -->
  </main>

  <NavFooter/>
</template>

