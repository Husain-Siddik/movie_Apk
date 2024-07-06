<script setup>
import Nav from '../src/components/Nav.vue'
import footerItem from '../src/components/footerItem.vue'
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
  <footerItem></footerItem>

</template>

<style scoped></style>
