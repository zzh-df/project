<template>
  <div id="line">
      <div id="report" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import Echart from 'echarts'

export default {
  name: 'linereport',
  data () {
    return {
      title:'粉丝数量',
      option:{
            title: {
                text: '趋势图',
                left:'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['粉丝数量'],
                selected:{

                },
                bottom:0,
                selectedMode:"single"
            },
            xAxis:  {
                type: 'category',
                'axisLabel':{'interval':0},
                gridIndex:0,
                boundaryGap: true,
                data: ['6-01','6-02','6-03','6-04','6-05','6-06','6-07','6-08','6-09','6-10','6-11','6-12','6-13','6-14','6-15','6-16','6-17','6-18','6-19','6-20','6-21'],
                scale:"true",
                axisLabel:{
                    showMinLabel:true,
                    show: true,
                    textStyle: {
                        color: '#eee'
                    }
                },
                axisTick:{
                    alignWithLabel:true
                }
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    formatter:'{value}',
                    showMinLabel:false
                },
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                }
            },
            series: [
                  {
                    name:'粉丝数量',
                    type:'line',
                    data:[100,222,324,144,222,512,602,422,700,662,222,666,122,89,544,322,152,602,522,700,662],
                    lineStyle:{
                        normal:{
                            color:'#0066FF'
                        }
                    },
                    itemStyle:{
                        normal:{
                            color:'#0066FF'
                        }
                    },
                    symbol:'circle',
                    symbolSize:6
                }
            ]
      }
    }
  },
  components:{ Echart },
  mounted(){
      this.$emit('title',this.title)
      Echart.init(document.getElementById("report")).setOption(this.option);
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #line{
      width:100%;
      height:100%;
    }
</style>
