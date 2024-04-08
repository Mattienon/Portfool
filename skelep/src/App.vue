<script setup>
import {RouterView } from 'vue-router'
//these are the components that are almost always visible
import Navbar from "./components/Navbar.vue";
import foot from "./components/foot.vue"

import SkeleSpeak from './components/SkeleSpeak.vue';
</script>
<!-- Generel template setup  -->
<template>
  <div>
    <header> 
      <Navbar/>  
    
    </header>
    
    <main>
      <RouterView />
    </main>
    
    <footer>
      <foot/>
    </footer>
    
    <!-- <OffCanvas/> -->
    <SkeleSpeak/>
  </div>
</template>

<style lang="scss"  scoped>
//most css and adjustments are done in the given component to not interfere with each

</style>
