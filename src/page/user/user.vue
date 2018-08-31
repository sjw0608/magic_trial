<template>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false
    }
  }
}
</script>

<style lang='less' scoper>
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
</style>
