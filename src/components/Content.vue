<script setup>
import GreetingsItem from './GreetingsItem.vue';
</script>

<template>
    <GreetingsItem>
        <template #heading>Controle sua saúde</template>
        Organize sua rotina, treinos e dieta para alcançar resultados estratosféricos com seu corpo e mente.
    </GreetingsItem>

    <GreetingsItem>
        <template #heading>Controle seus estudos</template>
        Controle o que você consome, adquira repertório e os liste aqui para uma clareza acadêmica.
    </GreetingsItem>

    <GreetingsItem>
        <template #heading>Controle seu ofício</template>
        Controle o que você consome, adquira repertório e os liste aqui para uma clareza acadêmica.
    </GreetingsItem>
</template>