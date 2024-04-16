<template>
  <div class="container">
    <div class="blush-container" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
      <div
        class="blush"
        v-if="isHovering"
        :style="{ top: blushPosition.y, left: blushPosition.x }"
      ></div>
      <img
        :src="blushImage"
        alt="Blush Image"
        class="content-image"
        :style="{ transition: imageTransition }"
        @click="sendEmail"
      />
    </div>
    <transition name="fade">
      <div class="speech-bubble" v-show="isHovering">
        <div class="words">
        <p>{{ speechContent }}</p>
      </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import blushImage from '@/assets/images/logo.png'

const isHovering = ref(false)
const blushPosition = ref({ x: '40%', y: '60%' }) //placement
const speechContent = ref("You'd hire...me?")//boxtext


const toggleHover = (hover) => {
  isHovering.value = hover
  imageTransition.value = hover ? 'transform 3s ease-in-out' : 'transform 2s ease-in-out' //transitions times ect.
}
//send mail options to open new mail
const sendEmail = () => {
  window.open('mailto:Mathilde.nonbo28@gmail.com?subject=Contact&Hello=Hello', '_blank');
}
</script>

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
  margin-right: 20px; 
}

.blush {
  position: absolute;
  width: 10%; 
  height: 5%;
  background-color: #ff9c9c; 
  border-radius: 100%;
  opacity: 0;
  transition: opacity 2s ease;
}

.blush-container:hover .blush {
  opacity: 0.5;
}

.content-image {
  display: block;
  width: 100%;
  max-width: 100px;
  cursor: pointer; //to make it more visible you can click it
}

.speech-bubble {
  color: black;
  position: relative;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease; 
}
.words{
  display: flex;
  align-items: center;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 16px solid white; 
  border-bottom: 8px solid transparent;
  transform: translateY(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s; //transitions fades
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


@media (max-width: 900px) {
  .container{
    display: none;
  }
}//it go bye bye

</style>
