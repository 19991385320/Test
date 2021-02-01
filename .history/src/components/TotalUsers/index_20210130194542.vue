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
          type: 'value',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        }, {
          type: 'bar',
          stack: '总量',
          data: [250],
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          stack: '总量',
          data: [200],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M512 640l170.666667-213.333333H341.333333z',
                  x: -10,
                  y: -25,
                  width: 10,
                  height: 10
                },
                style: {
                  fill: 'red'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M512 426.666667l170.666667 213.333333H341.333333z',
                  x: -5,
                  y: 3,
                  width: 10,
                  height: 10
                },
                style: {
                  fill: 'red'
                }
              }]
            }
          }
        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
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
