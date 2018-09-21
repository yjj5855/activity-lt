import Vue from 'vue'
import Router from 'vue-router'

import pcHome from '../components/pc-home'
import banner1 from '../components/banner1-pc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: pcHome,
      meta: {index: 0}
    },
    {
      path: '/banner1',
      name: 'banner1',
      component: banner1,
      meta: {index: 1}
    }
  ]
})
