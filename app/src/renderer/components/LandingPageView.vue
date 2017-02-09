<template>
  <div>
    <h1>Welcome.</h1>
    <router-link to="/about" tag="button">Get Started!</router-link>
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
  button {
      height:42px;
      width: 150px;
      background-color : transparent;
      border-color:var(--color-primary-0);
  }
  button:hover {
      background-color : var(--color-primary-0);
      border-color:transparent;
      color:white;
  }
</style>
