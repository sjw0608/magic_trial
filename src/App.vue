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
.other_item {
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  color: #444;
  position: relative;
  z-index: 2;
  display: block;
  padding: 10px;
  font-size: 16px;
  h3 {
    margin: 0 0 4px 0;
    font-size: 14px;
  }
}
.help_item {
  padding: 0 10px;
  h5 {
    font-weight: normal;
    font-size: 14px;
    padding: 10px 0;
  }
  .help_item_content {
    font-size: 14px;
    background-color: #f9f9f9;
    padding: 10px;
    color: #797979;
  }
  span {
    color: #e42012;
  }
}
</style>
