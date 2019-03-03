<template>
  <div class="lang-switcher">
    <span @click="translate('en')" v-bind:class="lang === 'en' ? 'active' : ''">EN</span> |
    <span @click="translate('fr')" v-bind:class="lang === 'fr' ? 'active' : ''">FR</span>
  </div>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class LangSwitcher extends Vue {

    get lang(): string {
      return this.$store.state.lang;
    }

    public translate(lang: string) {
        this.$store.dispatch('translate', lang);
    }
  }

</script>

<style lang="scss" scoped>

  @import "@/assets/styles/colors.scss";

  span{
    cursor: pointer;
    color: $gray;

    &.active{
      color: $green;
    }
  }

</style>
