<template>
  <nav class="fixed z-20 flex justify-around navbar bg-black text-neutral-content shadow-red-700 shadow-xl">
    <a class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/logo.png"/>
      Bier Heart
    </a>
    <a class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/diablo-skull.png"/>
      Historia
    </a>
    <a class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/thunder-skull.png"/>
      Media
    </a>
    <a class="btn btn-ghost text-lg sm:text-xl hover:text-red-100">
      <img class="h-12 hidden md:block" src="@/assets/images/burning-skull.png"/>
      Tienda
    </a>
  </nav>
</template>

<style scoped>
nav {
  font-family: "Metal Mania", sans-serif;
  text-shadow: 1px 1px 2px red;
}
</style>