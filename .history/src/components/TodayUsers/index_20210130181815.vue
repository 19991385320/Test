<template>
  <common-card
  title="今日交易用户数"
  value="81,014"
  >
  <template>
    <div id="today-users-chart" :style="{width: '100%', height: '100%' }"></div>
  </template>
  <template v-slot:footer>
    <span>退货率 </span>
    <span class="emphasis">5.14%</span>
  </template>
  </common-card>
</template>
<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins: [CommonCardMixin],
  mounted () {
    this.$nextTick(() => {
      const charDom = document.getElementById('today-users-chart')
      const chart = this.$echarts.init(charDom)
      chart.setOption({
        xAxis: {},
        yAxis: {},
        series: [{
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150]
        }],
        gird: {}
      })
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
