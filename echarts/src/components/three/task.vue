<template>
    <div class="bar">
        <div class="echart">
            <div id="task" style="width:100%;height:100%;"></div>
        </div>
        <section class="directorg">
            <div class="list">
                <span></span>
                <div>
                    <P>执行任务①</P>
                    <P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任务正在执行....</P>
                </div>
            </div>  
            <div class="list">
                <span></span>
                <div>
                    <P>执行任务②</P>
                    <P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任务正在执行....</P>
                </div>
            </div>  
            <div class="list">
                <span></span>
                <div>
                    <P>执行任务③</P>
                    <P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任务正在执行....</P>
                </div>
            </div>  
            <div class="list">
                <span></span>
                <div>
                    <P>执行任务④</P>
                    <P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任务正在执行....</P>
                </div>
            </div>  
        </section>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import { rnd } from '../../../static/utils.js'
import Axios from 'axios'
import mock from '../../../static/mock.js'

export default {
    name: 'task',
    data () {
        return {
            title:'任务执行成功率',
            option : {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/> {d}%"
                },
                legend: {
                    orient: 'vertical',
                    // x: '86%',
                    // y:'30%',
                    // data:['执行任务①','执行任务②','执行任务③','执行任务④'],
                    // textStyle:{
                    //     color:'#eee',
                    //     fontSize:20
                    // }
                },
                series: [
                    {
                        name:'执行任务①',
                        type:'pie',
                        radius: [0, '10%'],
                        animation:false,
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
                                        color:'#4f4f4f'
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
                        name:'任务执行成功率',
                        type:'pie',
                        radius: ['15%', '23%'],
                        // animation:false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                formatter: function (obj) {
                                    return obj.name.title
                                },
                                show: true,
                                position: 'inner',//文字显示位置,如上图中的1.0,1.1字样
                            }
                        },
                        data:[
                            {
                                value:0,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#0f98e7'
                                    }
                                }
                                
                            },
                            {
                                value:1079,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#4f4f4f'
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
                        name:'任务执行成功率',
                        type:'pie',
                        radius: ['25%', '33%'],
                        // animation:false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                formatter: function (obj) {
                                    return obj.name.title
                                },
                                show: true,
                                position: 'inner',//文字显示位置,如上图中的1.0,1.1字样
                            }
                        },
                        data:[
                            {
                                value:0,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#ff6161'
                                    }
                                }
                                
                            },
                            {
                                value:1079,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#4f4f4f'
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
                        name:'任务执行成功率',
                        type:'pie',
                        radius: ['35%', '43%'],
                        // animation:false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                formatter: function (obj) {
                                    return obj.name.title
                                },
                                show: true,
                                position: 'inner',//文字显示位置,如上图中的1.0,1.1字样
                            }
                        },
                        data:[
                            {
                                value:0,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#ffaf48'
                                    }
                                }
                                
                            },
                            {
                                value:1079,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#4f4f4f'
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
                        name:'任务执行成功率',
                        type:'pie',
                        radius: ['45%', '53%'],
                        // animation:false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                formatter: function (obj) {
                                    return obj.name.title
                                },
                                show: true,
                                position: 'inner',//文字显示位置,如上图中的1.0,1.1字样
                            }
                        },
                        data:[
                            {
                                value:0,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#46c16b'
                                    }
                                }
                                
                            },
                            {
                                value:1079,
                                name:'',
                                itemStyle:{
                                    normal:{
                                        color:'#4f4f4f'
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
                        name:'成功率',
                        type:'pie',
                        radius: ['53%', '56%'],
                        // animation:false,
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
                                        color:'#3f3f3f'
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
        this.$emit('title',this.title)
        this.setData();
        echarts.init(document.getElementById("task")).setOption(this.option);
    },
    methods:{
        setData(){
            let setSeries=this.option.series;
            let timer=null;
            setSeries.map((cur)=>{
                if(cur.data[1]){
                    cur.data[0].value=rnd(500,10000);
                    let sum=cur.data[0].value/(cur.data[0].value + cur.data[1].value);
                    // console.log(sum.toFixed(2))
                    cur.data[0].name=Math.floor(parseFloat(sum).toFixed(2)*100)+"%";
                }
            })
            clearInterval(timer)
            timer=setInterval(()=>{
                setSeries.map((cur)=>{
                    if(cur.data[1]){
                        cur.data[0].value=rnd(500,10000);
                        let sum=cur.data[0].value/(cur.data[0].value + cur.data[1].value);
                        cur.data[0].name=Math.floor(parseFloat(sum).toFixed(2)*100)+"%";
                    }
                })
                echarts.init(document.getElementById("task")).setOption(this.option);
            },60000)
        }  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .bar{
        width:90%;
        height:100%;
        display:flex;
        position:relative;
        overflow:hidden;
        .echart{
            width:90%;
            height:100%;
        }
        .directorg{
            width:32%;
            height:100%;
            position:absolute;
            right:0;
            color:#999;
            box-sizing: border-box;
            padding-top:2rem;
            .list{
                min-width:3rem;
                min-height:1.5rem;
                span{
                    float:left;
                    height:.36rem;
                    width:.36rem;
                    border-radius: .05rem;
                }
                div{
                    float:left;
                    width:2.6rem;
                    padding:.1rem;
                    p:nth-child(1){
                        font-size:16px;
                    }
                }
            }
            div:nth-child(1){
                span{
                    background:#0f98e7;
                }
            }
            div:nth-child(2){
                span{
                    background:#ff6161;
                }
            }
            div:nth-child(3){
                span{
                    background:#ffaf48;
                }
            }
            div:nth-child(4){
                span{
                    background:#46c16b;
                }
            }
        }
    }
    
</style>