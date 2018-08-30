<template>
 <swiper class="swiper goods_banner" :options="swiperOption"  ref="mySwiper">
    <!-- slides -->
    <template v-for="item in sliderGoods">
      <swiper-slide>
        <router-link class="indexProRecommendPart" :key="item.id" :to="{name:'GoodsDetail',params:{gid:item.id}}">
          <div class="co">
            <div class="a1">
              <img :src="item.thumb" alt="">
            </div>
            <div class="a2">{{item.mod_name}}</div>
            <div class="R">限量{{item.number}}</div>
          </div>
        </router-link>
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    sliderGoods: Array
  },
  data() {
    return {
      swiperOption: {
        //切换模式  横屏或者竖屏
        // direction : 'vertical',
        //设置自动播放速度
        autoplay: false,
        //开启无限循环
        loop: false,
        //设置同屏显示的数量，默认为1，使用auto是随意的意思。
        slidesPerView: 3.5,
        //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheel: true
      }
    }
  }
}
</script>

<style lang='less' scoped>
// .goods_banner {
//   .swiper-slide {
//     margin: 0 5px;
//   }
// }
.indexProRecommendPart {
  display: block;
  padding: 0 5px;
  text-align: left;
  .a1 > img {
    width: 100%;
  }
  .a2 {
    font-size: 14px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .R {
    font-size: 12px;
    margin-top: -6px;
    color: #e31436;
  }
}
</style>
