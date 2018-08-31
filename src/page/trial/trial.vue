<template>
    <scroll ref='scroll'
      :data="sliderGoods"
      :pullUpLoad="pullUpLoadObj"
      @pullingUp="onPullingUp">
      <trial-list :trialItem="trialItem"></trial-list>
      <div style="height:50px;"></div>
    </scroll>

</template>

<script>
import { Tab, TabItem } from 'vux'
import Scroll from '../../components/scroll/scroll'
import TrialList from '../../components/trialList/trialList'
export default {
  components: {
    Tab,
    TabItem,
    Scroll,
    TrialList
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
      trialItem: []
    }
  },
  created() {
    this.getItem()
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
      } else {
        this.$refs.scroll.forceUpdate()
      }
    },
    getItem() {
      this.trialItem = [
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        },
        {
          catid: '12',
          get_trial: '2',
          goods_bonus: '0.00',
          goods_number: '21',
          goods_point: '0',
          goods_price: '12.00',
          goods_tryproduct: '',
          goods_vipfree: '0',
          hits: '0',
          id: '79',
          mod_name: '免费试用',
          mod_price: '12.00',
          number: 21,
          price_name: '试用价',
          protype: 1,
          source: 1,
          start_time: '1533869700',
          subsidy: null,
          subsidy_type: null,
          thumb: '../../static/goodsbanner.jpg',
          title: 'gingham 迷你皮革包包'
        }
      ]
    }
  }
}
</script>

<style>
</style>
