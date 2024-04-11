<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import logoImage from '@/assets/images/logo.png'
import foot from './components/foot.vue';
import SkeleSpeak from './components/SkeleSpeak.vue'


const navigationLinks = ref([
  { path: '/', text: 'FRONTPAGE' },
  { path: '/Projects', text: 'PROJECTS' },
  { path: '/CV', text: 'CV & Contact'}
])
</script>

<template>
  <header>
    <router-link to="/" class="logo">
      <!-- Dynamic and Responsive Image Area -->
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
  <main>

      <SkeleSpeak />
   
  </main>
  <RouterView />
 <foot/>

</template>

<style lang="scss"  scoped>
header, footer {
  z-index: 1;
}



header {
  display: flex;
  align-items: center;
  background-color: #f3becf79;

}

.logoImage {
  max-width: 80px;
  padding-left: 25%;
}

nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 5%;
}

.nav-link {
  padding: 1rem;
  color: #000000;
  text-decoration: none;
  font-size: 20px;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
}

/* Inline nav  hold, got a death grip on these bitches */
.navigation-links {
  display: flex;
  align-items: center;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 0;
  }
  .logoImage {
    display: none;
  }
  .navbar {
    padding: 5px;
    flex-direction: column; /* Change direction to column on small screens */
    align-items: center; /* Center items vertically */
  }
  /* this is the space between the actual links */
  .nav-link {
    padding: 5%;
  }

  .navigation-links {
    display: flex; /* Show the navigation links */
    flex-direction: column; /* Display links vertically */
    align-items: center; /* Center items horizontally */
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
