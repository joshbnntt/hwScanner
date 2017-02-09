<template>
  <div>
    <h1>Welcome.</h1>
    <router-link to="/scan" tag="button">Get Started!</router-link>
  </div>
</template>

<script>
  export default {
    name: 'landing-page'
  }
</script>

<style scoped>
@import url(../palette.css);
  img {
    margin-top: -25px;
    width: 450px;
  }
  
</style>
