<template>
  <v-app class="top-app">
    <!-- Navbar -->
    <Navbar @menuStatus="handleMenuStatus"/>

    <!-- Main content -->
    <v-main :class="{blurPage: isBlur}">
      <router-view/>
    </v-main>
    <Footer />
    <!-- <Chatbot></Chatbot> -->
  </v-app>
</template>

<script>
import Chatbot from './components/Chatbot'
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue'
import { ref } from 'vue';
export default {
  components: {
    Chatbot,Navbar,Footer},
  setup() {
    const isBlur = ref(null);

    const handleMenuStatus = (data) => {
      isBlur.value = data;
    console.log(data)
    }


    return {handleMenuStatus, isBlur}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden !important;
  
}

.top-app {
  max-width: 1920px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: inherit;
}

.blurPage {
  filter: blur(5px) brightness(.1);
  background: rgb(128, 128, 128, .5);
}
</style>
