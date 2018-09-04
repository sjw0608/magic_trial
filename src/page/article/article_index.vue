<template>
  <div>
    <router-link :to="{path:'/article/trial_help'}" class="other_item">
      <h3>试用新手指引</h3>
    </router-link>
    <router-link :to="{path:'/article/search_help'}"  class="other_item">
      <h3>搜索下单指引</h3>
    </router-link >
    <router-link :to="{path:''}" class="other_item">
      <h3>如何复制订单编号</h3>
    </router-link>
    <router-link :to="{path:''}"  class="other_item">
      <h3>申请之后如何知道结果</h3>
    </router-link >
  </div>
</template>

<script>
export default {}
</script>

<style lang='less'>
</style>
