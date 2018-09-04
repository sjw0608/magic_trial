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
      component: _import('login/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: _import('register/index'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/user_announce_show',
      Name: 'UserAnnounceShow',
      component: _import('user/user_announce_show'),
      meta: {
        title: '我的消息'
      }
    },
    {
      path: '/user_profile',
      Name: 'UserProfile',
      component: _import('setting/user_profile'),
      meta: {
        title: '设置',
        auth: true
      }
    },
    {
      path: '/user_profile/nickname',
      Name: 'UserProfileNickname',
      component: _import('setting/user_profile_nickname'),
      meta: {
        title: '修改昵称',
        auth: true
      }
    },
    {
      path: '/user_profile/password',
      Name: 'UserProfilePassword',
      component: _import('setting/user_profile_password'),
      meta: {
        title: '修改密码',
        auth: true
      }
    },
    {
      path: '/user_profile/email',
      Name: 'UserProfileEmail',
      component: _import('setting/user_profile_email'),
      meta: {
        title: '我的邮箱',
        auth: true
      }
    },
    {
      path: '/user_profile/card',
      Name: 'UserProfileCard',
      component: _import('setting/user_profile_card'),
      meta: {
        title: '实名认证',
        auth: true
      }
    },
    {
      path: '/user_profile/amazon',
      Name: 'UserProfileAmazon',
      component: _import('setting/user_profile_amazon'),
      meta: {
        title: '绑定亚马逊账号',
        auth: true
      }
    },
    {
      path: '/other',
      Name: 'Other',
      component: _import('user/other'),
      meta: {
        title: '更多'
      }
    },

    {
      path: '/article',
      Name: 'Article',
      component: _import('article/article_index'),
      meta: {
        title: '帮助中心'
      }
    },

    {
      path: '/article/trial_help',
      Name: 'TrialHelp',
      component: _import('article/trial_help'),
      meta: {
        title: '新手指引'
      }
    },
    {
      path: '/article/search_help',
      Name: 'SearchHelp',
      component: _import('article/search_help'),
      meta: {
        title: '搜索下单帮助'
      }
    },
    {
      path: '/other/about',
      Name: 'About',
      component: _import('user/about'),
      meta: {
        title: '关于我们'
      }
    }
  ]
})
