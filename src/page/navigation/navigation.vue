<template>
  <div class="loan-wrap">
    <router-view />
    <tabbar v-if="!showmenu">
      <tabbar-item :selected="name === 'Home'" link="/">
        <i slot="icon" class="iconfont icon-home-"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item  :selected="name === 'Trial'" link="/trial">
        <i slot="icon" class="iconfont icon-sy-1"></i>
        <span slot="label">试用</span>
      </tabbar-item>
      <tabbar-item  :selected="name === 'Progress'"  link="/progress">
        <i slot="icon" class="iconfont icon-jdd-1"></i>
        <span slot="label">进度</span>
      </tabbar-item>
      <tabbar-item :selected="name === 'User'" link="/user">
        <i slot="icon" class="iconfont icon-gr-"></i>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox } from 'vux'
export default {
  name: 'Layout',
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  data() {
    return {
      name: '',
      market: '',
      showmenu: ''
    }
  },
  watch: {
    $route(route) {
      this.name = route.name
    }
  },
  created() {}
}
</script>
