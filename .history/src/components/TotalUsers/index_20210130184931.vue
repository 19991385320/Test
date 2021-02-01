<template>
  <common-card
  title="累计用户数"
  value="1,087,503"
  >
  <template v-slot:footer>
    <div class="footer-warpper">
      <span>日同比</span>
      <span class="emphasis">8.73%</span>
      <div class="increase"></div>
      <span class="month">月同比</span>
      <span class="emphasis">35.91%</span>
      <div class="decrease"></div>
    </div>
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
  .footer-warpper {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
</style>
