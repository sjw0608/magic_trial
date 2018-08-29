<template>
<banner :bannerList ="bannerList"></banner>
</template>

<script>
import Banner from './banner'
export default {
  components: {
    Banner
  },
  props: {
    bannerList: Array
  }
}
</script>

<style>
</style>
