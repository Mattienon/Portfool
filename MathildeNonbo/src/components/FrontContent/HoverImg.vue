<template>
  <div class="container">
    <div v-for="(img, index) in images" :key="index" class="animated-picture">
      <img :src="img" alt="Animated Picture" class="round-picture" />
    </div>
  </div>
</template>

<script setup>
import anime from 'animejs'
import { ref, onMounted } from 'vue'
import image1 from '@/assets/images/YEYE.png'

const images = ref([image1])

// Animation function to start the animation
const startAnimation = () => {
  anime({
    targets: '.animated-picture',
    translateY: ['0', '-10px'], // Adjust the vertical distance the picture hovers
    duration: 1500, // Adjust the duration of the animation
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
  })
}

onMounted(() => {
  startAnimation()
})
</script>

<style lang="scss"  scoped>
.container {
  display: flex;
  justify-content: end;
  margin-top: -18%;
}

.animated-picture {
  width: 700px; /* Adjust the size of the picture */
  height: auto;
  border-radius: 50%; /* Make the picture round */
  overflow: hidden;
}

.round-picture {
  width: 100%; /* Ensure the picture fills the container */
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */
  display: flex;
  justify-content: center;
}



@media (max-width: 1200px) {
  .container{
    display: flex;
    justify-content: center;
    padding: 0%;
    margin-top: 0%;
  }
}
</style>
