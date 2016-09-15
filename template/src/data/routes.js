import Home from 'components/Home'
import Foo from 'components/Foo'
import Bar from 'components/Bar'

module.exports = {
  '/home': {
    name: 'home',
    component: Home
  },
  '/foo': {
    name: 'Foo',
    component: Foo
  },
  '/bar': {
    name: 'Bar',
    component: Bar
  }
}
