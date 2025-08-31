<script setup>
import { onMounted, ref, computed } from 'vue';
import { apiClient } from '@/api';

const items = ref([]);
const searchCoin = ref('');
const error = ref(null);

const filteredItems = computed(() => {
    let itemsToDisplay = items.value

    if (searchCoin.value) {
        itemsToDisplay = itemsToDisplay.filter(item => {
            const name = item.name.toLowerCase();
            const symbol = item.symbol.toLowerCase();
            const search = searchCoin.value.toLowerCase();
            return name.startsWith(search) || symbol.startsWith(search);
        });
    }

    return itemsToDisplay;
});

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



onMounted(async () => {
    try {
        const data = await apiClient('/importar');
        items.value = data;
    } catch (err) {
        error.value = 'Erro ao buscar dados no servidor: ' + err.message;
        console.error('Erro ao buscar dados no servidor: ', err);
    }
});
</script>

<template>

    <div class="px-[15rem] pt-[10rem] flex flex-col items-center justify-center">
        <div class="flex w-full flex-row mb-[4rem]">
            <span
                class="z-1 rounded-2xl min-w-[10px] min-h-full mr-4 bg-linear-to-b from-button-start via-button-center to-button-end"></span>
            <h1 class="text-[2rem] font-extrabold">Itens salvos</h1>
        </div>

        <div class="w-full flex flex-col items-start mb-[2rem]">
            <label class="mb-[10px]" for="search">Pesquise por criptomoedas</label>

            <input class="mb-[2rem] border rounded-md h-[2rem] pl-[1rem]" id="search" type="text" v-model="searchCoin"
                placeholder="Ex.: Bitcoin">

        </div>

    </div>

    <section class="px-[15rem] min-h-screen flex flex-col items-center justify-start">



        <div class="w-full">
            <table class="font-montserrat">
                <thead>
                    <tr>
                        <th></th>
                        <th>Moeda</th>
                        <th>Símbolo</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="key in filteredItems" :key="key.id">
                        <td class="flex justify-center"><img :src="key.image" alt="icone" class="w-[2rem]"></td>
                        <td>{{ key.name }}</td>
                        <td class="uppercase">{{ key.symbol }}</td>
                        <td class="text-[1rem]">{{ formatPrice(key.current_price) }}</td>
                        <td>{{ key.save_data }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
</template>