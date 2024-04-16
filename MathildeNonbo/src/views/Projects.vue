<template>
  <!-- background image behind everything else no touhcy touhcy -->
  <div class="image" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
    <div class="content">
    <Text/>
    <MMDontent/>
    <PortfolioContents />
    
</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import bgImage from '../assets/images/big.png'
import PortfolioContents from '../components/ProjectsContent/PortfolioContents.vue';
import Text from '../components/Text.vue';
import MMDontent from '../components/ProjectsContent/MMDontent.vue';
//background image
const backgroundImageUrl = ref(bgImage) 


</script>

<style lang="scss" scoped>



.content{
  display: flex;
  margin: auto;
  min-width: 100%;
  flex-direction: column;
}

.image {
  z-index: -1;
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 100vh; 
}
</style>

