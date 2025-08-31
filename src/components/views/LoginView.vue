<script setup>
import { apiClient } from '@/api';
import { useAuth } from '@/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const { login } = useAuth();
const router = useRouter();

const username = ref('');
const password = ref('');

const loginIn = async () => {
    try {
        const data = {
            username: username.value,
            password: password.value,
        };
        const response = await apiClient('login', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        login(response.token);


        router.push({ name: 'home' });
    } catch (error) {
        console.error('Falha no login: ', error.message);
    }
}

</script>

<template>
    <div class="min-h-screen p-[4rem] flex justify-center items-center">
        <div class=" bg-login-box-second border border-login-box-border rounded-2xl p-[4rem]">
            <form @submit.prevent="loginIn" class="flex flex-col items-center">
                <h1 class="mb-[2rem]">Login</h1>
                <label for="username">Username</label>
                <input class="mb-[2rem] border rounded-sm px-[.5rem] py-[.3rem]" type="text" id="username" v-model="username">

                <label for="password">Senha</label>
                <input class="mb-[2rem] border rounded-sm px-[.5rem] py-[.3rem]" type="password" id="password" v-model="password">

                <button class="mb-[1rem] bg-linear-to-r from-button-start via-button-center to-button-end py-[0.5rem] px-[3rem]
                        rounded-3xl bg-[length:200%_100%] transition-all duration-500 hover:bg-[right_center] hover:cursor-pointer w-full" type="submit">Login</button>

                <router-link class="hover:underline" to="/register">Não tenho uma conta</router-link>
            </form>
        </div>
    </div>
</template>