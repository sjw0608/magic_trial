<template>
  <div class="">
    <goods-slider :goodsList="goodsList"></goods-slider>
  </div>
</template>
<script>
import GoodsSlider from './goodList'
export default {
  components: {
    GoodsSlider
  },
  props: {
    goodsList: Array
  }
}
</script>
<style lang="less">
</style>
