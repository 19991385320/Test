<template>
  <common-card
    title="累计订单量"
    value="2,157,420"
  >
    <template>
      <div id="total-orders-chart" :style="{ width: '100%', height: '100%'}"/>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>
<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins: [CommonCardMixin],
  mounted () {
    const charDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(charDom)
    chart.setOption({
      xAxis: {},
      yAxis: {},
      series: [{
        type: 'line',
        data: [620, 432, 220, 543, 790, 430, 220, 320, 532, 320, 843, 690, 530, 220, 620]
      }]
    })
  }
}
</script>
