<template>
  <div class="garden-view">
    <h1>Garden</h1>
    <img v-for="n in seedNumber" src="~../assets/images/seed.svg" />
    <p v-if="seedNumber == 0">\{{{ $t('garden.noSeed') }}}</p>
  </div>
</template>

<script>

  import { getSeed } from 'src/vuex/getters'

  export default {
    name: 'Garden',
    vuex: {
      getters: {
        seedNumber: getSeed
      }
    }
  }

</script>

<style lang="scss" scoped>

  img{
    width: 40px;
    height: 40px;
    margin: 10px auto;
  }

</style>
