<template>
  <div class="c-contain">
    <div class="row">
      <div class="col">
        <div class="carousel" ref="swiperContainer">
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
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import image1 from "@/assets/images/illustrator.png";
import image2 from '@/assets/images/indesign.png'
import image3 from '@/assets/images/xd.png'
import image4 from '@/assets/images/ux.png'
import image5 from '@/assets/images/photoshop.png'
import image6 from '@/assets/images/wordpress.png'
import image7 from '@/assets/images/after-effects.png'
import image8 from '@/assets/images/premiere-pro.png'
import image9 from '@/assets/images/office.png'

let swiper = null; // Initialize swiper variable

const items = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
];

const initSwiperIfNeeded = () => {
  if (!swiper) {
    swiper = new Swiper('.carousel', {
      slidesPerView: 'auto',
      spaceBetween: 10, // Adjust spacing between slides
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
      breakpoints: {
        // Responsive breakpoints
        768: {
          // For screens wider than 768px
          slidesPerView: 3, // Show 3 slides per view
        },
        480: {
          // For screens wider than 480px
          slidesPerView: 2, // Show 2 slides per view
        },
        320: {
          // For screens wider than 320px
          slidesPerView: 1, // Show 1 slide per view
        },
      },
    });
  }
};

const destroySwiperIfNeeded = () => {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
};

onMounted(() => {
  initSwiperIfNeeded(); // Initialize swiper on mount
});

onBeforeUnmount(() => {
  destroySwiperIfNeeded(); // Destroy swiper on unmount
});
</script>

<style lang="scss"  scoped>
.swiper-slide {
  background-color: rgba(255, 192, 203, 0.436);
}

.card {
  margin: 1rem;
  border: none;
  background-color: transparent;
}

.swiper-pagination {
  bottom: 10px;
}

@media screen and (max-width: 768px) {
  .swiper-slide {
    max-width: calc(50% - 20px); 
  }
}

@media screen and (max-width: 480px) {
  .swiper-slide {
    max-width: calc(100% - 20px); 
  }
}

@media screen and (max-width: 320px) {
  .swiper-slide {
    max-width: calc(100% - 10px); 
  }
}
</style>
