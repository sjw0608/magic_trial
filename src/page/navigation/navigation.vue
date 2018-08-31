<template>
  <div class="loan-wrap">
    <tab v-if="name ==='Trial'" active-color='#f45a4f'>
      <tab-item selected @on-item-click="onItemClick">默认</tab-item>
      <tab-item @on-item-click="onItemClick">人气</tab-item>
      <tab-item @on-item-click="onItemClick">价值</tab-item>
      <tab-item @on-item-click="onItemClick">时间</tab-item>
    </tab>

    <tab v-if="name ==='Progress'" active-color='#f45a4f'>
      <tab-item selected @on-item-click="onItemClick">待审核</tab-item>
      <tab-item @on-item-click="onItemClick">已通过</tab-item>
      <tab-item @on-item-click="onItemClick">未通过</tab-item>
      <tab-item @on-item-click="onItemClick">已完成</tab-item>
    </tab>

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
import { Tabbar, TabbarItem, ViewBox, Tab, TabItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem,
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
  created() {},
  methods: {
    onItemClick(index) {
      console.log(index)
    }
  }
}
</script>
