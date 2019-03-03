import Vue from 'vue';
import App from './App.vue';
import router from '@/lib/router';
import store from '@/lib/store';
import i18n from '@/lib/locales';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
