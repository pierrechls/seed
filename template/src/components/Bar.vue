<template>
  <div class="bar">
    <h1>Bar</h1>
    <p>{{ count }}</p>
    <button @click='decrementCounter'>-</button>
    <button @click='incrementCounter'>+</button>
  </div>
</template>

<script>

  import { decrementCounter, incrementCounter } from 'src/vuex/actions'
  import { getCount } from 'src/vuex/getters'

  export default {
    name: 'Bar',
    vuex: {
      getters: {
        count: getCount
      },
      actions: {
        decrementCounter,
        incrementCounter
      }
    }
  }

</script>

<style lang="scss" scoped>



</style>
