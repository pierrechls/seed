<template>
  <div class="plant-view">
    <h1 v-html="$t('plant.title')"></h1>
    <p>\{{ seedNumber }} <span v-if="seedNumber <= 1" v-html="$t('plant.seedText')"></span><span v-else v-html="$t('plant.seedsText')"></span></p>
    <button @click='plant' :disabled="seedNumber <= minSeed">-</button>
    <button @click='pullUp' :disabled="seedNumber >= maxSeed">+</button>
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';
  import settings from 'settings/default.json';

  @Component
  export default class Plant extends Vue {

    private maxSeed: number = settings.seed.max;
    private minSeed: number = 0;

    get seedNumber(): number {
      return this.$store.state.seed;
    }

    public plant() {
      this.$store.dispatch('plant');
    }

    public pullUp() {
      this.$store.dispatch('pullUp');
    }
  }

</script>

<style lang="scss" scoped>

  @import "@/assets/styles/colors.scss";

  h1{
    text-transform: uppercase;
  }

  button{
    background: $green;
    padding: 5px 20px;
    margin: 0 10px;
    color: $white;
    border: 0;
    border-radius: 0;
    outline: none;

    &:disabled{
      background: $gray;
      color: $green;
    }
  }

</style>
