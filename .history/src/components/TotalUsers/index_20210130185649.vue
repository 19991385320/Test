<template>
  <common-card
  title="累计用户数"
  value="1,087,503"
  >
  <template>
    <div id="total-users-chart">
    </div>
  </template>
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
  mixins: [CommonCardMixin],
  mounted () {
    this.$nextTick(() => {
      const chartDom = document.getElementById('total-users-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category'
        },
        series: [{
          type: 'bar',
          data: [200]
        }],
        grid: {}
      })
    })
  }
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
