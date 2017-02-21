<template>
  <div class="lang-switcher">
    <span @click="translate('en')" v-bind:class="lang === 'en' ? 'active' : ''">EN</span> |
    <span @click="translate('fr')" v-bind:class="lang === 'fr' ? 'active' : ''">FR</span>
  </div>
</template>

<script>

  export default {
    name: 'LangSwitcher',
    computed: {
      lang() {
        return this.$store.state.lang
      }
    },
    methods: {
      translate: function (lang) {
        this.$store.dispatch('translate', lang)
      },
      pullUp: function () {
        this.$store.dispatch('translate', lang)
      }
    }
  }

</script>

<style lang="scss" scoped>

  @import "~assets/styles/colors.scss";

  span{
    cursor: pointer;
    color: $gray;

    &.active{
      color: $green;
    }
  }

</style>
