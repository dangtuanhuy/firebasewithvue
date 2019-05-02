<template>
  <div>
    <h1>Fruits</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Home Page</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>
