<template>
  <footer class="footer">
    <div class="social-links">
      <!-- Generate social media links dynamically -->
      <a v-for="(socialLink, index) in socialMediaLinks" :key="index" :href="socialLink.url" class="social-link">
        <icon :icon="socialLink.icon" class="social-icon"></icon>
      </a>
    </div>

    <RouterLink v-for="(link, index) in navigationLinks" :key="index" :to="link.path" class="footer-link">{{ link.text }}</RouterLink>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';

const socialMediaLinks = ref([
  { name: 'Facebook', icon: 'mdi-facebook', url: 'https://www.facebook.com/mathilde.nonbo/' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/mathildenonbo/' },
  { name: 'Instagram', icon: 'mdi-instagram', url: 'https://www.instagram.com/deadcreativecc/' },
]);

const navigationLinks = ref([
  { path: '/', text: 'Home' },
  { path: '/Contact', text: 'About' }
]);
</script>

<style lang="scss" scoped>
.footer {  
  display: flex;
  justify-content: flex-end; /* Center align links */
  align-items: center; /* Center align vertically */
  font-size: 14px; /* Adjust font size */
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #639acd9c; /* Dark background color */
  color: #fff; /* Light text color */
  padding: 10px; 
}

.footer-link {
  padding: 0 1rem;
  color: #fff; /* Text color */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s; /* Smooth color transition */
}

.footer-link:hover {
  color: #ccc; /* Change text color on hover */
}


.social-links{
  margin-left: 2rem;
  display: flex;
  justify-content: flex-start; /* Align links to the left */
  align-items: center; /* Center align vertically */
  margin-right: auto; /* Push the navigation links to the right */
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Adjust width */
  height: 40px; /* Adjust height */
  border-radius: 50%;
  background-color: #9fd8eb;
  margin-right: 0.5rem; /* Adjust spacing between social links */
  transition: background-color 0.3s ease;
}

.social-icon {
  font-size: 24px; /* Adjust icon size */
}

.social-link:hover {
  background-color: #7fbad8;
}


</style>
