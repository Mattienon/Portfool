<template>
  <div class="image" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
    <div class="smooth-scroll-links">
      <a href="#section1" class="btn btn-large">Welcome!</a>
      <a href="#section2" class="btn">Who I Am</a>
      <a href="#section3" class="btn">What I Do</a>
    </div>
    
    <!-- Section 1: Introduction -->
    <section id="section1" class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="text-content">
            <h2>{{ subTitle }}</h2>
            <h1 class="main-title">{{ mainTitle }}</h1>
            <div class="des-contain">
              <h5>{{ description }}</h5>
            </div>
            <!-- Dynamic button to navigate to CV router link -->
            <router-link to="/cv" class="btn btn-outline-light btn-bitch">Contact</router-link>
          </div>
        </div>
        <div class="col-md-6">
          <HoverImg/>
        </div>
      </div>
    </section>

    <!-- Section 2: Who I Am -->
    <section id="section2" class="content content2">
      <div class="row">
        <div class="col-md-6">
          <div class="video-container">
            <iframe class="VideoCV" :src="youtubeVideoUrl" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-md-6 sel2">
          <h2>{{ section2T }}</h2>
          <p>{{ section2P }}</p>
        </div>
      </div>
    </section>
    <hr>
    <!-- Pure text section -->
    <div class="card pure-area">
      <h2 class="text-center">{{ theTitle }}</h2>
      <div class="text-center">
        <h3 v-for="(item, index) in textList" :key="index" class="hover-item">{{ item }}</h3>
      </div>
    </div>
    <hr>
    <!-- Section 3: What I Do -->
    <section id="section3" class="content content3">
      <div class="soft-skills"> 
        <h1>{{ sectionTitle3 }}</h1>
        <h2>{{ sectionTitle4 }}</h2>
        <Carousel/>
      </div>
    </section>
  </div> 
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

// Header text
const subTitle = ref('Hi! My name is');
const mainTitle = ref('Mathilde Nonbo');
const description = ref('Freelance Designer itching to discover everything!');
const section2T = ref('I create with stubborn motivation');
const section2P = ref('I purposely seek complex tasks to expand, improve, and explore');

// Section titles
const sectionTitle2 = ref('Who I Am');
const sectionTitle3 = ref('how i do it');

// Pure text section
const theTitle = ref('Sooo, what do I do?');
const textList = ref([
  'Video editing',
  'Graphic design',
  'Illustrations',
  'VFX',
  'Layouts',
  'UX',
  'Carnal Creativity',
  'Baking cakes',
  'Dancing',
  'Real nerd stuff...'
]);

// Soft skills text
const sectionTitle4 = ref('I have a varied skillset and i am excited to learn more! but heres what I already know');

// Video URL
const youtubeVideoUrl = ref('https://www.youtube.com/embed/G6_qDw4ozwM');
import HoverImg from '../components/FrontContent/HoverImg.vue';
import Carousel from '@/components/FrontContent/Carousel.vue';

// Background image
import bgImage from '@/assets/images/bgMD.png';
const backgroundImageUrl = ref(bgImage); // Background image URL
</script>

<style lang="scss"  scoped>
.btn-bitch {
  margin-top: 2%;
  font-size: 1.5rem; /* Adjust the font size to make the button bigger */
  padding: 10px 20px; /* Adjust the padding for better spacing */
}

.main-title {
color: #f3becf;
 font-weight: 900;
 font-size: 7rem; /* Adjust the font size */
 text-align: end;

}

h2{
    font-size: 3rem;
    color: #8fb5de;
  }

.soft-skills h2,h3 {
 color:#f3becf;
 font-weight: 600;
 font-size: 5em; /* Adjust the font size */

}

p, h3 {
 text-align: center;
 padding: 2%;
 outline: none;
 border: none;
 background-color: transparent;
 text-align: center;
}

.text-content {
 text-align: end;
}

.card {
 padding: 2%;
 border: none;
 background-color: transparent;
}

.hover-item {
  transition: transform 0.2s ease;
}

.hover-item:hover {
  transform: translateY(-5px); /* Adjust the amount of translation */
}

.des-contain {
 font-family: Arial, Helvetica, sans-serif;
 font-weight: 100;
 text-align: end;
}

.image {
  z-index: -1;
  background-size: cover;
  background-position: center;
  min-height: auto; 
}

/* Smooth scroll links */
.smooth-scroll-links {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 999;
  width: 5%;
}

.smooth-scroll-links a {
  display: block;
  padding: 5px 10px;
  color: #fff;
  background-color: #f3becf7f;
  margin-top: 1rem;
  text-decoration: none;
  border-radius: 2px;
}

.smooth-scroll-links a:hover {
  background-color: #8fb5de;
}

/* Content sections */
.content {
  padding: 5%;
}

.content {
  padding-top: 10%;
}

.content2, .content3 {
  padding-top: 0%;
  border-radius: 25px;
  overflow-x: hidden;
  padding-bottom: 5%;
}

/* Soft skills section */
.soft-skills {
  padding: 5%;
  text-align: center;
  margin-bottom: 5%;
}

/* Video container */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.VideoCV {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

/* Column text alignment */
.sel2 {
  padding-top: 10%;
  font-size: x-large;
  text-align: center;
}

.pure-area h3{
  color:#f3becf;
  
}
/* Media query for smaller screens */
@media (max-width: 1200px) {
  #section2 {
    flex-direction: column;
  }

  .col-md-6 {
    width: 100%;
  }

  h1, h2, h3, p {
    text-align: center;
  }
  h2{
    font-size: 3rem;
    color: #8fb5de;
  }

  .btn-bitch {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: auto;
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }

  .smooth-scroll-links {
    width: 15%;
  }

.des-contain{
  text-align: center;
}

  .main-title {
    font-size: 4rem; /* Adjust font size for smaller screens */
    text-align: center;
  }

  .soft-skills h1,
  .soft-skills h2,
  .soft-skills h3 {
    font-size: large; /* Adjust font size for smaller screens */
    padding-bottom: 5%;
  }

  .pure-area h3{
  color:#f3becf;
  font-size: x-large;
}

}
</style>
