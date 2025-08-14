<script setup>
import Content from './Content.vue';
import Greetings from './Greetings.vue';
import Buttom from './Buttom.vue';
</script>

<template>

    <div class="page">
        <div class="content">
            <div class="header">
                <img alt="System logo" class="logo" src="../assets/app_icon_logo.svg" width="200" height="200" />
                <div class="greetings-block">
                    <Greetings msg="Bem vindo!"/>
                </div>
            </div>
            <div>
                <Content />
            </div>
        </div>
        <Buttom title="Iniciar" btnlink="http://www.google.com"/>
        
    </div>

    
</template>

<style scoped>




@media (max-width: 1024px){
    .content {
        display: flex;
        flex-direction: column;
        margin-bottom: 5vh;
        
    }
    .header {
        display: flex;
        place-items: center;
        flex-direction: column;
    }

    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content {
        top: 10vh;
        position: relative;
        display: flex;  
    }

}


.greetings-block {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}

@media (min-width: 1024px){
    .logo {
        margin: 0 2rem 0 0;
    }

    .header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
}

.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    
}
}





</style>