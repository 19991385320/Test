<template>
  <common-card
  title="累计销售额"
  value="￥ 2333"
  >
  <template v-slot:footer>
    <span>昨日销售额</span>
    <span>￥ 30,000,000</span>
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
