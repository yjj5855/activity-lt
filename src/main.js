// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

import router from './router'
import './assets/index.less'

import {ToastPlugin} from 'vux'

Vue.use(VueRouter)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

window.is_wx = function () {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.includes('micromessenger')) {
    return true
  } else {
    return false
  }
}
