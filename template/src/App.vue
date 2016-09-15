<template>
  <div id="app">
    <menu></menu>
    <router-view transition="default"></router-view>
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

<style lang="scss" src="assets/styles/app.scss"></style>
