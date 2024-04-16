
<template>
        <div class="carousel" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div class="card">
                <img :src="item.image" class="card-img" alt="Card image">
              </div>
            </div>
          </div>
        </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
//images in carousel
import image1 from "@/assets/images/illustrator.png";
import image2 from '@/assets/images/indesign.png'
import image3 from '@/assets/images/xd.png'
import image4 from '@/assets/images/ux.png'
import image5 from '@/assets/images/photoshop.png'
import image6 from '@/assets/images/wordpress.png'
import image7 from '@/assets/images/after-effects.png'
import image8 from '@/assets/images/premiere-pro.png'
import image9 from '@/assets/images/office.png'
//call
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
//swiper functions
let swiper = null;

const initSwiperIfNeeded = () => {
  if (!swiper) {
    swiper = new Swiper('.carousel', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
      breakpoints: {
        768: { slidesPerView: 3 },
        480: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
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
//so its not chaotic
onMounted(initSwiperIfNeeded);

onBeforeUnmount(destroySwiperIfNeeded);
</script>

<style lang="scss" scoped>
.swiper-slide {
  border-radius: 25px;
  display: flex;
  justify-content: center;
}

.card {
  width: 50%;
  border: none;
  background-color: transparent;
}


</style>
