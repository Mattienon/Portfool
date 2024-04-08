<template>
  <!-- Background image behind everything else no touchy touchy -->
  <div class="image" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
    <!-- ^^NO TOUCHY -->
    <div class="content"> 
        <HoverImg/>
      <div class="text-content">
       <h2>{{ subTitle }}</h2>
      <h1>{{ mainTitle }}</h1>
      </div>
     
      <OnlineCV/>
     
    </div> 
  
  </div> <Carousel/>
</template>

<script setup>
import { ref } from 'vue';

const subTitle = ref('Hi! my name is');
const mainTitle = ref('Mathilde Nonbo');

import bgImage from "@/assets/images/big.png";
import OnlineCV from "../components/FrontContent/onlineCV.vue";
import HoverImg from '@/components/FrontContent/HoverImg.vue';
import Carousel from "../components/FrontContent/Carousel.vue";

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

.content {
  display: flex;
  flex-direction: column; /* Change to column direction */
  height: 100%; /* Ensure it takes full height of parent */
  width: 100%;
}
.text-content{
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 5%;
  margin-top: 2%;
}

.main-title {
  font-size: 24px; /* Adjust font size as needed */
}

.sub-title {
  font-size: 18px; /* Adjust font size as needed */
}
</style>
