<template>
  <div class="plant-view">
    <h1>Plant</h1>
    <p>\{{ seedNumber }} <span v-if="seedNumber > 1">seeds</span><span v-else>seed</span> are planted</p>
    <button @click='plant' :disabled="seedNumber <= minSeed">-</button>
    <button @click='pullUp' :disabled="seedNumber >= maxSeed">+</button>
  </div>
</template>

<script>

  import { plant, pullUp } from 'src/vuex/actions'
  import { getSeed } from 'src/vuex/getters'
  import settings from 'lib/settings'

  export default {
    name: 'Plant',
    data: function () {
      return {
        maxSeed: settings.seed.max,
        minSeed: settings.seed.min
      }
    },
    vuex: {
      getters: {
        seedNumber: getSeed
      },
      actions: {
        plant,
        pullUp
      }
    }
  }

</script>

<style lang="scss" scoped>

  @import "~assets/styles/colors.scss";

  button{
    background: $green;
    padding: 5px 20px;
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
