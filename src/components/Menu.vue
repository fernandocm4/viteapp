<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
    
})
</script>



<template>
    
    <li><a :href=link>{{ name }}</a></li>
    
</template>

<style scoped>

@media (max-width: 1024px){
    li a {
        color: white;

        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        padding-left: 30px;
        padding-right: 30px;

        transition: all 0.3s;
    }

    li a:hover {

        font-weight: 600;
        font-size: 1.2rem;

        letter-spacing: 4px;
    }
}

@media (min-width: 1024px){
li a {
    padding-left: 100px;
    padding-right: 100px;
    color: white;

    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    transition: all 0.3s;
}

li a:hover {

    font-weight: 600;
    font-size: 1.2rem;

    letter-spacing: 4px;
}
}

@media (max-width: 720px) {
    li a {
        padding-left: 20px;
        padding-right: 20px;
    }
}






</style>