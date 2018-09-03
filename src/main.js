// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { AlertPlugin, ConfirmPlugin, ToastPlugin, CloseDialogsPlugin } from 'vux'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import vueBus from 'vue-bus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import store from './store'

import './assets/font/iconfont.css'

window.MODE_BRANCH = process.env.MODE_BRANCH
FastClick.attach(document.body)

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(CloseDialogsPlugin, router)
Vue.use(vueBus)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
import 'swiper/dist/css/swiper.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  components: { App },
  template: '<App/>'
})
