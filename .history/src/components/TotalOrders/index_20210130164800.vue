<template>
  <common-card
    title="累计订单量"
    value="2,157,420"
  >
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">￥ 30,000,000</span>
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
