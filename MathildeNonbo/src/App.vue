<template>
  <header>
    <router-link to="/" class="logo">
      <h1>{{ brandName }}</h1>
      <img :src="logoImage" alt="brandImage" class="logoImage" />
    </router-link>
    <nav class="navbar" :class="{ open: isNavOpen }">
      <div class="navigation-links">
        <router-link
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.path"
          class="nav-link"
          >{{ link.text }}</router-link>
      </div>
    </nav>
  </header>

    
       <SkeleSpeak />
  <RouterView />
  
 <foot/> 
 
 <Top/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import logoImage from '@/assets/images/logo.png'
import foot from './components/foot.vue';
import SkeleSpeak from './components/SkeleSpeak.vue'
import Top from '@/components/Top.vue';

const brandName = ref("Dead Creative");
const navigationLinks = ref([
  { path: '/', text: 'Home' },
  { path: '/Projects', text: 'PROJECTS' },
  { path: '/CV', text: 'Contact'}
])
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  background-color: #f3becf79;
  z-index: 1;
}

.logoImage {
  max-width: 80px;
  margin-left: 50%;

}
h1, a{
  color: black;
  text-decoration: none;
}

h1{
  display: none;
}

nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 5%;
}

.nav-link {
  padding: 0.5rem;
  color: #000000;
  text-decoration: none;
  font-size: 24px;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
}

.navigation-links {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  header {
    flex-direction: column;
  
  }
  .logoImage {
    display: none;
  }
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .navigation-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-link {
      padding: 0.5rem;
      color: #000000;
      text-decoration: none;
      font-size: 20px;
      
}

  h1{
  display:contents;
  padding: 0%;
  margin: 0%;
  text-align: center;
}


}

.btn {
  display: flex;
  font-style: bold;
  align-items: center;
  color: #4d8f9a;
  font-size: 16px;
}

</style>
