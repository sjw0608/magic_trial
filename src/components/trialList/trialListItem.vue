<template>
  <div class="list">
    <template v-for="topic in trialItem">
      <div class="active borderb" :key="topic.id">
        <router-link class="list_w"  :to="{name:'GoodsDetail',params:{gid:topic.id}}">
          <div class="img">
            <img ng-if="topic.thumb" src="http://192.168.1.210:8081/uploadfile/2018/0810/20180810104238812_150.jpg">
          </div>
          <ul class="flex txt_wrap c5" style="padding-top:6px;">
            <li class="c5 klj ng-binding">gingham 迷你皮革包包</li>
            <li class="hd_1 c1"> <span class="c4">试用价格&nbsp;&nbsp;</span><b class="cc ng-binding">$ 12.00
              </b></li>
            <li class="c2">
              <p class="fl w1_4"><span class="c4 hg">剩余</span><b class="ng-binding"> 21份</b></p>
              <p class="fl w1_6"><span class="c4">关注人数</span><b class="ng-binding">0</b>人</p>
            </li>
          </ul>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import Scroll from '../scroll/scroll'
export default {
  components: {
    Scroll
  },
  props: {
    trialItem: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.list {
  background-color: #fff;
  .active.borderb {
    border-bottom: 1px solid #eaeaea;
  }
  .list_w {
    display: block;
    margin: 0;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    color: #979797;
    box-sizing: border-box;
    .img {
      width: 140px;
      height: auto;
      overflow: hidden;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .c5 {
      margin-left: 10px;
      color: #565656;
    }
    .flex {
      overflow: hidden;
      width: 100%;
    }
    .klj {
      color: #000000;
      width: 92%;
      line-height: 1.2;
      margin-top: 5px;
      margin-left: 0px;
      margin-bottom: 20px;
      font-size: 16px;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    b {
      font-weight: normal;
    }
    b.cc {
      color: #e31436;
    }
    .fl {
      float: left;
      width: 50%;
    }
    .hg {
      background-color: #e31436;
      border-radius: 4px;
      color: #fff;
      padding: 0px 4px;
    }
  }
  p {
    line-height: 1.6;
  }
}
</style>
