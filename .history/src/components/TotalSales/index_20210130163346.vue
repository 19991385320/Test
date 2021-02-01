<template>
  <common-card
  title="累计销售额"
  value="￥ 2333"
  >
  <template>
    <div class="compare-warpper">
      <div class="compare">
        <span>日同比</span>
        <span class="emphasis">7.33%</span>
        <div class="increase"></div>
      </div>
      <div class="compare">
        <span>月同比</span>
        <span class="emphasis">7.33%</span>
        <div class="decrease"></div>
      </div>
    </div>
  </template>
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
  .compare-warpper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      .increase {
        width: 0;
        height: 0;
        border-width: 3px;
        border-color: transparent transparent red transparent;
        border-style: solid;
      }
      .decrease {
        width: 0;
        height: 0;
        border-width: 3px;
        border-color:green transparent transparent transparent;
        border-style: solid;
      }
    }
  }
  .span {
    font-size: 12px;
  }
</style>
