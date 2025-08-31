<script setup>
import { apiClient } from '@/api';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


const username = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
    try {
        const data = {
            username: username.value,
            password: password.value,
        };
        const response = await apiClient('register', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        router.push({ name: 'login' });

    } catch (error) {
        console.error('Falha ao registrar', error.message);
    }
}

</script>

<template>
    <div class="min-h-screen p-[4rem] flex justify-center items-center">
        <div class=" bg-login-box-second border border-login-box-border rounded-2xl p-[4rem]">
            <form @submit.prevent="register" class="flex flex-col items-center">
                <h1 class="mb-[2rem]">Criar uma nova conta</h1>
                <label for="username">Username</label>
                <input class="mb-[2rem] border rounded-sm px-[.5rem] py-[.3rem]" type="text" id="username"
                    v-model="username">

                <label for="password">Senha</label>
                <input class="mb-[2rem] border rounded-sm px-[.5rem] py-[.3rem]" type="password" id="password"
                    v-model="password">

                <button
                    class="mb-[1rem] bg-linear-to-r from-button-start via-button-center to-button-end py-[0.5rem] px-[3rem]
                        rounded-3xl bg-[length:200%_100%] transition-all duration-500 hover:bg-[right_center] hover:cursor-pointer w-full"
                    type="submit">Criar</button>

                <router-link class="hover:underline" to="/login">Voltar</router-link>

            </form>
        </div>
    </div>
</template>