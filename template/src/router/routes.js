import Home from 'views/Home'
import Plant from 'views/Plant'
import Garden from 'views/Garden'

module.exports = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    alias: '/'
  },
  {
    path: '/plant',
    name: 'Plant',
    component: Plant
  },
  {
    path: '/garden',
    name: 'Garden',
    component: Garden
  }
]
