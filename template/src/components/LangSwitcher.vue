<template>
  <div class="lang-switcher">
    <span @click="translate('nl')" v-bind:class="lang === 'en' ? 'active' : ''">EN</span> |
    <span @click="translate('fr')" v-bind:class="lang === 'fr' ? 'active' : ''">FR</span>
  </div>
</template>

<script>

  import { getLang } from 'src/vuex/getters'
  import { translate } from 'src/vuex/actions'

  export default {
    name: 'LangSwitcher',
    vuex: {
      getters: {
        lang: getLang
      },
      actions: {
        translate
      }
    }
  }

</script>

<style lang="scss" scoped>

  span{
    cursor: pointer;
  }

</style>
