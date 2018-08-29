<template>
  <scroll ref='scroll'
    :data="sliderGoods"
    :pullUpLoad="pullUpLoadObj"
    @pullingUp="onPullingUp">
    <banner :bannerList="swiperImg"></banner>
    <div class="hot_title">
      <div class="hot_title-aa">今日推荐</div>
      <div class="hot_title-dd">
        ACTIVITY PROJECT
      </div>
      <slider-good :sliderGoods='sliderGoods'></slider-good>
    </div>
    <div class="hot_title">
      <div class="hot_title-aa">新品上架</div>
      <div class="hot_title-dd">
        NEW PRODUCT
      </div>
      <goods-list :goodsList="sliderGoods"></goods-list>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../../components/scroll/scroll'
import SliderGood from '../../components/scroll/goodsBanner'
import Banner from '../../components/scroll/bannerItem'
import GoodsList from '../../components/goodList/goodsItem'
export default {
  components: {
    Scroll,
    SliderGood,
    Banner,
    GoodsList
  },
  data() {
    return {
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '加载更多',
      pullUpLoadNoMoreTxt: '没有更多数据了',
      sliderGoods: [],
      goodsList: [],
      more: false,
      swiperImg: ['../../static/1.jpg', '../../static/2.jpg', '../../static/3.jpg']
    }
  },
  mounted() {
    this.getGoodsList()
  },
  watch: {
    pullUpLoadObj: {
      handler() {
        this.rebuildScroll()
      },
      deep: true
    }
  },
  computed: {
    pullUpLoadObj() {
      return {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: { more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt }
      }
    }
  },
  methods: {
    onPullingUp() {
      if (this.more) {
        this.getGoodsList()
      } else {
        this.$refs.scroll.forceUpdate()
      }
    },
    getGoodsList() {
      this.sliderGoods = [
        {
          mod_name: '迷你包包',
          price_name: '\u8bd5\u7528\u4ef7',
          mod_price: '269.00',
          number: 10,
          start_time: '1534477860',
          title: '迷你包包',
          get_trial: '1',
          catid: '8',
          id: '88',
          thumb: '../../static/goodsbanner.jpg',
          goods_price: '269.00',
          goods_bonus: '0.00',
          hits: '0',
          goods_tryproduct: '',
          protype: 1
        },
        {
          mod_name: '迷你包包',
          price_name: '\u8bd5\u7528\u4ef7',
          mod_price: '269.00',
          number: 10,
          start_time: '1534477860',
          title: '迷你包包',
          get_trial: '1',
          catid: '8',
          id: '88',
          thumb: '../../static/goodsbanner.jpg',
          goods_price: '269.00',
          goods_bonus: '0.00',
          hits: '0',
          goods_tryproduct: '',
          protype: 1
        },
        {
          mod_name: '迷你包包',
          price_name: '\u8bd5\u7528\u4ef7',
          mod_price: '269.00',
          number: 10,
          start_time: '1534477860',
          title: '迷你包包',
          get_trial: '1',
          catid: '8',
          id: '88',
          thumb: '../../static/goodsbanner.jpg',
          goods_price: '269.00',
          goods_bonus: '0.00',
          hits: '0',
          goods_tryproduct: '',
          protype: 1
        },
        {
          mod_name: '迷你包包',
          price_name: '\u8bd5\u7528\u4ef7',
          mod_price: '269.00',
          number: 10,
          start_time: '1534477860',
          title: '迷你包包',
          get_trial: '1',
          catid: '8',
          id: '88',
          thumb: '../../static/goodsbanner.jpg',
          goods_price: '269.00',
          goods_bonus: '0.00',
          hits: '0',
          goods_tryproduct: '',
          protype: 1
        },
        {
          mod_name: '迷你包包',
          price_name: '\u8bd5\u7528\u4ef7',
          mod_price: '269.00',
          number: 10,
          start_time: '1534477860',
          title: '迷你包包',
          get_trial: '1',
          catid: '8',
          id: '88',
          thumb: '../../static/goodsbanner.jpg',
          goods_price: '269.00',
          goods_bonus: '0.00',
          hits: '0',
          goods_tryproduct: '',
          protype: 1
        },
        {
          mod_name: '迷你包包',
          price_name: '\u8bd5\u7528\u4ef7',
          mod_price: '269.00',
          number: 10,
          start_time: '1534477860',
          title: '迷你包包',
          get_trial: '1',
          catid: '8',
          id: '88',
          thumb: '../../static/goodsbanner.jpg',
          goods_price: '269.00',
          goods_bonus: '0.00',
          hits: '0',
          goods_tryproduct: '',
          protype: 1
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.hot_title {
  background-color: #fff;
  margin-top: 10px;
  text-align: center;
  .hot_title-aa {
    padding: 15px 0px 0px 0px;
    font-size: 16px;
    color: #333;
    margin: 0 auto;
    font-weight: 400;
  }
  .hot_title-dd {
    font-size: 10px;
    color: #999;
    padding-bottom: 10px;
    margin-top: -2px;
  }
}
</style>
