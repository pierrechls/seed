<template>
  <div class="foo">
    <h1>Foo</h1>
    <p>\{{ count }}</p>
    <button @click='decrementCounter'>-</button>
    <button @click='incrementCounter'>+</button>
  </div>
</template>

<script>

  import { decrementCounter, incrementCounter } from 'src/vuex/actions'
  import { getCount } from 'src/vuex/getters'

  export default {
    name: 'Foo',
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
