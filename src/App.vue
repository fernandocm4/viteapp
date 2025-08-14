<script setup>
import PageContent from './components/PageContent.vue';
import Menu from './components/Menu.vue';

</script>

<template>

  <header>
    <ul>
      <Menu name="Sobre" link="https://www.google.com/"/>
      <Menu name="Contato" link="http://www.youtube.com"/>
      <Menu name="FAQ" link="http://www.youtube.com"/>
      <Menu name="MyLab" link="http://www.youtube.com"/>
    </ul>
    
  </header>

  <main>
    <PageContent />
  </main>

  <footer>
    <p>*Este aplicativo não é uma alternativa para ajuda profissional. Caso necessário, busque a ajuda de um.*</p>
  </footer>

</template>

<style scoped>
header {
  line-height: 1.5;
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 10vh;
}

header ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
}

footer {
  position: fixed;
  display: flex;
  bottom: 5vh;
}



@media (min-width: 1024px) {
  footer p {
      font-family: "Montserrat", sans-serif;
      font-weight: 200;
  }
}

@media (max-width: 1024px) {
  header {
    line-height: 1.5;
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 5vh;
    z-index: 1;
  }

}

@media (max-width: 720px) {
  header {
    background-color: rgba(34, 34, 34, 0.7);
    backdrop-filter: blur(5px);
    top: 0;
    padding-top: 2vh;
    padding-bottom: 2vh;
    width: 100%;
    justify-content: center;

  }

  header ul {
    padding: 0;
  }
  footer {
      display: flex;
      text-align: center;
      padding-left: 25px;
      padding-right: 25px;
      position: relative;
      bottom: 0;
      padding-top: 20vh;
  }
}
</style>
