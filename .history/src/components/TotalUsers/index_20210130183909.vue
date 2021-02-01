<template>
  <common-card
  title="累计用户数"
  value="1,087,503"
  >
  <template v-slot:footer>
    <div class="footer-warpper">
      <div class="footer-left">
        <div>
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
        </div>
        <div class="increase"></div>
      </div>
      <div class="footer-right">
        <div>
          <span>月同比</span>
          <span class="emphasis">35.91%</span>
        </div>
        <div class="decrease"></div>
      </div>
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
    flex-direction: column;
    justify-content: center;
    .footer-left {
      display: flex;
    }
    .footer-right {
      display: flex;
    }
  }
</style>
