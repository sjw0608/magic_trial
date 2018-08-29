import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const _import = require('./_import')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import('home/home'),
      meta: {
        title: '首页',
        auth: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: _import('login/login')
    },
    {
      path: '/register',
      name: 'Register',
      component: _import('register/index')
    }
  ]
})
