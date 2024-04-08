<template>
  <div class="c-contain">

    <div class="row">
      <div class="col">
        <div v-if="isSmallScreen" class="portfolio-link">
          <router-link to="/Projects" class="btn ">
            <h3>{{ btnText }}</h3>BUTTON GEOS
          </router-link>
        </div>
        <div v-else class="carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                <div class="card">
                  <img :src="item.image" class="card-img" alt="Card image">
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import image3 from "@/assets/images/Kittygrog.png"
// const btnText = ref("ohoho")

export default {
  data() {
    return {
      items: [
        { image: image3 },
        { image: image3 },
        { image: image3 },
        { image: image3 },
        { image: image3 },
        { image: image3 },
        { image: image3 },
        { image: image3 },
        { image: image3 },
        { image: image3 },
        // Add more slide items as needed
      ],
      swiper: null,
      isSmallScreen: window.innerWidth < 768  // Initial check for small screen
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize); // Listen for resize events
    if (!this.isSmallScreen) {
      this.initSwiper();
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize); // Remove resize event listener
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 768; // Update isSmallScreen property on resize
    }
  }
};
</script>

<style scoped>

/* Add your custom styles here */
.carousel {
  display: flex;
  flex-direction: row; /* Ensure horizontal layout */
  max-width: 10%; /* Adjust the width as per your requirement */
}
.swiper-wrapper {
  display: flex;
  flex-direction: row; /* Ensure horizontal layout */
  max-width: 50%;
}

.swiper-slide {
  flex: 0 0 auto; /* Prevent stretching of the slides */
}

.c-contain {
  display: flex;
  align-items: center;
  background-color: pink;
 
}
.card{
  max-width: 100px; /* Adjust the width as needed */
  max-height: 100px;
  display: flex;
  border: none;
  border-radius: 5px;
  background-color: rgb(239, 173, 218);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
