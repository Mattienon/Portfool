<template>
  <div class="image" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
    <div class="smooth-scroll-links">
      <a href="#section1" class="btn btn-large">{{ sec1 }}</a>
      <a href="#section2" class="btn">{{ sec2 }}</a>
      <a href="#section3" class="btn">{{ sec3 }}</a>
    </div>
    
    <!-- Section 1: Introduction -->
    <section id="section1" class="content headertop">
      <div class="row">
        <div class="col-md-6">
          <div class="text-content">
            <h2 class="sub-title">{{ subTitle }}</h2>
            <h1 class="main-title">{{ mainTitle }}</h1>
            <div class="des-contain">
              <h5>{{ description }}</h5>
            </div>
            <!-- Dynamic button to navigate to CV router link -->
            <router-link to="/cv" class="btn btn-light btn-bitch">{{ btnText }}</router-link>
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
        <div class="onlinecv">
        <OnlineCV/>
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
    <section id="section3" class="content content3">
      <h3>{{ sectionTitle3 }}</h3>
      <h2>{{ sectionTitle4 }}</h2> 
      <div class="marousel">  
        <p>{{ carouselText }}
        <icon :icon="arrowUpIcon" class="arrow"></icon>
        </p> 
        <Carousel/> 
       <div class="carouseltext">
      </div>
      </div>
    </section>
  </div> 
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue';


const arrowUpIcon = ref('bi:arrow-right');
const route = useRoute()
//section titles and buttons
const sec1 = ref('Hello!');
const sec2 = ref('About me');
const sec3 = ref('Skills');
const btnText = ref('Contact');
// Header text
const subTitle = ref('Hi! My name is');
const mainTitle = ref('Mathilde Nonbo');
const description = ref('Freelance Designer itching to discover everything!');
// Section titles
const sectionTitle3 = ref('how i do it');
//cv section text
const section2T = ref('I create with stubborn motivation');
const section2P = ref('I purposely seek complex tasks to expand, improve, and explore');

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

// carousel
const sectionTitle4 = ref('I have a varied skillset and i am excited to learn more! but heres what I already know');
const carouselText = ref('such a drag')
// Video URL
const youtubeVideoUrl = ref('https://www.youtube.com/embed/G6_qDw4ozwM');
import HoverImg from '../components/FrontContent/HoverImg.vue';
import Carousel from '@/components/FrontContent/Carousel.vue';

// Background image
import bgImage from '@/assets/images/bgMD.png';
import OnlineCV from '@/components/onlineCV.vue';
const backgroundImageUrl = ref(bgImage); // Background image URL
</script>

<style lang="scss"  scoped>

.headertop{
  margin-bottom: 5%;
}

.main-title {
color: #f3becf;
 font-weight: 900;
 font-size: 7rem; /* Adjust the font size */
 text-align: start;
}
.sub-title{
  text-align: start;
}
.btn-bitch {
 min-width: 25%;
  padding: 2% 5%;
  margin-top: 3%;
  font-size: larger;
  text-align: center;
}


//default h2 setup
  h2{
    font-size: 3rem;
    color: #8fb5de;
    text-align: center;
  }
//uh its bigger than h1 but it work for me i guess
  h3 {
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
 padding-left: 10%;
}

.card {
 padding: 2%;
 border: none;
 background-color: transparent;
}


.des-contain {
 font-family: Arial, Helvetica, sans-serif;
 font-weight: 100;
}

//background image that is
.image {
  z-index: -1;
  background-size: cover;
  background-position: center;
  min-height: auto; 
}
//end background image
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
//end of smooth scroll

/* Content sections */
.content {
  padding: 5%;
  padding-top: 10%;
}

.content2, .content3 {
  padding-top: 0%;
  overflow-x: hidden; //hides the carousel ext.
  padding-bottom: 10%;
}


/* Video container and section 2 */
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

.onlinecv{
  padding-top: 8%;
}
//end of section 2
//caorusel padding... im just not allowed to call it a carousel without it breaking

//makes the big pink skill text hover
.hover-item {
  transition: transform 0.2s ease;
}

.hover-item:hover {
  transform: translateY(-5px); /* Adjust the amount of translation */
}
.marousel{
  padding: 8%;
}
  .carouseltext{

    height: 5px;
    background-color: #000000;
    border-radius: 25px;
    margin-top: 5%;
  }
/* Media query for smaller screens */
@media (max-width: 1000px) {

  .text-content{
    padding: 0%;
  }
  .sub-title{
    text-align: center;
  }
  .col-md-6 {
    width: 100%;
  }

  h1, h2, h3, p {
    text-align: center;
  }
  h1,h3{
    font-size: 3rem;
  }
  h2{
    font-size: 2rem;
    color: #8fb5de;
  }

  .btn-bitch {
    display: flex;
    justify-content: center;
    width: 25%;
    margin: auto;
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }

  .smooth-scroll-links {
    display: none;
  }

  .des-contain{
  text-align: center;
  }

  .main-title {
    font-size: 4rem; /* Adjust font size for smaller screens */
    text-align: center;
    color:#f3becf
  }
  .content3{
    font-size: smaller; /* Adjust font size for smaller screens */
    }

  .pure-area h3{
    color:#f3becf;
    font-size: x-large;
    padding: 5px;
  }

}
</style>
