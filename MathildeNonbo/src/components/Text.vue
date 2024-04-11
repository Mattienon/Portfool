<template>
  <div class="text-area">
      <div class="card">
          <div class="color">
              <h1>{{ TextT }}</h1>
              <p>{{ TextP }}</p>
              <h1>{{ subText }}</h1>
          </div>
          <img class="image" :src="BusiCard" alt="Image">
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const TextT = ref('THE SKELETON');
const subText = ref('D E A D - C R E A T I V E');
const TextP = ref(`“But why the little skeleton?”

The skeleton came from Austria, in the basement of a stranger's house. 
I had decided I would be getting a tattoo before coming home. It would be a milestone. 

So in the 40-degree heat, I sat in the basement for hours on end designing something I felt was meaningful for where I was, where I came from, where I was going.

And I did get it tattooed before I came home, just in Prague with a group of strangers I met on the street 2 weeks before. But that's another story entirely. 

The point here is, I hadn't felt the urge to create something with meaning and purpose in so long. 
I was passionate about it, I was doing it because I wanted to. 

I was doing it because in my bones I am...`);

// Define a reactive variable for the image source
const BusiCard = 'src/assets/images/Skeletons.png'; // Adjust the path as needed
</script>


<style lang="scss" scoped>
.text-area{
  display: flex; /* Using flexbox */
  justify-content: center; /* Horizontally centering */
  align-items: center; /* Vertically centering */
  padding: 4%; /* Padding around the content */
  margin: auto; /* Centering the entire container */
  white-space: pre-line;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #f3becf79;
  padding: 2%;
  border-radius: 50px;
}

.color {
  background-color: #b0dceb;
  border-radius: 25px;
  padding: 5%;
}

.image {
  display: none; /* Hide the image by default */
}

h1 {
  color: #000000;
  font-weight: 900;
  font-size: 6rem;
  text-align: center;
}

p {
  font-size: 18px;
  line-height: 1.3rem;
  white-space: pre-line;
  text-align: start;
}

@media (max-width: 900px) {
  .card {
      flex-direction: column; /* Change flex direction to column */
      padding: 5%; /* Increase padding */
  }

  .color {
      border-radius: 0; /* Remove border-radius */ 
      display: none;
  }
  
  .color h1,
  .color p,
  .color h1:last-child {
      text-align: center; /* Center align text */
  }
  
  .color h1:last-child {
      margin-top: 1rem; /* Add margin between paragraphs */
  }
  
  .image {
      display: block; /* Show the image on smaller screens */
      width: 100%; /* Adjust width as needed */
      max-width: 400px; /* Limit maximum width */
      height: auto; /* Maintain aspect ratio */
      margin-top: 2rem; /* Add margin between image and text */
  }

  h1 {
  color: #000000;
  font-weight: 900;
  font-size: 3rem;
  text-align: center;
}

}
</style>

