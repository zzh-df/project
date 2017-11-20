<template>
  <div class="bar">
      <div id="praise" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import { rnd,date } from '../../../../static/utils.js'

export default {
    name: 'praise',
    data () {
        return {
            option:{
                tooltip: {
                    trigger: 'axis'
                },
                legend:{
                    data:['粉丝数量'],
                    textStyle:{
                        color:"#eee"
                    },
                    top:0,
                    // selectedMode:"single"       // 点击消失一组 数据
                },
                xAxis:  {
                    type: 'category',
                    'axisLabel':{'interval':0},
                    gridIndex:0,
                    boundaryGap: true,
                    data: [
                        // '6-01','6-02','6-03','6-04','6-05','6-06','6-07','6-08','6-09'
                        ],
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
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#999'       //  改变轴颜色
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel:{
                        formatter:'{value}',
                        showMinLabel:false,
                        show: true,
                        textStyle: {
                            color: '#eee'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#999'       //  改变轴颜色
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    nameTextStyle:{
                        color:'red'
                    },
                    splitLine:{         //去掉背景线
                        show:false
                    }
                },
                series: [
                    {
                        name:'粉丝数量',
                        type:'line',
                        data:[],
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
    components:{ echarts },
    mounted(){
        this.praiseData();
        this.setPraiseData()
        echarts.init(document.getElementById("praise")).setOption(this.option);
    },
    props:['praise'],
    methods:{
        praiseData(){
            this.praise.map((cur)=>{
                this.option.series[0].data.push(cur.value);
            })
        },
        setPraiseData(){
            for(let i=0; i<9; i++){
                if(date(Date.now()-86400000*i).substring(5,6)=="0"){
                    this.option.xAxis.data.push(date(Date.now()-86400000*i).substring(6));
                }else{
                    this.option.xAxis.data.push(date(Date.now()-86400000*i).substring(5));
                }
            }
            console.log(this.option.xAxis.data);
        }      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bar{
      width:80%;
      height:100%;
    }
</style>