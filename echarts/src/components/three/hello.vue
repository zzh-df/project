<template>
  <div class="hello">
      <div id="hello" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import { rnd,date } from '../../../static/utils.js'

export default {
    name: 'hello',
    data () {
        return {
            title:'日打招呼数',
            color:['#fed942','#ff7010',"#fea317",'#fea317','#fea317','#fea41a','#ff761b',
            '#ffd217','#fffe27','#b9e925','#28d428','#fea41a','#fea115','#fea135'],
            option : {
                color: ['#999'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '6%',
                    right: '6%',
                    top:'2%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : [],
                        boundaryGap:true,
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
                        }
                    }
                ],
                series : [
                    {
                        name:'打招呼数',
                        type:'bar',
                        barWidth: '60%',
                        label: {
                            normal: {
                                show: false,
                                position: ''
                            }
                        },
                        data:[]
                    }
                ]
            }
        }
    },
    components:{ echarts },
    mounted(){
        this.$emit('title',this.title)
        this.setData();
        echarts.init(document.getElementById("hello")).setOption(this.option);
    },
    methods:{
        mockData(){
            // let Random=Mock.Random;
            // Random.email();
            // let data = Mock.mock({
            //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            //     'list|1-10': [{
            //         // 属性 id 是一个自增数，起始值为 1，每次增 1
            //         'id|+1': 1,
            //         time: '@DATETIME("M-dd")',
            //         'times|+1':Random.now('day',"M-dd")
            //     }]
            // })
            // // 输出结果
            // console.log(JSON.stringify(data, null, 4))
        },
        setData(){
            console.log(localStorage.time)
            if(localStorage.time==date(Date.now())){
                this.getDate();
                this.option.series[0].data=JSON.parse(localStorage.hello);
            }else{
                this.option.xAxis[0].data=[];
                for(let i=0; i<14; i++){
                    let seriesDate={
                        name:'Mon',
                        value:rnd(20,120),
                        itemStyle: {
                            emphasis: {
                                barBorderRadius:[20, 20, 1, 1]
                            },
                            normal: {
                                barBorderRadius:[20, 20, 1, 1],
                                color:this.color[i]
                            }
                        }
                    }
                    this.option.series[0].data.push(seriesDate);
                }
                this.getDate();
                localStorage.time=date(Date.now());
                localStorage.hello=JSON.stringify(this.option.series[0].data);
            }
            console.log(this.option.xAxis[0].data.reverse());
        },
        getDate(){
            for(let i=0; i<14; i++){
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
    .hello{
      width:100;
      height:100%;
      box-sizing: border-box;
      padding:6% 15%;
    }
</style>