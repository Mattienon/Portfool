<template>
  <div class="text-area">
      <div class="card">
          <div class="color">
              <h1>{{ TextT }}</h1>
              <p>{{ TextP }}</p>
              <h1>{{ subText }}</h1>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

//text area inputs
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


</script>


<style lang="scss" scoped>
.text-area{
  display: flex;
  justify-content: center; /* Horizontally center*/
  align-items: center; /* Vertically centering */
  padding: 4%; /* Padding content */
  margin: auto; /* Center container */
  white-space: pre-line; /* cut */
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
}

@media (max-width: 900px) {

  .color {
      display: none;
  }

}

</style>

