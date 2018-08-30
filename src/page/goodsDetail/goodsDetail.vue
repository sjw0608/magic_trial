<template>
  <div>
    <div class="goods">
      <div class="goods-img">
        <img :src="goodsDetail.thumb" alt="" style="width:100%">
    </div>
    <div class="s_part3">
          <div class="hang1">
            <div class="L">
              {{goodsDetail.title }}
            </div>
            <div style="clear: both"></div>
            <div class="money">
              <span>${{goodsDetail.goods_price}}</span> <i v-show="goodsDetail.protype == 3 ">(赠
                <span>{{goodsDetail.goods_bonus }}</span>
                美元红包)</i><i class="name"> {{goodsDetail.price_name}}</i>
            </div>
          </div>
          <div class="hang2">
            <span class="a1"> <span class="c4">限量份数：</span><span>{{goodsDetail.goods_number}}份</span></span>
            <span class="a1"><span class="c4">剩余份数：</span><span>{{goodsDetail.number}}份</span></span>
            <span class="a1"><span class="c4">申请人数：</span><span>{{goodsDetail.apply_people}}人</span></span>
          </div>
          <!--hang2-->
          <div class="hang3">
            <img src="./list-tip2.png" /> 商家已存保证金<b class="cc">${{ goodsDetail.goods_deposit}}</b>请放心申请
          </div>
          <!--hang3-->
          <div>
            <div class="tips_up">
              <span><img src="./list-tip1.png" class="icon_tips">小贴士</span>
              <span><img src="./list-tip3.png" class="icon_right"></span>
            </div>
            <div class="hang4">
              <div class="ti">试用流程</div>
              <div class="co c4 lc">
                <i>1</i>申请试用，获得试用资格
                <br>
                <i>2</i>按照提示以 <b class="cc">${{goodsDetail.goods_price}}</b>
                去指定平台购物
                <br>
                <i>3</i>回平台填写购买付款的订单号
                <br>
                <i>4</i>确认收货-给予评价
                <br>
                <i>5</i>商家返还
                <b class="cc">${{goodsDetail.goods_price}}</b>
                到您平台账户中
                <br>
              </div>

              <div class="ti">搜索下单流程</div>
              <div class="co c4 lc">
                <i>1</i>打开 <b class="cc">亚马逊</b> 首页,搜索关键词
                <b class="cc">{{goodsDetail.goods_rule.keyword}}</b>
                <br>
                <i>2</i>按照
                <b class="cc">{{goodsDetail.goods_rule.sort}}</b> 排序搜索
                <br>
                <i>3</i>认准掌柜店铺
                <b class="cc">{{goodsDetail.goods_ww}}</b>
                <br>
                <i>4</i>搜索帮助提示
                <b class="cc">{{goodsDetail.goods_rule.keyword2}}</b>
                <br>
              </div>
              <div class="ti">注意事项</div>
              <div class="co c4">
                1.与商家聊天的时候不要提及试用相关信息。
                <br> 2.不要催促商家发货.返款,请遵守平台相关规定。
                <br>
              </div>
              <div class="ti">温馨提示</div>
              <div class="co c4">
                完善个人相关资料，可以提高通过率。
                <br>
              </div>
            </div>
          </div>
          <!--hang5 搜索下单流程图-->

          <div class="hang6">
            <img src="./sosuo.png" v-show="goodsDetail.type == 'search'  ">
            <img src="./saoma.png" v-show=" goodsDetail.type == 'qrcode' ">
            <img src="./ak.png" v-show=" goodsDetail.type == 'ask'   ">
          </div>
        </div>
    </div>
    <tab>
      <tab-item selected  @on-item-click="onItemClick">活动详情</tab-item>
      <tab-item  @on-item-click="onItemClick">已申请</tab-item>
    </tab>
    <div class="s_part7 ccc" v-show="Switch == 0">
      <div v-html="goodsDetail.goods_content"></div>
    </div>
    <div class="s_part8" v-show="Switch == 1">
      <!-- <div class="list" v-show="  user_list_showloading == false && user_list != '' ">
        <a class="part" href="#" ng-repeat="d in user_list">
          <div class="hang1">
            <img ng-src="{{ ENV.imgUrl +  d.avatar  }}"></div>
          <div class="hang2 c4">{{d.nickname | f_nickname | limitTo : 5 }}</div>
        </a>
      </div> -->
      <div class="tis c4">暂时还没有人申请</div>
    </div>
    <div style="height:50px"></div>
    <div class="i_tryout_s_part4">
      <div class="last_time">
        <span >剩余:</span>
        <span> <i  style="color: #fff;" :id="goodsDetail.end_time">{{goodsDetail.end_time }}</i></span></div>
        <a  class="a1 right_free">免费申请</a>
      <!-- <div ng-if="order_is_join.data == 1 && showdata.number > 0&&Member_group == 2 " class="vip">
        <a ng-click="vip_Apply_trial()" ng-show=" Member_group == 2&& showdata.goods_vipfree == 1">vip试用</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Scroll from '../../components/scroll/scroll'
