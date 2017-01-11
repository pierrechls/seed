import Home from 'components/Home'
import Plant from 'components/Plant'
import Garden from 'components/Garden'

module.exports = {
  '*': {
  redirect: '/home'
  },
  '/home': {
    name: 'Home',
    component: Home,
    alias: '/'
  },
  '/plant': {
    name: 'Plant',
    component: Plant
  },
  '/garden': {
    name: 'Garden',
    component: Garden
  }
}
