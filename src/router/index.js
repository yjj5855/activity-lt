import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import banner1 from '../components/banner1'
// import banner2 from '../components/banner2'
// import banner3 from '../components/banner3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // {
    //   path: '/banner1',
    //   name: 'banner1',
    //   component: banner1
    // },
    // {
    //   path: '/banner2',
    //   name: 'banner2',
    //   component: banner2
    // },
    // {
    //   path: '/banner3',
    //   name: 'banner3',
    //   component: banner3
    // }
  ]
})
