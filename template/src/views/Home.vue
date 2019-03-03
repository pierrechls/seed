<template>
  <div class="home-view">
    <h1 v-html="$t('home.title')"></h1>
    <img src="@/assets/images/logo.svg"/>
    <p v-html="$t('home.text')"></p>
  </div>
</template>

<script lang="ts">

  import { Vue } from 'vue-property-decorator';

  export default class Home extends Vue {}

</script>

<style lang="scss" scoped>

  h1 {
    text-transform: uppercase;
  }

  img{
    width: 100px;
    height: 100px;
  }

</style>
