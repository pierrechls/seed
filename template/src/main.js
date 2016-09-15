import Vue from 'vue'
import App from 'src/App'

// Global vue stuffs
import 'gsap'
import 'src/transitions'

// Routing
import VueRouter from 'vue-router'
import routes from 'data/routes'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false,
  transitionOnLoad: true
})
router.map(routes)
router.alias({ '/': '/home' })
router.start(App, 'body')
router.redirect({ '*': '/home' })
