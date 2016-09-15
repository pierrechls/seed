<template>
  <div class="home-view">
    <h1>\{{{ $t('welcome') }}}</h1>
    <img src="~../assets/images/logo.png"/>
    <p>\{{{ $t('text') }}}</p>
  </div>
</template>

<script>

  export default {
    name: 'Home'
  }

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
