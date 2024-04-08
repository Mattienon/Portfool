<template>
  <div class="container">
    <div v-for="(img, index) in images" :key="index" class="animated-picture">
      <img :src="img" alt="Animated Picture" class="round-picture">
    </div>
  </div>
</template>

<script setup>
import anime from 'animejs';
import { ref, onMounted } from 'vue';
import image1 from "@/assets/images/FlyImg.jpg";


const images = ref([ image1,





]); 

// Animation function to start the animation
const startAnimation = () => {
  anime({
    targets: '.animated-picture',
    translateY: ['0', '-10px'], // Adjust the vertical distance the picture hovers
    duration: 1200, // Adjust the duration of the animation
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
  });
};

onMounted(() => {
  startAnimation();
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 0%;

}

.animated-picture {
  width: 100px; /* Adjust the size of the picture */
  height: 100px;
  border-radius: 50%; /* Make the picture round */
  overflow: hidden;

}

.round-picture {
  width: 100%; /* Ensure the picture fills the container */
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */


}
</style>
