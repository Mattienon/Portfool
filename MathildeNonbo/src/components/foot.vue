<template>
    <footer class="footer">
      <div class="social-links">
        <a
          v-for="(socialLink, index) in socialMediaLinks"
          :key="index"
          :href="socialLink.url"
          class="social-link"
        >
          <icon :icon="socialLink.icon" class="social-icon"></icon>
        </a>
      </div>
  
      <div class="navigation-links">
        <RouterLink
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.path"
          class="footer-link"
        >{{ link.text }}</RouterLink>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  
  const socialMediaLinks = ref([
    { name: 'Facebook', icon: 'mdi-facebook', url: 'https://www.facebook.com/mathilde.nonbo/' },
    { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/mathildenonbo/' },
    { name: 'Instagram', icon: 'mdi-instagram', url: 'https://www.instagram.com/deadcreativecc/' }
  ])
  
  const navigationLinks = ref([
    { path: '/', text: 'Home' },
    { path: '/Projects', text: 'Projects' },
    { path: '/CV', text: 'Contact'}
  ])
  </script>
  
  <style lang="scss" scoped>
  .footer {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
    align-items: center;
    font-size: 16px;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 100%; 
    background-color: #b0dceb;
    color: #fff;
    padding: 10px;
    z-index: 1;
  }
  
  .footer-link {
    padding: 0 1rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: #f3becf;
  }
  
  .social-links {
    display: flex;
    align-items: center;
  }
  
  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #b0dceb;
    margin-right: 0.5rem;
    transition: background-color 0.3s ease;
  }
  
  .social-icon {
    font-size: 24px;
    color: #ffffff
;
  }
  
  .social-link:hover {
    background-color: #7fbad8;
  }
  
  @media screen and (max-width: 768px) {
    .navigation-links {
      display: none; /* Hide links on small screens */
    }
  
    .social-links {
      justify-content: center;
      margin-top: 1rem; 
      margin: auto;

    }
  }
  </style>
  