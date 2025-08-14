<script setup>
defineProps({
    msg: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>Aqui você encontrará a clareza que precisa para organizar a sua vida.</h3>
    </div>
</template>

<style scoped>
h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2.6rem;
    position: relative;
}

h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
}

.greetings h1,
.greetings h3 {
  text-align: start;
}

@media (max-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>