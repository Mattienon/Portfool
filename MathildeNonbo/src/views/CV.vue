<template>
    <!-- Background image behind everything else -->
    <div class="image" :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }">
      <div class="ctl">
        <section class="contact-info">
          <h3>{{ sectionTitle2 }}</h3>
          <div class="contact-items">
            <div class="contact-item">
              <img src="../assets/images/mail.png" width="100px">
              <p>Mail: {{ contactInfo.email }}</p>
            </div>
            <div class="contact-item">
              <img src="../assets/images/phone.png" width="100px">
              <p>Phone: {{ contactInfo.phone }}</p>
            </div>
          </div>
        </section>
        <ContactLinks/>
        <div class="linkmar">
          <onlineCV/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import bgImage from '../assets/images/big.png'
  import onlineCV from '../components/onlineCV.vue';
  import ContactLinks from '../components/FrontContent/ContactLinks.vue';
  
  const contactInfo = {
    email: 'Mathilde.nonbo28@gmail.com',
    phone: '+45 42792043',
  };
  
  // Define a ref for the background image URL
  const backgroundImageUrl = ref(bgImage)
  </script>
  
  <style lang="scss" scoped>
  .contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .contact-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ctl {
    width: 100%;
    padding: 10%;
  }
  
  .linkmar {
    margin-top: 10%;
  }
  
  .image {
    z-index: -1; /* Set a lower z-index to keep it behind other content */
    display: flex;
    background-size: cover;
    background-position: center;
    min-height: 100vh; /* Set a minimum height to ensure content visibility */
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 10px; /* Add margin between contact items */
  }
  </style>
  