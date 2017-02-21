<template>
  <div class="garden-view">
    <h1 v-html="$t('garden.title')"></h1>
    <img v-for="n in seedNumber" src="~../assets/images/seed.svg" />
    <p v-if="seedNumber == 0" v-html="$t('garden.noSeed')"></p>
  </div>
</template>

<script>

  export default {
    name: 'Garden',
    computed: {
      seedNumber() {
        return this.$store.state.seed
      }
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
