<template>
  <div id="app">
    <menu></menu>
    <transition name="default">
      <router-view></router-view>
    <transition>
  </div>
</template>

<script>

  import store from 'src/vuex/store'
  import Menu from 'components/Menu.vue'

  export default {
    name: 'App',
    el: '#app',
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

<style lang="scss" src="assets/styles/app.scss"></style>
