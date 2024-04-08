<template>   
  <div class="absolute">

    <h1>{{ pageTitle }}</h1>
    <h2>{{ subTitle }}</h2>

    <!-- Category Selector using Bootstrap -->
    <div class="form-group">
      <label for="categorySelect">{{ selectorText }}</label>
      <select class="form-control" v-model="selectedCategory" id="categorySelect">
        <option value="all" class="alltext">{{ allText }}</option>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
    </div>
   
    <div class="masonry-grid">
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id" class="card">
        <!-- font awesome download icon and download function -->
        <a :href="portfolioItem.image ? portfolioItem.image : portfolioItem.link" :download="portfolioItem.image ? 'portfolioItem' + portfolioItem.id + '.png' : null">
          <h2>{{ portfolioItem.title }} <i class="fa-solid fa-circle-arrow-down" style="color: #74C0FC;"></i></h2>
        </a>
        <p>{{ portfolioItem.description }}</p>

        <!-- Display image if available -->
        <a v-if="portfolioItem.image" :href="portfolioItem.image">
          <img :src="portfolioItem.image" alt="">
        </a>

        <template v-else>
          <p>{{ noImage }}</p>
          <img :src="noImageimg" alt="Oh no!">
        </template>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';


//portfolio content Images
import image1 from "@/assets/images/Berryman.png";
import image2 from "@/assets/images/Kittygrog.png";
import image3 from "@/assets/images/logo.png";
import image4 from "@/assets/images/SHIZkitty.png";
import image5 from "@/assets/images/Flower.png";
import image6 from "@/assets/images/Skeletub.jpeg";
import image7 from "@/assets/images/bd.jpeg";
import image8 from "@/assets/images/Skeletons.png";

const selectorText = ref("Pick your poison");
const allText = ref("Everything!");

const noImage = ref("Oh no! No image available.");
const noImageimg = "@/assets/skelemand.svg";


const pageTitle = ref("Projects");
const subTitle = ref("Arts & Illustrations");

const portfolioItems = ref([
  {
    id: 1,
    title: "Interpretive fruit",
    description: "An apple a day or something",
    image: image1,
    category:"Digital"
  },
  {
    id: 2,
    title: "Smilla (my cat)",
    description: "As grogu & angry...naturally",
    image: image2,
    category:"Digital"
  },
  {
    id: 3,
    title: "ILL HAVE TO CHNAGE THIS IMAGE",
    description: "Head in the clouds",
    image: image3,
    category:"Digital"
  },
  {
  id: 4,
  title: "shish-kettay",
  description: "The worst kebab imaginable",
  image: image4, 
  category:"Digital"
},
  {
  id: 5,
  title: "Lover of nature",
  description: "But also devourer",
  image: image5,
  category:"Digital"
},
{
  id: 6, // Change the ID to a unique value
  title: "BD-1",
  description: "Cutest droid in the galaxy",
  image: image6,
  category:"Hand Drawn"
},
{
  id: 7, // Change the ID to a unique value
  title: "Flower ver. Logo",
  description: "A simple flower interpretation",
  image: image7,
  category:"Digital"
},

{
  id: 8, // Change the ID to a unique value
  title: "Business Card art",
  description: "My busy card",
  image: image8,
  category: "Digital"
},

]);



// Compute unique categories from portfolio items
const categories = computed(() => {
  const uniqueCategories = new Set();
  portfolioItems.value.forEach(item => {
    uniqueCategories.add(item.category);
  });
  return Array.from(uniqueCategories);
});

// Selected category
const selectedCategory = ref("all");

// Filtered portfolio items based on selected category
const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value === "all") {
    return portfolioItems.value;
  } else {
    return portfolioItems.value.filter(item => item.category === selectedCategory.value);
  }
});
</script>

<style lang="scss" scoped>

.absolute{

  position: absolute;
  margin: 2rem auto; /* Set top and bottom margin to auto and left/right margin to center */
  left: 0;
  right: 0;
  top: 5%;
  padding: 10%;
}

.masonry-grid {

  column-count: 3; /* Number of columns */
  column-gap: 20px; /* Gap between columns */
  background-color: #09323f17;
  padding: 8%;
  border-radius: 25px;

}

/* Adjust font sizes using em or rem */
h1, h2 {
  font-size: 2rem; /* Example font size */
  margin-bottom: 1rem; /* Example spacing */
  text-align: center;
}

.card p {
  font-size: 1rem; /* Example font size */
  margin-bottom: 0.5rem; /* Example spacing */
}

.card img {
  height: auto;
  border-radius: 25px;
  width: 100%; /* Ensure the picture fills the container */
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio */


}

.card {
  background-color: #AEDCEB;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin-top: 1rem;
  break-inside: avoid-column; /* Prevent cards from breaking into multiple columns */
  border: none;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Dark shadow */
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.44);
}

.form-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

label {
  padding-left: 2px;
  font-size: 1.2rem;
  color: #555;
  font-weight: 600;
}

.form-control {
  text-align: auto;
  margin-top: 0.5rem;
  padding: 10px;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #7260602d;
  color: #555;
}

@media (max-width: 900px) {
  .masonry-grid {
    column-count: 1; /* Show one card at a time on smaller screens */
  }
  
}

</style>
