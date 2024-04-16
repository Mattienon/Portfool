<template>
  <div class="absolute">
    <h2>{{ subTitle }}</h2> 
    

    <!-- category selectors -->
    <div class="btn-group">
      <button @click="selectCategory('all')" :class="{ active: selectedCategory === 'all' }" class="btn btn-outline-secondary">{{ allText }}</button>
      <button @click="selectCategory('Digital')" :class="{ active: selectedCategory === 'Digital' }" class="btn btn-outline-secondary">{{ Digital }}</button>
      <button @click="selectCategory('Hand Drawn')" :class="{ active: selectedCategory === 'Hand Drawn' }" class="btn btn-outline-secondary">{{ HandDrawn }}</button>
    </div>

    <div class="masonry-grid">
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id" class="card">
        <a :href="portfolioItem.image ? portfolioItem.image : portfolioItem.link" :download="portfolioItem.image ? 'portfolioItem' + portfolioItem.id + '.png' : null">
          <p>{{ portfolioItem.title }}</p>
          <p>{{ portfolioItem.description }}</p>

          <!-- Display image if its there -->
          <template v-if="portfolioItem.image">
            <img :src="portfolioItem.image" alt="" />
          </template>

          <template v-else>
            <p>{{ noImage }}</p>
            <img :src="noImageimg" alt="Oh no!" />
          </template>
        </a>
      </div>

  
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Portfolio content Images
import image1 from '@/assets/images/Berryman.png'
import image2 from '@/assets/images/Kittygrog.png'
import image3 from '@/assets/images/logo.png'
import image4 from '@/assets/images/SHIZkitty.png'
import image5 from '@/assets/images/Flower.png'
import image6 from '@/assets/images/Skeletub.jpeg'
import image7 from '@/assets/images/bd.jpeg'
import image8 from '@/assets/images/Skeletons.png'
import image9 from '@/assets/images/Face.png'
import image10 from '@/assets/images/Paint1.png'
import image11 from '@/assets/images/Paint2.png'
//category names
const allText = ref('All')
const Digital = ref('Digital')
const HandDrawn = ref('Hand Drawn')
//if not image
const noImage = ref('Oh no! No image available.')
const noImageimg = '@/assets/skelemand.svg'
//title
const subTitle = ref('Arts & Illustrations')

const portfolioItems = ref([
  { id: 1, title: 'Fruit', description: 'An apple a day or something', image: image1, category: 'Digital', },
  { id: 2, title: 'Smilla (my cat)', description: 'As grogu & angry...naturally', image: image2, category: 'Digital' },
  { id: 3, title: 'Logo', description: '', image: image3, category: 'Digital' },
  { id: 4, title: 'shish-kitty', description: 'The worst kebab imaginable', image: image4, category: 'Digital' },
  { id: 5, title: 'Lover of nature', description: 'But also devourer', image: image5, category: 'Digital' },
  { id: 6, title: 'Skeletub', description: '', image: image6, category: 'Hand Drawn' },
  { id: 7, title: 'BD-1', description: 'Cutest droid in the galaxy', image: image7, category: 'Hand Drawn' },
  { id: 8, title: 'Business Card art', description: 'My busy card', image: image8, category: 'Digital' },
  { id: 9, title: 'Business Card art', description: 'My busy card', image: image9, category: 'Hand Drawn' },
  { id: 10, title: '', description: '', image: image10, category: 'Hand Drawn' },
  { id: 11, title: '', description: '', image: image11, category: 'Hand Drawn' },
])

// Selected category
const selectedCategory = ref('all')

// Filtered portfolio items based on selected category
const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return portfolioItems.value
  } else {
    return portfolioItems.value.filter((item) => item.category === selectedCategory.value)
  }
})

// Method to select category
const selectCategory = (category) => {
  selectedCategory.value = category
}
</script>

<style lang="scss" scoped>
.absolute {
  width: 100%;
  text-align: center;
  margin-top: -5%;
}

.masonry-grid {
  column-count: 3;
  background-color: #3d393d09;
  padding: 2%;
  border-radius: 25px;
  margin: 5%;
}

h2{
color: #8fb5de;
font-weight: 600;
font-size: 4rem;
}

h2 {
  font-size: 2rem;
  margin: auto;
  text-align: center;
  margin-bottom: 1%;
}

.card p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card img {
  height: auto;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  background-color: #b0dceb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin: 1rem;
  break-inside: avoid-column;
  border: none;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

a {
  text-decoration: none;
  color: rgb(59, 57, 59);
}

.btn-group {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 70%;
}
.btn {
  margin: 0 5px;
  outline: none;
  border: none;
  background-color: #f3becf;
}

.btn.active {
  background-color: #DB86AA;
  color: rgb(255, 255, 255);
}

@media (max-width: 900px) {
  .masonry-grid {
    column-count: 1;
  }

 
}
</style>
