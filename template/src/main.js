import Vue from 'vue'
import App from 'src/App'

// Global vue stuffs
import 'gsap'
import 'src/transitions'
import 'locales/index'

// Routing
import VueRouter from 'vue-router'
import routes from 'data/routes'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false,
  routes: routes
})

new Vue({
  el: 'body',
  router: router,
  render: h => h(App)
})
