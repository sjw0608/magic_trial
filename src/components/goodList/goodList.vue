<template>
  <div class="good-list">
    <template v-for="goods in goodsList">
      <router-link class="good-item" :key="goods.id" :to="{name:''}">
        <div class="co">
          <div class="a1">
            <img :src="goods.thumb" alt="">
          </div>
          <div class="a2">{{goods.mod_name}}</div>
          <div class="a3">
            <div class="L">限量{{goods.number}}份</div>
            <div class="R">${{goods.goods_price}}</div>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: Array
  }
}
</script>

<style lang="less" scoped>
.good-list {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .good-item {
    width: 50%;
    padding: 0px 5px;
    color: #000;
    text-decoration: none;
    padding-bottom: 20px;
    font-size: 14px;
    display: block;
    box-sizing: border-box;
    .a1 > img {
      width: 100%;
    }
    .a2 {
      text-align: left;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
      padding: 0px 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .a3 {
      padding: 0 4px;
      font-size: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .L {
        margin-left: 0px;
        color: #fff;
        background-color: #e31436;
        border-radius: 4px;
        height: 17px;
        line-height: 18px;
        padding: 0px 4px;
        margin-top: 6px;
      }
      .R {
        margin-top: 4px;
        text-decoration: line-through;
        margin-right: 6%;
        color: #979797;
      }
    }
  }
}
</style>
