<template>
  <!-- <div id="app"> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <menuHeader/> -->
  <!-- <carouselBootstraps/> -->
  <!-- <myForm/> -->
  <!-- <datatableBootstraps/> -->
  <!-- <page404/> -->
  <!-- <footermdb/> -->
  <!-- </div> -->

  <div class="container">
    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <router-view name="header-bottom"></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import myForm from "./components/myForm.vue";
// import formBootraps from "./components/fromBootstraps.vue";
// import page404 from "./components/404Page.vue";
// import carouselBootstraps from "./components/carouselBootstraps.vue";
// import datatableBootstraps from "./components/datatableBootstraps.vue";
import menuHeader from "./components/Header.vue";
import footermdb from "./components/Footer.vue";
export default {

};
</script>

<style>
</style>
