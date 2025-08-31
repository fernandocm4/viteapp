<script setup>
import { useAuth } from './auth';
import { useRouter } from 'vue-router';

const { isLogged, logout } = useAuth();
const router = useRouter();

const handleLogout = () => {
  logout();
  router.push({ name: 'login' });
}


</script>

<template>
  <div class="fixed w-full h-[4rem] z-2 font-montserrat">
    <div class="bg-black/70 flex border-b-1 border-stone-400 justify-center items-center h-full backdrop-blur-md">
      <nav class="flex flex-row justify-between w-3/4">

        <h1 class="text-2xl font-extrabold"><router-link to="/">Crypto+</router-link></h1>

        <div>
          

          <router-link v-if="isLogged" class="hover:cursor-pointer inline-block ml-[4rem] duration-200 transform hover:tracking-[2px] hover:scale-140" to="/indicators">Indicadores</router-link>
          <router-link v-if="isLogged" class="hover:cursor-pointer inline-block ml-[4rem] duration-200 transform hover:tracking-[2px] hover:scale-140" to="/saved-data">Itens salvos</router-link>

          <button v-if="isLogged" @click="handleLogout"
            class="hover:cursor-pointer inline-block ml-[4rem] duration-200 transform hover:tracking-[2px] hover:scale-140">Sair</button>
        </div>

      </nav>
    </div>
  </div>

  <main
    class="w-full min-h-screen flex flex-col justify-center bg-linear-to-b  from-background-start via-background-center to-background-end">
    <RouterView />
  </main>

</template>

<style scoped></style>