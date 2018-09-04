<template>
  <div>
    <tab class="tab_news">
      <tab-item selected  @on-item-click="onItemClick">普通消息</tab-item>
      <tab-item  @on-item-click="onItemClick">广播消息</tab-item>
    </tab>
     <scroller lock-x scrollbar-y use-pullup use-pulldown height="100%" @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" v-model="status" ref="scroller">
       <template v-for=" x in bottomCount">
        <div class="news_item" :key="x">
          <div class="news_item_left">
           <img src="./a33.jpg" alt="">
          </div>
          <div class="news_item_right">
            <h5><span style="color:red;">[未读]</span>订单结算通知</h5>
            <p>2018-09-03 10:21:44</p>
            <p>柒玥您好：您参与的活动结算完成商品名称：Peppa Pig 小猪佩奇 乔治斜挎包已实时充入您的网站账户</p>
          </div>
        </div>
        </template>
        <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
          <span v-show="status.pullupStatus === 'default'"></span>
          <span class="pullup-arrow" v-show="status.pullupStatus === 'down' || status.pullupStatus === 'up'" :class="{'rotate': status.pullupStatus === 'up'}">↑</span>
          <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
        </div>
     </scroller>
  </div>
</template>

<script>
import { Tab, TabItem, Scroller, Spinner } from 'vux'
import { setTimeout } from 'timers'
export default {
  name: 'UserAnnounceShow',
  components: {
    Tab,
    TabItem,
    Scroller,
    Spinner
  },
  data() {
    return {
      scrollTop: 0,
      pullupEnabled: false,
      bottomCount: 10,
      loading: false,
      status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      }
    }
  },
  methods: {
    onItemClick(index) {
      console.log(index)
    },
    loadMore() {
      setTimeout(() => {
        this.bottomCount += 10
        setTimeout(() => {
          this.$refs.scroller.donePullup()
        }, 20)
      }, 2000)
    },
    refresh() {
      setTimeout(() => {
        this.nbottomCount = 10
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown()
            this.pullupEnabled && this.$refs.scroller.enablePullup()
          }, 10)
        })
      }, 2000)
    }
  }
}
</script>

<style lang='less'>
.vux-tab-wrap {
  // position: fixed;
}
.vux-tab-wrap .vux-tab-container {
  position: fixed;
  z-index: 1000;
}
.news_item {
  padding: 10px;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .news_item_left {
    width: 20%;
    margin-right: 10px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .news_item_right {
    width: 80%;
    h5 {
      font-weight: 400;
      margin: 0 0 2px 0;
      font-size: 16px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #666;
      font-size: 14px;
      margin-bottom: 2px;
    }
  }
}
</style>
