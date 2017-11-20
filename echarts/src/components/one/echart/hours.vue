<template>
  <div class="bar">
      <div id="hours" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'

export default {
    name: 'hours',
    data () {
        return {
            color:['#87ab66','#d9824d','#eba538','#a6a538','#87ab66','#87abad','#4bb3d2'
            ,'#69c7ff','#87abad','#eba538','#a6a538','#d94d4d'],
            option : {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left'
                },
                series: [
                    {
                        name:'点赞人数',
                        type:'pie',
                        // selectedMode: 'single',      //  点击偏移
                        radius: [0, '20%'],
                        animation:false,            //   禁止放大
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        
                        data:[
                            {
                                value:1,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#999'
                                    }
                                },
                                tooltip:{       //  消失提示框（透明）
                                    backgroundColor:'transparent',
                                    textStyle:{
                                        color:'transparent'
                                    }
                                },
                            }
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['35%', '62%'],
                        data:[
                            // {value:550, name:'00:00-02:00'},
                            // {value:335, name:'02:00-04:00'},
                            // {value:68, name:'04:00-06:00'},
                            // {value:82, name:'06:00-08:00'},
                            // {value:135, name:'08:00-10:00'},
                            // {value:335, name:'10:00-12:00'},
                            // {value:346, name:'12:00-14:00'},
                            // {value:335, name:'14:00-16:00'},
                            // {value:487, name:'16:00-18:00'},
                            // {value:628, name:'18:00-20:00'},
                            // {value:500, name:'20:00-22:00'},
                            // {value:820, name:'22:00-24:00'}
                        ]
                    }
                ]
            }
        }
    },
    components:{ echarts },
    mounted(){
        this.setHours();
        echarts.init(document.getElementById("hours")).setOption(this.option);
    },
    props:['hours'],
    methods:{
        setHours(){
            this.hours.map((cur,index)=>{
                let seriesData={
                    value:0,
                    name:'00:00-02:00',
                    itemStyle:{
                        normal:{
                            color:this.color[index]
                        }
                    },
                    label:{
                        normal:{
                            textStyle:{
                                color:'#eee'
                            }
                        }
                    },
                    labelLine:{
                        normal:{
                            lineStyle:{
                                color:'#eee'
                            }
                        }
                    }
                }
                seriesData.value=cur.value;
                seriesData.name=cur.name;
                this.option.series[1].data.push(seriesData);
            })
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