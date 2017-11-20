<template>
  <div class="bar">
      <div id="Bar" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import { rnd,date } from '../../../../static/utils.js'

export default {
    name: 'bar',
    data () {
        return {
            color:['#d94d4d','#d9824d','#eba538','#a6a538','#87ab66','#87abad','#4bb3d2','#69c7ff'],
            option : {
                color: ['#999'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    top:'2%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : [
                            // '6-01', '6-02', '6-03', '6-04', '6-05', '6-06', '6-07', '6-08'
                            ],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#eee'
                            }
                        },
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:{
                            show:false
                        }
                    }
                ],
                series : [
                    {
                        name:'粉丝活跃度',
                        type:'bar',
                        barWidth: '60%',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideTop'
                            }
                        },
                        data:[
                            // {
                            //     name:'Mon',
                            //     value:15,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color:'#d94d4d'
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:20,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 1, 0,
                            //                 [
                            //                     {offset: 0, color: '#d9824d'},
                            //                     {offset: 1, color: '#d9824d'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:25,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 1, 0,
                            //                 [
                            //                     {offset: 0, color: '#eba538'},
                            //                     {offset: 1, color: '#eba538'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:35,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 1, 0,
                            //                 [
                            //                     {offset: 0, color: '#a6a538'},
                            //                     {offset: 1, color: '#a6a538'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:49,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 1, 0,
                            //                 [
                            //                     {offset: 0, color: '#87ab66'},
                            //                     {offset: 1, color: '#87ab66'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:60,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 1, 0,
                            //                 [
                            //                     {offset: 0, color: '#87abad'},
                            //                     {offset: 1, color: '#87abad'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:77,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 1, 0,
                            //                 [
                            //                     {offset: 0, color: '#4bb3d2'},
                            //                     {offset: 1, color: '#4bb3d2'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:100,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius: 50
                            //         },
                            //         normal: {
                            //             barBorderRadius: 50,
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 1, 0,
                            //                 [
                            //                     {offset: 0, color: '#69c7ff'},
                            //                     {offset: 1, color: '#69c7ff'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // }
                        ]
                    }
                ]
            }
        }
    },
    components:{ echarts },
    mounted(){
        this.fensData();
        this.setFensListData();
        echarts.init(document.getElementById("Bar")).setOption(this.option);
    },
    props:['fens'],
    methods:{
        fensData(){
            this.fens.map((cur,index)=>{
                let seriesData={
                    name:'Mon',
                    value:15,
                    itemStyle: {
                        emphasis: {
                            barBorderRadius: 50
                        },
                        normal: {
                            barBorderRadius: 50,
                            color:'#d94d4d'
                        }
                    }
                }
                seriesData.value=cur.value;
                seriesData.itemStyle.normal.color=this.color[index];
                this.option.series[0].data.push(seriesData)
            })
        },
        setFensListData(){
            for(let i=0; i<8; i++){
                if(date(Date.now()-86400000*i).substring(5,6)=="0"){
                    this.option.xAxis[0].data.push(date(Date.now()-86400000*i).substring(6));
                }else{
                    this.option.xAxis[0].data.push(date(Date.now()-86400000*i).substring(5));
                }
            }
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