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
  
  // Define props for customizing the button text
  const buttonText = ref('Beam me up, Scotty!');
  
  // Define the arrow-up icon
  const arrowUpIcon = ref('bi:arrow-up');
  
  // Scroll functionality
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
    margin-right: 5px; /* Add some spacing between icon and text */
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