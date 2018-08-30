<template>
  <trial-item :trialItem= "trialItem"></trial-item>
</template>

<script>
import TrialItem from './trialListItem'
export default {
  components: {
    TrialItem
  },
  props: {
    trialItem: Array
  }
}
</script>

<style>
</style>
