<script setup>

</script>

<template>
  <div class="fixed w-full h-[4rem] z-2 font-montserrat">
    <div class="bg-black/70 flex border-b-1 border-stone-400 justify-center items-center h-full backdrop-blur-md">
      <nav class="flex flex-row justify-between w-3/4">

        <h1 class="text-2xl font-extrabold">Crypto+</h1>

        <div>
          <router-link class="inline-block ml-[4rem] duration-200 transform hover:tracking-[2px] hover:scale-140" to="/">Início</router-link>
        </div>
      </nav>
    </div>
  </div>

  <main class="w-full min-h-screen flex flex-col justify-center bg-linear-to-b  from-background-start via-background-center to-background-end">
    <RouterView />
  </main>

</template>

<style scoped>



</style>