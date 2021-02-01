<template>
  <common-card
    title="累计订单量"
    value="2,157,420"
  >
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
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
