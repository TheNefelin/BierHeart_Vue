<script setup>
import history from '@/data/history.json'

</script>

<template>
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-neutral-content">

    <template v-for="item in history" :key="item.id">
      <li>
        <hr v-if="item.id > 1">
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </div>

        <div :class="[item.id % 2 === 1 ? 'timeline-start mb-10 md:text-end': 'timeline-end mb-10']">
          <time class="font-mono italic">{{ item.year }}</time>
          <div class="text-lg font-black">{{ item.title }}</div>
          {{ item.description }}
          <img class="my-3 rounded-lg" :src="item.img" :alt="item.title">
        </div>
        <hr v-if="item.id < history.length"/>
      </li>
    </template>

  </ul>
</template>