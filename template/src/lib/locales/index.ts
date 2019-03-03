import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/lib/store';

import fr from 'locales/fr.json';
import en from 'locales/en.json';

Vue.use(VueI18n);

const locales = {
    fr,
    en,
};

const i18n = new VueI18n({
    locale: store.state.lang,
    messages: locales,
});

store.subscribe((mutation, state) => {
    i18n.locale = state.lang;
});

export default i18n;
