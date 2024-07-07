<script setup>
import Nav from './components/Nav.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <Nav></Nav>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

    </div> -->
  </header>
  <!-- page  -->
  <RouterView />


</template>

<style scoped></style>
