<template>
  <div class="home-view">
    <h1>\{{{ $t('home.title') }}}</h1>
    <img src="~../assets/images/logo.png"/>
    <p>\{{{ $t('home.text') }}}</p>
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
