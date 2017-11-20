<template>
  <div class="count">
      <div id="count" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import { rnd,date } from '../../../static/utils.js'

export default {
    name: 'count',
    data () {
        return {
            title:'系统任务总览',
            option : {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['打招呼通过率','任务执行通过率','打招呼成功数量'],
                    textStyle:{
                        color:'#eee',
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    axisLine:{
                        lineStyle:{
                            color:'#999'       //  改变轴颜色
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#999'       //  改变轴颜色
                        }
                    },
                    splitLine:{         //去掉背景线
                        show:false
                    }
                },
                series: [
                    {
                        name:'打招呼通过率',
                        type:'line',
                        stack: '总量',
                        data:[]
                    },
                    {
                        name:'任务执行通过率',
                        type:'line',
                        stack: '总量',
                        data:[]
                    },
                    {
                        name:'打招呼成功数量',
                        type:'line',
                        stack: '总量',
                        data:[]
                    }
                ]
            }                          
        }
    },
    components:{ echarts },
    mounted(){
        this.$emit('title',this.title);
        this.dataLine();
        echarts.init(document.getElementById("count")).setOption(this.option);
    },
    methods:{
        dataLine(){
            console.log(localStorage.count)
            for(let i=0; i<7; i++){
                if(date(Date.now()-86400000*i).substring(5,6)=="0"){
                    this.option.xAxis.data.push(date(Date.now()-86400000*i).substring(6));
                }else{
                    this.option.xAxis.data.push(date(Date.now()-86400000*i).substring(5));
                }
            }
            if(localStorage.count==date(Date.now())){
                this.option.series=JSON.parse(localStorage.dataCount);
            }else{
                this.option.series[0].data=[];
                this.option.series[1].data=[];
                this.option.series[2].data=[];
                for(let i=0; i<7; i++){
                    this.option.series[0].data.push(rnd(90,300))
                    this.option.series[1].data.push(rnd(90,300))
                    this.option.series[2].data.push(rnd(90,300))
                }
                localStorage.count=date(Date.now());
                localStorage.dataCount=JSON.stringify(this.option.series);
            }
            // let timer=null;
            // clearInterval(timer);
            // timer=setInterval(()=>{
            //     this.option.series[0].data=[];
            //     this.option.series[1].data=[];
            //     this.option.series[2].data=[];
            //     for(let i=0; i<10; i++){
            //         this.option.series[0].data.push(rnd(90,300))
            //         this.option.series[1].data.push(rnd(90,300))
            //         this.option.series[2].data.push(rnd(90,300))
            //     }
            //     echarts.init(document.getElementById("count")).setOption(this.option);
            // },3000)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .count{
      width:100;
      height:100%;
      box-sizing: border-box;
    }
</style>