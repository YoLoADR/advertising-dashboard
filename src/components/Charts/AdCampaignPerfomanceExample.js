// Sales Widget
import { Bar, Line } from 'vue-chartjs'
import { ChartConfig } from "Constants/chart-config";

export default ({
   extends: Bar,
   Line,
   props: ['data'],
   data: function () {
      return {
         options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
               yAxes: [{
                  ticks: {
                     display: false,
                     max: 80
                  },
                  gridLines: {
                     display: false,
                     drawBorder: false
                  }
               }],
               xAxes: [{
                  ticks: {
                     padding: 10
                  },
                  barPercentage: 1.1,
                  categoryPercentage: 0.4,
                  gridLines: {
                     display: false,
                     drawBorder: false
                  }
               }]
            },
            legend: {
               display: false
            }
         }
      }
   },
   mounted() {
      const { labels, conversions, impressions, clicks } = this.data;
      if (this.enableShadow !== false) {
         let ctx = this.$refs.canvas.getContext('2d')
         let _stroke = ctx.stroke
         ctx.stroke = function () {
            ctx.save()
            ctx.shadowColor = ChartConfig.shadowColor
            ctx.shadowBlur = 10
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 12
            _stroke.apply(this, arguments)
            ctx.restore()
         }
      }

      this.renderChart({
         labels,
         datasets: [
            {
               type: 'line',
               label: conversions.label,
               borderColor: conversions.color,
               pointBackgroundColor: ChartConfig.color.white,
               spanGaps: false,
               lineTension: 0,
               fill: false,
               cubicInterpolationMode: 'monotone',
               pointBorderWidth: 2,
               pointRadius: 6,
               pointBorderColor: conversions.color,
               data: conversions.data
            },
            {
               type: 'bar',
               label: impressions.label,
               backgroundColor: impressions.color,
               hoverBackgroundColor: impressions.color,
               borderWidth: 0,
               data: impressions.data
            },
            {
               type: 'bar',
               label: clicks.label,
               backgroundColor: clicks.color,
               hoverBackgroundColor: clicks.color,
               borderWidth: 0,
               data: clicks.data
            },
         ]
      }, this.options)
   }
})
