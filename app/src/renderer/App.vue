<template>
  <div id="#app">
    <nav class="nav">
        <router-link to="/" tag="li" exact>home</router-link>
        <router-link to="/about" tag="li">about</router-link>
        <router-link to="/scan" tag="li">scan</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(./palette.css);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
  nav {
      padding-left:5px;
      position: fixed;
      top:0;
      left:0;
      display: flex;
      width:100vw;
      height:45px;
      align-items:center;
      justify-content: flex-start;
      background-color:var(--color-primary-0);
      color:white;
      text-align: center;
  }
  nav>li {
      display:flex;
      list-style: none;
      margin:3px;
      height:45px;
      line-height: 45px;
      padding-left:3px;
      padding-right:3px;
  }
  nav>li:hover {
      background-color:var(--color-primary-4);
      color:white;
  }
  .router-link-active {
      background-color:var(--color-secondary-2-3);
      color:white;
  }
  .router-link-active:hover {
      background-color:var(--color-secondary-2-1);
      color:var(--color-primary-4);
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
