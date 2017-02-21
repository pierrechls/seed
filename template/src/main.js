import Vue from 'vue'
import App from 'src/App'

// Global vue stuffs
import 'gsap'
import 'locales/index'

// Routing
import router from 'src/router'

// Store
import store from 'src/store'

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
