<template>
    <button @click="goToTop" class="swooshtop">
      <!-- Iconify arrow-up icon -->
      <icon :icon="arrowUpIcon" class="arrow"></icon>
      {{ buttonText }}
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';
  

  const buttonText = ref('Beam me up, Scotty!');
  const arrowUpIcon = ref('bi:arrow-up');
  
  // Scroll functions
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  </script>
  
  <style scoped>
  .swooshtop {
    position: fixed;
    text-decoration: none;
    bottom: 12%;
    right: 2%;
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center; 
    line-height: 1rem;
  }
  
  .arrow {
    margin-right: 5px; 
    color: solid black;
  }

  @media (max-width: 600px) {

.swooshtop{
  position: fixed;
    text-decoration: none;
    bottom: 25%;
    left: 0%;
    background-color: transparent;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center; 
    justify-content: center;
    line-height: 1rem;
}



  }
  </style>