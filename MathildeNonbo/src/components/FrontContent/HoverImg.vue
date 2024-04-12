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
import image1 from '@/assets/images/Frontimg.jpeg'
import image2 from '@/assets/images/logo.png'
import image3 from '@/assets/images/Berryman.png'

const images = ref([image1, image2, image3])

// Animation function to start the animation
const startAnimation = () => {
  images.value.forEach((img, index) => {
    anime({
      targets: `.animated-picture:nth-child(${index + 1})`,
      translateY: ['0', '-15px'], // Adjust the vertical distance the picture hovers
      duration: 1300, // Adjust the duration of the animation
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
      delay: index * 200 // Add a delay to create a staggered effect
    })
  });
}

onMounted(() => {
  startAnimation()
})
</script>


<style lang="scss"  scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}


.animated-picture {
  position: relative; /* Ensure relative positioning */
  border-radius: 50%; /* Make the picture round */
  overflow: hidden;
  margin: 10px; /* Add some margin to create space between images */
}

.round-picture {
  width: 100%; /* Ensure the picture fills the container */
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */
}
//floaties positions
.animated-picture:nth-child(1) {
  position: absolute;
  top: 30%; /* Adjust the vertical position */
  right: 23%; /* Adjust the horizontal position */
  width: 300px;
  height: 300px;
}

.animated-picture:nth-child(2) {
  position: absolute;
  top: 45%; /* Adjust the vertical position */
  right: 5%; /* Adjust the horizontal position */
  width: 250px;
  height: 250px;
}

.animated-picture:nth-child(3) {
  position: absolute;
  top: 10%; /* Adjust the vertical position */
  right: 20%; /* Adjust the horizontal position */
  width: 150px;
  height: 150px;
}





@media (max-width: 1000px) {
  .container{
    display: none;
  }
}
</style>
