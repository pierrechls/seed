import Home from 'components/Home'
import Plant from 'components/Plant'
import Garden from 'components/Garden'

module.exports = {
  '/home': {
    name: 'Home',
    component: Home
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
