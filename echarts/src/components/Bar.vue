<template>
  <div id="bar">
      <div id="Bar" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
import Echart from 'echarts'
import 'echarts/map/js/china'

export default {
  name: 'bar',
  data () {
    return {
        title:'粉丝城市分布数量',
        data:[
            {name: '北京',value: 122 },
            {name: '天津',value: 722 },
            {name: '上海',value: 782 },
            {name: '重庆',value: 622 },
            {name: '河北',value: 222 },
            {name: '河南',value: 82 },
            {name: '云南',value: 122 },
            {name: '辽宁',value: 602 },
            {name: '黑龙江',value: 122 },
            {name: '湖南',value: 222 },
            {name: '安徽',value: 122 },
            {name: '山东',value: 332 },
            {name: '新疆',value: 52 },
            {name: '江苏',value: 422 },
            {name: '浙江',value: 222 },
            {name: '江西',value: 151 },
            {name: '湖北',value: 912 },
            {name: '广西',value: 102 },
            {name: '甘肃',value: 72 },
            {name: '山西',value: 232 },
            {name: '内蒙古',value: 182 },
            {name: '陕西',value: 252 },
            {name: '吉林',value: 122 },
            {name: '福建',value: 622 },
            {name: '贵州',value: 122 },
            {name: '广东',value: 322 },
            {name: '青海',value: 122 },
            {name: '西藏',value: 92 },
            {name: '四川',value: 162 },
            {name: '宁夏',value: 392 },
            {name: '海南',value: 192 },
            {name: '台湾',value: 122 },
            {name: '香港',value: 522 },
            {name: '澳门',value: 122 }
        ],
        option : {
            title : {
                text: '粉丝数量',
                left:'center'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['粉丝数量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            grid: {
                top: 80,
                bottom: 100,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value.replace('\n', '');
                            }
                        }
                    }
                }
            },
            xAxis : [
                {
                    type : 'category',
                    'axisLabel':{'interval':0},
                    data : []
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'粉丝量',
                    type:'bar',
                    barWidth:30,
                    data:[],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        }
    }
  },
  components:{ Echart },
  mounted(){
      this.$emit('title',this.title);
      this.option.xAxis[0].data=this.Data().name;
      this.option.series[0].data=this.Data().val;
      Echart.init(document.getElementById("Bar")).setOption(this.option);
  },
  methods:{
        Data:function(){        //把假数据拆分组合
            let name=[];
            let val=[];
            for(let i=0; i<this.data.length; i++){
                if(i%2==0){
                    name.push(this.data[i].name);
                }else{
                    name.push('\n'+this.data[i].name)
                }
                val.push(this.data[i].value);
            }
            console.log(name);
            return {name,val}
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #bar{
      width:100%;
      height:100%;
    }
</style>