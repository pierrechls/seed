<template>
  <div id="menu">
    <lang-switcher></lang-switcher>
    <ul>
      <li><router-link :to="{ name: 'Home' }" v-html="$t('menu.home')" exact></router-link></li>
      <li><router-link :to="{ name: 'Plant' }" v-html="$t('menu.plant')" exact></router-link></li>
      <li><router-link :to="{ name: 'Garden' }" v-html="$t('menu.garden')" exact></router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">

  import LangSwitcher from '@/components/LangSwitcher.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component ({
    components: {
      LangSwitcher,
    },
  })
  export default class App extends Vue {}

</script>

<style lang="scss" scoped>

  #menu{

    .router-link-active {
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
