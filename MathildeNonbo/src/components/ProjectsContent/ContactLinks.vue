<template>
  <div>
    <main>
      <div class="body">
        <div v-for="(cvItem, index) in cvItems" :key="cvItem.id" :class="'card card-' + cvItem.id">
          <h3 class="contact">{{ cvItem.contact }}</h3>
          <div v-if="cvItem.link && !isPDF(cvItem.link)">
            <a :href="cvItem.link" class="link">{{ linkText }}</a>
          </div>
          <!-- Display the PDF file link -->
          <div v-if="cvItem.link && isPDF(cvItem.link)">
            <a :href="cvItem.link" :download="isPDF(cvItem.link) ? 'CV.pdf' : null" class="link pdf">{{ linkText }}</a>
          </div>
          <!-- Conditionally render the QR image for item with ID 4 -->
          <div v-if="cvItem.contact == 'Email me'">
            <button @click="sendEmail" class="link btn btn-outline-dark">{{ cvItem.contact }}</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const linkText = 'Go to';
import pdfFile from '@/assets/WrittenCV.pdf';

const cvItems = [
  { id: 1, contact: "YouTube", link: "https://www.youtube.com/channel/UCdrZ-wALt6oqYgWQrbmNSpA" },
  { id: 2, contact: "LinkedIn", link: "https://www.linkedin.com/in/mathildenonbo/" },
  { id: 3, contact: "Resume PDF", link: pdfFile },
  { id: 4, contact: "Email me" }
];

function isPDF(link) {
  return link.toLowerCase().endsWith('.pdf');
}

const sendEmail = () => {
  window.open('mailto:Mathilde.nonbo28@gmail.com?subject=Contact&body=Hello', '_blank');
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Adjust alignment as needed */
  max-width: 80%;
  margin: auto;
}
a{
  text-decoration: none;
  color:#000000;
  font-size: larger;
  padding: 10px;
}

.card {
  border-radius: 20px;
  margin: 1rem;
  padding: 20px;
  width: calc(50% - 2rem); /* makes sure the boxes dont look mega weird */
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: black;
  border: none;
  transition: transform 0.2s ease-in-out; /* SMOOOOth operator */
}

.card:hover {
  transform: translateY(-5px); /* Move the card slightly up when hovering */
}

h1 {
  margin-bottom: 0;
  font-weight: bolder;
}

//box colors
.card-1 {
  background-color: #F4F2A4;
}

.card-2 {
  background-color: #92D2C9;
}

.card-3 {
  background-color: #ffffff;
  color: black;
}

.card-4 {
  background-color: #D1B0D1;
}

@media screen and (max-width: 768px) {
  .card {
    width: calc(100% - 2rem);
  }
}
</style>

