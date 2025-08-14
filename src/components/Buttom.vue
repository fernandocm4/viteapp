<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    btnlink: {
        type: String,
        required: true
    },
})
</script>

<template>

    <a :href=btnlink>{{ title }}</a>

</template>

<style scoped>
a {
    background-image: linear-gradient(to right, #048A5E, #039061, #065238);
    border-radius: 10px;
    color: white;
    padding: 10px;
    margin: 10px;
    width: 200px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;

    position: relative;
    top: 100px;

    background-size: 200% 100%; 
    background-position: 0% 0%;
    transition: background-position 0.5s ease;
}

a:hover {
    background-position: 100% 0%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>