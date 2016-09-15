<template>
  <div id="app">
    <menu></menu>
    <p>Welcome!</p>
    <p><a href="http://webpack.github.io/" target="_blank">Webpack</a> documentation.</p>
    <p><a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a> documentation.</p>
    <router-view transition="default"></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  route: {
    data: function (transition) {
      // console.log('App.vue - transition from %s to %s', transition.from.name, transition.to.name)
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
  margin-top: -100px;
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

.logo {
  width: 100px;
  height: 100px
}
</style>
