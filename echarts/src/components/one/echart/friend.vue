<template>
  <div class="bar">
      <div id="friend" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import { rnd,date } from '../../../../static/utils.js'

export default {
    name: 'friend',
    data () {
        return {
            color:[
                ['#fe5151','#fe0101'],
                ['#ff9751','#ff6600'],
                ['#feb951','#fe9900'],
                ['#ffdc51','#ffcc00'],
                ['#ffff53','#ffff01'],
                ['#c7ee53','#ade601'],
                ['#52dc52','#01cc01']
            ],
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
                            // '6-01', '6-02', '6-03', '6-04', '6-05', '6-06', '6-07'
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
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#eee'
                            }
                        },
                        splitLine:{         //去掉背景线
                            show:false
                        }
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '60%',
                        label: {
                            normal: {
                                show: false,
                                position: ''
                            }
                        },
                        data:[
                            // {
                            //     name:'Mon',
                            //     value:20,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius:[20, 20, 1, 1]
                            //         },
                            //         normal: {
                            //             barBorderRadius:[20, 20, 1, 1],
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 0, 1,
                            //                 [
                            //                     {offset: 0, color: '#fe5151'},
                            //                     {offset: 1, color: '#fe0101'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:30,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius:[20, 20, 1, 1]
                            //         },
                            //         normal: {
                            //             barBorderRadius:[20, 20, 1, 1],
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 0, 1,
                            //                 [
                            //                     {offset: 0, color: '#ff9751'},
                            //                     {offset: 1, color: '#ff6600'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:40,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius:[20, 20, 1, 1]
                            //         },
                            //         normal: {
                            //             barBorderRadius:[20, 20, 1, 1],
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 0, 1,
                            //                 [
                            //                     {offset: 0, color: '#feb951'},
                            //                     {offset: 1, color: '#fe9900'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:50,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius:[20, 20, 1, 1]
                            //         },
                            //         normal: {
                            //             barBorderRadius:[20, 20, 1, 1],
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 0, 1,
                            //                 [
                            //                     {offset: 0, color: '#ffdc51'},
                            //                     {offset: 1, color: '#ffcc00'}
                
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
                            //             barBorderRadius:[20, 20, 1, 1]
                            //         },
                            //         normal: {
                            //             barBorderRadius:[20, 20, 1, 1],
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 0, 1,
                            //                 [
                            //                     {offset: 0, color: '#ffff53'},
                            //                     {offset: 1, color: '#ffff01'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:70,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius:[20, 20, 1, 1]
                            //         },
                            //         normal: {
                            //             barBorderRadius:[20, 20, 1, 1],
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 0, 1,
                            //                 [
                            //                     {offset: 0, color: '#c7ee53'},
                            //                     {offset: 1, color: '#ade601'}
                
                            //                 ]
                            //             )
                            //         }
                            //     }
                            // },
                            // {
                            //     name:'Mon',
                            //     value:80,
                            //     itemStyle: {
                            //         emphasis: {
                            //             barBorderRadius:[20, 20, 1, 1]
                            //         },
                            //         normal: {
                            //             barBorderRadius:[20, 20, 1, 1],
                            //             color: new echarts.graphic.LinearGradient(
                            //                 0, 0, 0, 1,
                            //                 [
                            //                     {offset: 0, color: '#52dc52'},
                            //                     {offset: 1, color: '#01cc01'}
                
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
        this.friendData();
        this.setFriendData();
        echarts.init(document.getElementById("friend")).setOption(this.option);
    },
    props:['friend'],
    methods:{
        friendData(){
            this.friend.map((cur,index)=>{
                let seriesData={
                    name:'Mon',
                    value:cur.value,
                    itemStyle: {
                        emphasis: {
                            barBorderRadius:[20, 20, 1, 1]
                        },
                        normal: {
                            barBorderRadius:[20, 20, 1, 1],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color:this.color[index][0]},
                                    {offset: 1, color:this.color[index][0]}
    
                                ]
                            )
                        }
                    }
                }
                this.option.series[0].data.push(seriesData);
            })
        },
        setFriendData(){
            for(let i=0; i<7; i++){
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
      width:100%;
      height:100%;
    }
</style>