import Banner from '../../components/scroll/bannerItem'
import { Tab, TabItem } from 'vux'
export default {
  components: {
    Scroll,
    Banner,
    Tab,
    TabItem
  },
  data() {
    return {
      Switch: 0,
      goodsDetail: {}
    }
  },
  created() {
    this.getGoodsDetail()
  },
  methods: {
    onItemClick(index) {
      console.log(index)
      this.Switch = index
    },
    getGoodsDetail() {
      this.goodsDetail = {
        title: 'freeplus 芙丽芳丝 净润洗面霜100g*2(进)',
        price_name: '试用价',
        goods_rule: {
          keyword: '洗面霜',
          keyword2: '芙丽芳丝',
          sort: '综合',
          collect: '0',
          address: '如第一页第二排左'
        },
        goods_tips: {
          goods_order: {
            is_ip: '0',
            is_join: '0',
            is_postal: '0'
          },
          price: {
            after: '',
            cost: ''
          }
        },
        apply_people: '2',
        catid: '67',
        end_time: '1535962260',
        finish_people: '0',
        goods_bonus: '0.00',
        goods_deposit: '2290.00',
        goods_number: '10',
        goods_point: '0',
        goods_price: '219.00',
        id: '99',
        number: '9',
        passed_people: '1',
        thumb: '../../static/goodsbanner.jpg',
        type: 'search',
        goods_content: `<h1 id="" class="a-size-large a-spacing-none" style="box-sizing: border-box; padding: 0px; margin-top: 0px; margin-right: 0px; margin-left: 0px; font-weight: 400; color: rgb(17, 17, 17); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft Yahei&quot;, Arial, sans-serif; white-space: normal; background-color: rgb(255, 255, 255); margin-bottom: 0px !important; font-size: 21px !important; line-height: 1.3 !important;"><span
        id="product" class="a-size-large" style="box-sizing: border-box; font-size: 19px !important; line-height: 1.3 !important;">freeplus
        芙丽芳丝 净润洗面霜100g*2(进)</span></h1>
<p><img src="../../static/goodsbanner.jpg" /></p>
<p><img src="../../static/goodsbanner.jpg" /></p>
<p><img src="../../static/goodsbanner.jpg" /></p>
<p><br/>
</p>`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.s_part3 {
  position: relative;
  margin-top: 5px;
  background-color: #fff;
  img {
    vertical-align: middle;
  }
  // padding: 0 10px;
  .hang1 {
    text-align: left;
    padding: 6px 10px 0;
    .money {
      margin-top: -5px;
    }
    .L {
      line-height: 26px;
      color: #000;
      font-weight: bold;
    }
    span {
      color: #e42012;
      font-weight: bolder;
      font-size: 18px;
    }
    .name {
      color: #e42012;
      font-size: 12px;
    }
  }
  .hang2 {
    padding: 10px 10px 5px;
    font-size: 12px;
    border-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #7f7f7f;
  }
  .hang3 {
    padding: 0 10px;
    height: 48px;
    line-height: 48px;
    background-color: #fdfde7;
    text-align: inherit;
    color: #e42012;
    font-size: 14px;
    img {
      width: 20px;
    }
  }
  .tips_up {
    margin: 10px;
    color: #7f7f7f;
    font-weight: bolder;
    font-size: 14px;
    .icon_tips {
      width: 20px;
      margin-top: -4px;
      margin-right: 4px;
    }
    .icon_right {
      float: right;
      width: 18px;
    }
  }
  .hang4 {
    padding: 0 10px;
    font-size: 14px;
    color: #7f7f7f;
    .ti {
      height: 30px;
      line-height: 3;
      font-weight: bolder;
    }
    .lc {
      line-height: 38px;
    }
    .co {
      line-height: 24px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f3f3f3;
      margin: 10px 0;
      i {
        background-color: #fef1f8;
        color: #f61d4b;
        border-radius: 50%;
        padding: 2px 6px 2px 6px;
        margin: 0px 7px 0px 2px;
      }
    }
    .cc {
      color: #e42012;
    }
  }
  .hang6 {
    position: absolute;
    top: 150px;
    right: 20px;
  }
}
.s_part7 {
  background-color: #fff;
  padding: 10px 10px 0;
  line-height: 24px;
  color: #7f7f7f;
}
.s_part8 {
  background-color: #fff;
  font-size: 14px;
  color: #7f7f7f;
  .tis {
    text-align: center;
    line-height: 40px;
  }
}
.i_tryout_s_part4 {
  border-top: 1px solid #f0eff5;
  text-align: center;
  padding: 0px;
  background: #fff;
  width: 100%;
  z-index: 999;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  .last_time {
    font-size: 14px;
    background-color: #f61d4b;
    color: #fff;
    width: 50%;
    line-height: 42px;
  }
  .right_free {
    font-size: 14px;
    color: #f61d4b;
    background-color: #ffffff;
    -webkit-box-flex: 3;
    width: 33.333%;
    -webkit-flex: 3;
    -webkit-box-flex: 3;
    -ms-flex: 3;
    flex: 3;
    height: 42px;
    line-height: 42px;
  }
}
</style>
