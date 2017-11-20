<template>
  <div class="bar">
      <div id="helloOk" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'

export default {
  name: 'helloOk',
  data () {
    return {
        title:"打招呼数成功率",
        // color:['#ccc','#9ff','#c9f','#666','#0f9','#99f','pink','#6cf','#cc9','#0f9','#399','#99c'],
        color:['#87ab66','#d9824d','#eba538','#a6a538','#87ab66','#87abad','#4bb3d2','#69c7ff','#87abad','#eba538','#a6a538',,'#d94d4d'],
        value:[
            {value:550, name:'00:00-02:00'},
            {value:335, name:'02:00-04:00'},
            {value:68, name:'04:00-06:00'},
            {value:82, name:'06:00-08:00'},
            {value:135, name:'08:00-10:00'},
            {value:335, name:'10:00-12:00'},
            {value:346, name:'12:00-14:00'},
            {value:335, name:'14:00-16:00'},
            {value:487, name:'16:00-18:00'},
            {value:628, name:'18:00-20:00'},
            {value:800, name:'20:00-22:00'},
            {value:880, name:'22:00-24:00'}
        ],
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
                    radius: [0, 0],
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
                            name:'24\n小时',
                            itemStyle:{
                                normal:{
                                    color:'#000'
                                }
                            },
                            tooltip:{       //  消失提示框（透明）
                                backgroundColor:'transparent',
                                textStyle:{
                                    color:'transparent'
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside',//文字显示位置,如上图中的1.0,1.1字样
                                    textStyle:{
                                        color:'#5b5b5b',
                                        fontSize:40
                                    },
                                }
                            },
                        }
                    ]
                },
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
                                    color:'#eee'
                                }
                            },
                            tooltip:{       //  消失提示框（透明）
                                backgroundColor:'transparent',
                                textStyle:{
                                    color:'transparent'
                                }
                            }
                        }
                    ]
                },
                {
                    name:'打招呼成功率',
                    type:'pie',
                    selectedMode: 'single',
                    radius: ['20%', '72%'],
                    data:[]
                },
                {
                    name:'点赞人数',
                    type:'pie',
                    // selectedMode: 'single',      //  点击偏移
                    radius: ['20%', '30%'],
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
                    itemStyle:{
                        normal:{
                            color:'#ccc'
                        }
                    },
                    data:[
                        {
                            value:1,
                            name:'',
                            itemStyle:{
                                normal:{
                                    color:'rgba(255,255,255,.1)'
                                }
                            },
                            tooltip:{       //  消失提示框（透明）
                                backgroundColor:'transparent',
                                textStyle:{
                                    color:'transparent'
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
  },
  components:{ echarts },
  mounted(){
      this.$emit('title',this.title);
      this.tabColor();
  },
  methods:{
        tabColor(){
            this.value.map((cur,index)=>{
                let dataSeries={
                    value:0, name:'',
                    itemStyle:{
                        normal:{
                            color:'blue'
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
                // console.log(cur.name+"的"+cur.value)
                dataSeries.name=cur.name;
                dataSeries.value=cur.value;
                dataSeries.itemStyle.normal.color=this.color[index];
                this.option.series[2].data.push(dataSeries)
                
            })
            echarts.init(document.getElementById("helloOk")).setOption(this.option);
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