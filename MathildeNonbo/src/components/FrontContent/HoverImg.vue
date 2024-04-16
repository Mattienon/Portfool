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
//images
import image1 from '@/assets/images/Frontimg.jpeg'
import image2 from '@/assets/images/logo.png'
import image3 from '@/assets/images/Berryman.png'

const images = ref([image1, image2, image3])

// Animation starting the animation
const startAnimation = () => {
  images.value.forEach((img, index) => {
    anime({
      targets: `.animated-picture:nth-child(${index + 1})`,
      translateY: ['0', '-15px'], // How much they should move
      duration: 1300, // Animation time
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
      delay: index * 200 // Make then delay so theyre not all the same
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
  position: relative; 
  border-radius: 50%; 
  overflow: hidden;
  margin: 10px; 
}

.round-picture {
  width: 100%; 
  height: 100%;
  object-fit: cover; 
}
//floaties positions
//child 1
.animated-picture:nth-child(1) {
  position: absolute;
  top: 30%; 
  right: 23%; 
  width: 300px;
  height: 300px;
}
//child2
.animated-picture:nth-child(2) {
  position: absolute;
  top: 45%;
  right: 5%; 
  width: 250px;
  height: 250px;
}
//child3
.animated-picture:nth-child(3) {
  position: absolute;
  top: 10%; 
  right: 20%;
  width: 150px;
  height: 150px;
}





@media (max-width: 1000px) {
  .container{
    display: none;
  }
}
</style>
