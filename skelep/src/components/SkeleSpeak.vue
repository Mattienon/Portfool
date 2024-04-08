<template>
  <div class="container">
    <div class="blush-container" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
      <div class="blush" v-if="isHovering" :style="{ top: blushPosition.y, left: blushPosition.x }"></div>
      <img :src="blushImage" alt="Blush Image" class="content-image" :style="{ transition: imageTransition }">
    </div>
            <transition name="fade">
              <div class="speech-bubble" v-show="isHovering">
                <p>{{ speechContent }}</p>
              </div>
            </transition>
          </div>

  
   
        <div v-for="contactItem in contactItems" :key="contactItem.id" :class="'card' + contactItem.id">

          <img :src="contactItem.image" alt="">
          </div>

</template>
<!-- skeleton layout and blush position -->
<script setup>
import { ref } from 'vue';
import blushImage from "@/assets/images/logo.png";
const isHovering = ref(false);
const blushPosition = ref({ x: '40%', y: '60%' });
const speechContent = ref("You'd hire...me?");

//Animation smoothing
const toggleHover = (hover) => {
  isHovering.value = hover;
  imageTransition.value = hover ? 'transform 3s ease-in-out' : 'transform 2s ease-in-out'; // Smooth transition
};

</script>



<!-- styles DUH -->
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  width: auto;
  position: fixed;
  bottom: 8%;
}

.blush-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px; /* Adjust the margin to create space between the image and the speaking box */
}

.blush {
  position: absolute;
  width: 10%; /* Make the blush large enough to cover the entire image */
  height: 5%;
  background-color: #ff9c9c; /* Blush color */
  border-radius: 100%; /* Make it circular */
  opacity: 0;
  transition: opacity 2s ease; /* Smoother opacity transition */
}

.blush-container:hover .blush {
  opacity: 0.5;
}

.content-image {
  display: block;
  width: 100%;
  max-width: 100px;
}

.speech-bubble {
  
  color: black;
  position: relative;
  background-color: white; // Change this line
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease; /* Smoother opacity transition */
}

.speech-bubble::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 16px solid white; /* Adjust the color and size as needed */
  border-bottom: 8px solid transparent;
  transform: translateY(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s; /* Smoother fade transition */
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
