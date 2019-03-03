<template>
  <div id="app">
    <menu-app></menu-app>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">

  import MenuApp from '@/components/Menu.vue';
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component ({
    components: {
      MenuApp,
    },
  })
  export default class App extends Vue {}

</script>

<style lang="scss" src="@/assets/styles/app.scss"></style>
<style lang="scss" src="@/transitions/fade.scss"></style>
