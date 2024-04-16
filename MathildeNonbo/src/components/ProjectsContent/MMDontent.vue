<template>
    <div class="container">
      <!-- Buttons selection -->
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary" @click="selectOption('Video Productions')">Video Productions</button>
        <button type="button" class="btn btn-outline-secondary" @click="selectOption('UX & Layout')">UX & Layout</button>
        <button type="button" class="btn btn-outline-secondary" @click="selectOption('Coding')">Coding</button>
      </div>
  
      <!-- Content sections -->
      <div class="card-container">
        <div v-for="item in selectedCategoryItems" :key="item.title" class="card">
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <template v-if="selectedOption === 'Video Productions'">
              <div class="video-container">
                <iframe class="Video" :src="item.videoUrl" allowfullscreen></iframe>
              </div>
            </template>
            <template v-else>
              <a :href="item.link" class="card-link">{{ item.title }}</a>
            </template>
            <br>
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
import { ref, onMounted } from 'vue';
//Arrays
const videoProductionsItems = ref([
  { 
    title: 'Commerical', 
    content: 'Video', 
    videoUrl: 'https://www.youtube.com/embed/3RSWvoRz36k', 
    description: 'In this process we scripted, filmed and produced a commercial for Monster Energy Drink' 
  },
  { 
    title: 'Christmas Card', 
    content: 'Video', 
    videoUrl: 'https://www.youtube.com/embed/19K4HCc0gqE', 
    description: 'This was created for a School christmas event' 
  },
  { 
    title: 'Video Production for CAS', 
    content: 'Video', 
    videoUrl: 'https://www.youtube.com/embed/WjKsLF3U5Jw', 
    description: 'This video was made in IB for our creative/activity/service Diploma' 
  },
]);

const uxLayoutItems = ref([
  { 
    title: 'Buddhist Meditation App', 
    content: 'App/Prototype', 
    link: 'https://xd.adobe.com/embed/c586b976-d84f-4946-9505-3cd1ae0447c0-90d5/?fullscreen', 
    description: 'Above is A link to my Current UX project' 
  }
]);

const codingItems = ref([
  { 
    title: 'First Semester Project', 
    content: 'Website', 
    link: 'http://nonbononboboh.dk', 
    description: 'I created a website for second hand gaming Gear' 
  }
]);

const selectedOption = ref('Video Productions'); // Initialize with 'Video Productions'
const selectedCategoryItems = ref([]);

function selectOption(option) {
  selectedOption.value = option;
  switch (option) {
    case 'Video Productions':
      selectedCategoryItems.value = videoProductionsItems.value;
      break;
    case 'UX & Layout':
      selectedCategoryItems.value = uxLayoutItems.value;
      break;
    case 'Coding':
      selectedCategoryItems.value = codingItems.value;
      break;
    default:
      selectedCategoryItems.value = [];
  }
}

onMounted(() => {
  // Have video Productions open on site
  selectOption('Video Productions');
});
</script>
  
  <style scoped>
  
  /* buttons */

  .btn-group {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 90%;
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
/* card and container styles */
.container {
    margin-bottom: 10%;
    text-align: center;
  }


  .card-container {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card {
    background-color: #b0dceb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 500px; /* Adjust as needed */
    margin: 1rem;
    border: none;
    outline: none;
    background-color: #b0dceb;
    border-radius: 25px;
  }
  
 
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
  }
  
  .Video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
  </style>
  