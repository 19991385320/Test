<template>
  <common-card
  title="累计销售额"
  value="￥ 2333"
  >
  <template>
    <div class="compare">
      <span>日同比</span>
      <span>7.33%</span>
    </div>
    <div class="compare">
      <span>月同比</span>
      <span>7.33%</span>
    </div>
  </template>
  <template v-slot:footer>
    <span>昨日销售额 </span>
    <span class="money">￥ 30,000,000</span>
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
  .compare {
    background: yellow;
    font-size: 12px;
    margin-top: 3px;
  }
  .span {
    font-size: 12px;
  }
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }

</style>
