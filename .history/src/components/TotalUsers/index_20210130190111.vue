<template>
  <common-card
  title="累计用户数"
  value="1,087,503"
  >
  <template>
    <div id="total-users-chart" :style="{height: '100%', width: '100%' }">
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
          stack: '总量',
          data: [200],
          barWidth: 10
        }, {
          type: 'bar',
          stack: '总量',
          data: [100],
          barWidth: 10
        }],
        grid: {
          top: 0,
          left: 0,
          left: 0,
          bottom: 0
        }
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
