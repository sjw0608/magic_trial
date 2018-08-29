<template>
  <div class="">
    <goods-slider :sliderGoods="sliderGoods"></goods-slider>
  </div>
</template>
<script>
import GoodsSlider from './goodsBannerItem'
export default {
  components: {
    GoodsSlider
  },
  props: {
    sliderGoods: Array
  }
}
</script>
<style lang="less">
</style>
