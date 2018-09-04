<template>
  <div>
    <router-link :to="{path:'/user_profile/nickname'}" class="setting_item">
      我的昵称
      <i class="item-note">柒玥</i>
      <i class="icon iconfont icon-you-copy"></i>
    </router-link >
    <router-link :to="{path:'/user_profile/email'}" class="setting_item">
      我的邮箱
      <i class="item-note">123456789@qq.com</i>
      <i class="icon iconfont icon-you-copy"></i>
    </router-link >
    <router-link :to="{path:'/user_profile/amazon'}" class="setting_item">
      亚马逊账号
      <i class="icon iconfont icon-you-copy"></i>
    </router-link >
    <router-link :to="{path:'/user_profile/ard'}" class="setting_item">
      实名认证
      <i class="item-note">已认证</i>
      <i class="icon iconfont icon-you-copy"></i>
    </router-link >
    <router-link :to="{path:'/user_profile/password'}" class="setting_item">
      修改密码
      <i class="icon iconfont icon-you-copy"></i>
    </router-link >
    <div class="sign_out">
      <x-button plain>退出登录</x-button>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  }
}
</script>

<style lang='less'>
.setting_item {
  background-color: #fff;
  color: #444;
  position: relative;
  z-index: 2;
  display: block;
  padding: 16px 30px;
  font-size: 16px;
  border-bottom: 1px solid #dedede;
  .item-note {
    float: right;
    color: #aaa;
    font-size: 14px;
    margin-right: 18px;
  }
  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    height: 100%;
    right: 10px;
    font-size: 18px;
    color: #666;
  }
}
.sign_out {
  padding: 30px;
}
</style>
