<template>
  <common-card
  title="今日交易用户数"
  value="81,014"
  >
  <template>
    <div class=""></div>
  </template>
  <template v-slot:footer>
    <span>退货率 </span>
    <span class="emphasis">5.14%</span>
  </template>
  </common-card>
</template>
<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins: [CommonCardMixin]
}
</script>
<style lang="scss" scoped>

</style>
