
<template>
  <!-- background image behind everything else no touhcy touhcy -->
    <div class="image" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
      <!-- ^^NO TOUCHY -->
      <PortfolioContents/>
    </div>
  </template>

<script setup>
  import { ref } from 'vue';
  import bgImage from "@/assets/images/big.png";
  import PortfolioContents from "../components/PortfolioContents.vue";

  
  // Define a ref for the background image URL
  const backgroundImageUrl = ref(bgImage); // Initially set to image1, you can update it dynamically

</script>

<style lang="scss" scoped>
.image {
  /* Ensure z-index works */
    z-index: -1; /* Set a lower z-index to keep it behind other content */
    display: flex;
    background-size: cover;
    background-position: center;
    min-height: 500vh; /* Set a minimum height to ensure content visibility */
    /* Additional styles for .image can be added here */
  }
</style>