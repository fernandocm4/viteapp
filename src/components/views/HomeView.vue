<script>
export default {
    data() {
        return {
            items: [],
            searchCoin: '',
            error: null,
            sortDirection: 'desc',
            showTopFive: false
        }
    },
    computed: {
        filteredItems() {
            let itemsToDisplay = this.items

            if (this.searchCoin) {
                itemsToDisplay = itemsToDisplay.filter(item => {
                    const name = item.name.toLowerCase();
                    const symbol = item.symbol.toLowerCase();
                    const search = this.searchCoin.toLowerCase();
                    return name.startsWith(search) || symbol.startsWith(search);
                });
            }

            if (this.showTopFive) {
                itemsToDisplay.sort((a, b) => b.current_price - a.current_price);
                itemsToDisplay = itemsToDisplay.slice(0, 5);
            } else {
                itemsToDisplay.sort((a, b) => {
                    const priceA = a.current_price;
                    const priceB = b.current_price;
                    if (this.sortDirection === 'asc') {
                        return priceA - priceB;
                    } else {
                        return priceB - priceA;
                    }
                });
            }
            return itemsToDisplay;
        },
    },
    methods: {
        formatPrice(value) {
            if (value) {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                }).format(value);
            }
            return 'N/A';
        },
        toggleSortDirection() {
            this.showTopFive = false;
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        },
        toggleTopFive() {
            this.showTopFive = !this.showTopFive;
        }
    },
    mounted() {
        const api_url = import.meta.env.VITE_APP_API_URL
        fetch(`${api_url}/`).then(response => {
            if (!response.ok) {
                throw new Error('Algo de errado ocorreu com a resposa do servidor');
            }
            return response.json();
        }).then(data => {
            this.items = data;
        }).catch(error => {
            this.error = 'Erro ao buscar dados do servidor: ' + error.message;
            console.error('Erro ao buscar dados no servidor: ', error);
        });
    },
};
</script>

<template>
    <div class="px-[15rem] pt-[10rem] flex flex-col items-center justify-center">
        <div class="flex w-full flex-row mb-[4rem]">
            <span
                class="z-1 rounded-2xl min-w-[10px] min-h-full mr-4 bg-linear-to-b from-button-start via-button-center to-button-end"></span>
            <h1 class="text-[2rem] font-extrabold">Cotação atual de criptomoedas</h1>
        </div>

        <div class="w-full flex flex-col items-start mb-[2rem]">
            <label class="mb-[10px]" for="search">Pesquise por criptomoedas</label>
            <input class="mb-[2rem] border rounded-md h-[2rem] pl-[1rem]" id="search" type="text" v-model="searchCoin"
                placeholder="Ex.: Bitcoin">
            <button
                class="bg-linear-to-r from-button-start via-button-center to-button-end py-[0.5rem] px-[3rem]
                        rounded-3xl bg-[length:200%_100%] transition-all duration-500 hover:bg-[right_center] hover:cursor-pointer mr-[1rem]"
                @click="toggleTopFive">
                {{ showTopFive ? 'Mostrar tudo' : 'Mostrar Top 5' }}
            </button>
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
                        <th class="hover:cursor-pointer" @click="toggleSortDirection">
                            Valor
                            <span v-if="sortDirection === 'asc'">▲</span>
                            <span v-else>▼</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="key in filteredItems" :key="key.id">
                        <td class="flex justify-center"><img :src="key.image" alt="icone" class="w-[2rem]"></td>
                        <td>{{ key.name }}</td>
                        <td class="uppercase">{{ key.symbol }}</td>
                        <td class="text-[1rem]">US {{ formatPrice(key.current_price) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
</template>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #2c2c2c;
}
</style>