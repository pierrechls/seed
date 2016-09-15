<template>
  <div id="app">
    <menu></menu>
    <router-view></router-view>
  </div>
</template>

<script>

  import store from 'src/vuex/store'
  import Menu from 'components/Menu.vue'

  export default {
    name: 'App',
    replace: false,
    components: {
      Menu
    },
    route: {
      data: function (transition) {

      }
    },
    store
  }

</script>

<style>

  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    position: relative;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  #app > div {
    background: #EEE;
    position: absolute;
    width: 100%;
  }

</style>
