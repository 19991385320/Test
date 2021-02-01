<template>
  <common-card
  title="累计销售额"
  value="￥ 2333"
  >
  <template>
    <div class="compare">

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
    height: 100%;
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
