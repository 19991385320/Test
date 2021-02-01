<template>
  <common-card
  title="今日交易用户数"
  value="300,000"
  >
  <template v-slot="footer">
    <span>今日交易</span>
    <span class="emphasis">3000</span>
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
