import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/page/navigation/navigation'
const _import = require('./_import')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Navigation,
      children: [
        {
          path: '',
          alias: '/home',
          name: 'Home',
          component: _import('home/home'),
          meta: {
            title: '首页',
            auth: false
          }
        },
        {
          path: '/trial',
          name: 'Trial',
          component: _import('trial/trial'),
          meta: {
            auth: false
          }
        },
        {
          path: '/progress',
          name: 'Progress',
          component: _import('progress/progress'),
          meta: {
            auth: false
          }
        },
        {
          path: '/user',
          name: 'User',
          component: _import('user/user'),
          meta: {
            auth: false
          }
        }
      ]
    },
    {
      path: '/goodsDetail/:gid',
      name: 'GoodsDetail',
      component: _import('goodsDetail/goodsDetail'),
      meta: {
        title: '商品详情',
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
