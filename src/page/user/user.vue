<template>
  <scroller lock-x  @on-scroll="onScroll">
   <div class="user">
    <div v-if= "login">
      <div class="user-signOn_header">
        <div class="signOn_logo">
          <img src="./a33.jpg" alt="">
        </div>
        <div class="signIn_btn">
          <router-link :to="{name:'Login'}" class="s_btn">登录/注册</router-link>
        </div>
      </div>
    </div>

    <div class="user-signIn_header">
      <div class="user-signIn_logoNcikname" >
        <div class="signIn-img">
          <img src="./a33.jpg" alt="">
        </div>
        <div class="a2"  style="color: #666;">柒玥</div>
        <!-- <div class="a2"  style="color: #666;">修改头像昵称</div> -->
      </div>
      <div class="user-signIn_qiandao">
        <a>每日签到</a>
      </div>
    </div>

    <div class="user-signIn_account">
      <div class="user-account_blance">
        <span>$999999</span>
        <span>账户余额</span>
      </div>
      <div class="user-account_blance">
        <span>99999999</span>
        <span>我的积分</span>
      </div>
    </div>

    <router-link :to="{name:'Progress'}" class="item item-icon-left item-icon-right " style="color:#fd3636; padding-left: 45px;border-top:1px solid #ededed">
      <i class="icon iconfont icon-gouwuche"></i>
      <h3>我的试用</h3>
    </router-link>
    <router-link :to="{path:'/user_announce_show'}"  class="item item-icon-left item-icon-right " style="color:#73bbee; padding-left: 45px;">
      <i class="icon iconfont icon-xiaoxi"></i>
      <h3>我的消息</h3>
    </router-link >
    <router-link :to="{path:'/user_profile'}"  class="item item-icon-left item-icon-right " style="color:#5091ff; padding-left: 45px;">
      <i class="icon iconfont icon-shezhi-tianchong"></i>
      <h3>设置</h3>
    </router-link >
    <router-link :to="{path:'/other'}" class="item item-icon-left item-icon-right " style="color:#18181a; padding-left: 45px;">
      <i class="icon iconfont icon-gengduomore12" ></i>
      <h3>更多</h3>
    </router-link >
   </div>
  </scroller>
</template>

<script>
import { Scroller } from 'vux'
export default {
  components: {
    Scroller
  },
  data() {
    return {
      scrollTop: 0,
      login: false
    }
  },
  methods: {
    onScroll(pos) {
      this.scrollTop = pos.top
    }
  }
}
</script>

<style lang='less' scoped>
.user-signOn_header {
  width: 100%;
  height: 120px;
  background-color: #fff;
  opacity: 0.9;
  padding-top: 15px;
  box-sizing: border-box;
  .signOn_logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  .signIn_btn {
    width: 100%;
    .s_btn {
      display: block;
      color: #333;
      font-size: 14px;
      width: 140px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0 auto;
    }
  }
}

.user-signIn_header {
  position: relative;
  width: 100%;
  height: 120px;
  padding: 15px 0 0;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
  .user-signIn_logoNcikname {
    text-align: center;
    font-size: 16px;
    color: #fff;
    .signIn-img {
      width: 66px;
      border-radius: 50%;
      border: 3px solid #fff;
      margin-left: 17px;
      margin: 0 auto;
      img {
        width: 60px;
        height: 60px;
        vertical-align: middle;
        border-radius: 50%;
      }
    }
  }
  .user-signIn_qiandao {
    position: absolute;
    right: -15px;
    top: 15px;
    height: 30px;
    border-radius: 30px;
    width: 90px;
    background-color: #333;
    line-height: 30px;
    padding-left: 10px;
    box-sizing: border-box;
    > a {
      color: #fff;
      font-size: 14px;
    }
  }
}
.user-signIn_account {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1px;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  margin-bottom: 10px;
  .user-account_blance {
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: center;
    color: #666;
    background-color: #fff;
    &:first-child {
      border-right: 1px solid #ededed;
    }
    span {
      display: block;
      font-size: 14px;
      &:first-child {
        color: #e41436;
        font-size: 20px;
        margin-bottom: -6px;
      }
    }
  }
}
.item {
  background-color: #fff;
  color: #444;
  position: relative;
  z-index: 2;
  display: block;
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid #ededed;
  box-sizing: border-box;
  .icon {
    &::before {
      display: block;
      width: 32px;
      text-align: center;
    }
    font-size: 20px;
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    left: 11px;
  }
  h3 {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }
}
</style>
