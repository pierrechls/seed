<template>
  <div id="menu">
    <ul>
      <li><a v-link="{ name: 'home' }">home</a></li>
      <li><a v-link="{ name: 'Foo' }">foo</a></li>
      <li><a v-link="{ name: 'Bar' }">bar</a></li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'Menu'
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
