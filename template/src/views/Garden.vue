<template>
  <div class="garden-view">
    <h1 v-html="$t('garden.title')"></h1>
    <img v-for="n in seedNumber" v-bind:key="n" src="@/assets/images/seed.svg" />
    <p v-if="seedNumber == 0" v-html="$t('garden.noSeed')"></p>
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';
  import settings from 'settings/default.json';

  @Component
  export default class Gardin extends Vue {

    private maxSeed: number = settings.seed.max;
    private minSeed: number = 0;

    get seedNumber(): number {
      return this.$store.state.seed;
    }
  }

</script>

<style lang="scss" scoped>

  h1{
    text-transform: uppercase;
  }
  img{
    width: 40px;
    height: 40px;
    margin: 10px auto;
  }

</style>
