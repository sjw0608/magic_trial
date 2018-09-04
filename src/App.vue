<template>
  <div id="app">
     <!-- <waiting :show="isLoading" :text="text" :progress="isProgress" :percent="percent"></waiting> -->
    <router-view/>
  </div>
</template>

<script>
// import Waiting from './components/waiting'
export default {
  name: 'App'
  // components: {
  //   Waiting
  // }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
@import './style/variable.less';
@import './style/index.less';
body {
  background-color: #fff;
}
</style>
