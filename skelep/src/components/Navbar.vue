<template>

    <header>

      
      <div class="logo">
        <!-- Dynamic and Responsive Image Area -->
          <h1>{{ brandName }}</h1>
          <img :src="logoImage" alt="brandImage" class="logoImage">
      </div>
      <nav class="navbar" :class="{ 'open': isNavOpen }">
        <div class="navigation-links">
          <router-link v-for="(link, index) in navigationLinks" :key="index" :to="link.path" class="nav-link">{{ link.text }}</router-link>
        </div>
        <button class="btn btn-lg" @click="toggleNav" aria-controls="offcanvasExample">{{ toggleText }}</button>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import logoImage from "@/assets/images/logo.png";
  
  const navigationLinks = ref([
    { path: '/', text: 'FRONTPAGE' },
    { path: '/Projects', text: 'PROJECTS' },
  ]);
  
  const toggleText = ref("CONTACT");
  const isNavOpen = ref(false);
  
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    align-items: center;
    background-color: #f3becf79;
    padding: 0.3rem;
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
.navbar{
  padding: 5px;
  flex-direction: column; /* Change direction to column on small screens */
  align-items: center; /* Center items vertically */
  
}
  /* this is the space between the actual links */
    .nav-link{
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
  