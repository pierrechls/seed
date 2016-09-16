<template>
  <div id="menu">
    <lang-switcher></lang-switcher>
    <ul>
      <li><a v-link="{ name: 'Home' }">home</a></li>
      <li><a v-link="{ name: 'Plant' }">plant</a></li>
      <li><a v-link="{ name: 'Garden' }">garden</a></li>
    </ul>
  </div>
</template>

<script>

  import LangSwitcher from 'components/LangSwitcher.vue'

  export default {
    name: 'Menu',
    components: {
      LangSwitcher
    }
  }

</script>

<style lang="scss" scoped>

  #menu{

    .v-link-active {
      text-decoration: line-through !important;
    }

    ul{
      padding: 0;
      li {
        display: inline-block;
        list-style: none;
        margin-left: 10px;

        a{
          text-decoration: none;
        }
      }
      li:first-child {
        margin-left: 0;
      }
    }
  }

</style>
