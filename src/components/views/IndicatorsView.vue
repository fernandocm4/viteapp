<script setup>
import { apiClient } from '@/api';
import { ref, onMounted, computed, watch } from 'vue';
const items = ref([]);
const data = ref(null)
const error = ref(null)
const searchCoin = ref('')
const days = ref(7);


const fetchItems = async (coinName) => {

    if (!coinName) {
        return
    }

    try {
        error.value = null

        let url = `indicadores/${coinName}`;
        if (days.value) {
            url += `?days=${days.value}`;
        }
        const response = await apiClient(url);
        data.value = response;
    } catch (err) {
        error.value = 'Erro ao buscar dados no servidor: ' + err.message;
        console.error('Erro ao buscar dados no servidor: ', err);
    }

};

const search = () => {
    const coin = searchCoin.value.toLocaleLowerCase();
    fetchItems(coin);
}

function formatPrice(value) {
    if (value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        }).format(value);
    }
    return 'N/A';
}

watch(days, (newDays) => {
    fetchItems(searchCoin.value.toLocaleLowerCase(), newDays);
});

onMounted(async () => {
    try {
        const all_data = await apiClient('indicadores');
        items.value = all_data;
    } catch (err) {
        error.value = 'Erro ao buscar dados no servidor: ' + err.message;
        console.error('Erro ao buscar dados no servidor: ', err);
    }
});
</script>

<template>

    <section class="px-[5rem] min-h-screen flex flex-col justify-start">
        <div class=" pt-[8rem] flex flex-col items-center justify-center w-full mb-[5rem]">
            <div class="flex w-full flex-row mb-[2rem]">
                <span
                    class="z-1 rounded-2xl min-w-[10px] min-h-full mr-4 bg-linear-to-b from-button-start via-button-center to-button-end"></span>
                <h1 class="text-[2rem] font-extrabold">Indicadores</h1>
            </div>

            <div class="w-full flex flex-col items-start ">
                <label class="mb-[10px]" for="search">Pesquise por criptomoedas</label>
                <input class="mb-[2rem] border rounded-md h-[2rem] pl-[1rem]" id="search" type="text"
                    placeholder="Ex.: Bitcoin" v-model="searchCoin">
                <button
                    class="bg-linear-to-r from-button-start via-button-center to-button-end py-[0.5rem] px-[3rem]
                        rounded-3xl bg-[length:200%_100%] transition-all duration-500 hover:bg-[right_center] hover:cursor-pointer"
                    @click="search">
                    Pesquisar
                </button>
            </div>

        </div>



        <div v-if="data" class="flex flex-col w-full">

            <div class="flex w-full flex-row">
                <span
                    class="z-1 rounded-2xl min-w-[10px] min-h-full mr-4 bg-linear-to-b from-button-start via-button-center to-button-end"></span>
                <h1 class="text-[1.5rem] font-extrabold">Mostrando indicadores para {{ searchCoin }}</h1>
            </div>

            <div class="grid grid-cols-2">
                <div class=" bg-login-box-second border border-login-box-border rounded-2xl p-[2rem] my-[2rem]">
                    <h1>Média</h1>
                    <p>Último(s) {{ data.average_range_days }} dia(s)</p>
                    <p>{{ formatPrice(data.average) }}</p>

                    <div class="w-full flex flex-col items-start mb-[2rem]">
                        <label class="mb-[10px]" for="search">Dias</label>
                        <input class="mb-[2rem] border rounded-md h-[2rem] pl-[1rem]" id="search" type="text"
                            placeholder="Ex.: 30" v-model="days">
                    </div>

                </div>


                <div class="grid grid-cols-2 h-1/2">
                    <div class=" bg-login-box-second border border-login-box-border rounded-2xl p-[2rem] m-[2rem]">
                        <h1>Maior preço registrado</h1>
                        <p>No período de {{ data.average_range_days }} dia(s)</p>
                        <p>{{ formatPrice(data.x_time_high) }}</p>
                    </div>

                    <div class=" bg-login-box-second border border-login-box-border rounded-2xl p-[2rem] m-[2rem]">
                        <h1>Menor preço registrado</h1>
                        <p>No período de {{ data.average_range_days }} dia(s)</p>
                        <p>{{ formatPrice(data.x_time_low) }}</p>
                    </div>

                    <div class=" bg-login-box-second border border-login-box-border rounded-2xl p-[2rem] m-[2rem]">
                        <h1>Variação percentual</h1>
                        <p>últimos {{ data.average_range_days }} dia(s)</p>
                        <p>{{ data.price_change_percentage_x_d }} %</p>
                    </div>

                    <div class=" bg-login-box-second border border-login-box-border rounded-2xl p-[2rem] m-[2rem]">
                        <h1>Preço atual</h1>
                        <p>{{ formatPrice(data.current_price) }}</p>
                    </div>
                </div>
            </div>
        </div>


        <div v-else-if="items" class="">

            <div class="flex w-full flex-row ">
                <span
                    class="z-1 rounded-2xl min-w-[10px] min-h-full mr-4 bg-linear-to-b from-button-start via-button-center to-button-end"></span>
                <h1 class="text-[1.5rem] font-extrabold">Mostrando indicadores para todas as criptomoedas</h1>
            </div>

            <div class="w-full">
                <table class="font-montserrat">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Moeda</th>
                            <th>Maior valor em 24h (R$)</th>
                            <th>Menor valor em 24h (R$)</th>
                            <th>Variação em 24h (%)</th>
                            <th>Maior "all time" (R$)</th>
                            <th>Menor "all time" (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="key in items">
                            <td class="flex justify-center"><img :src="key.image" alt="icone" class="w-[2rem]"></td>
                            <td>{{ key.name }}</td>

                            <td class="">{{ formatPrice(key.high_24h) }}</td>
                            <td class="">{{ formatPrice(key.low_24h) }}</td>

                            <td class="">{{ key.price_change_percentage_24h }}</td>

                            <td class="">{{ formatPrice(key.ath) }}</td>
                            <td class="">{{ formatPrice(key.atl) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>


        <div v-else-if="error" class="text-red-500">
            {{ error }}
        </div>
        <div v-else>
            <p>Carregando...</p>
        </div>





    </section>
</template>