<template>
  <div class="foo">
    <h1>Foo</h1>
    <p>{{ count }}</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
