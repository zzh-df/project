<template>
    <div id="map">
        <div id="map" style="width:100%;height:100%;"></div>
    </div>
</template>

<script>
import Echart from 'echarts'
import 'echarts/map/js/china'

export default {
  name: 'map',
  data () {
    return {
        title:'粉丝省级分布图',
        option:{
            title:{
                text:'全国粉丝区域图',
                left:'center'
            },
            tooltip:{
                trigger:'item'
            },
            visualMap:{
                min: 0,
                max: 30000,
                color:['#45C9F4','#fff'],
                align:'left',
                inverse:false,
                // orient:'horizontal',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                textStyle:{
                    color:'#fff'
                }
            },
            
            series:[
                {
                    name: '客户数',
                    type: 'map',
                    mapType: 'china',
                    selectedMode : 'single',
                    showLegendSymbol:false,
                    // itemStyle:{
                    //     normal:{label:{show:false}},
                    //     emphasis:{label:{show:false}}
                    // },
                    itemStyle:{
                        emphasis:{
                            areaColor:''
                        }
                    },
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: 28600 },
                        {name: '天津',value: 17022 },
                        {name: '上海',value: 28022 },
                        {name: '重庆',value: 16022 },
                        {name: '河北',value: 19022 },
                        {name: '河南',value: 15082 },
                        {name: '云南',value: 20222 },
                        {name: '辽宁',value: 17022 },
                        {name: '黑龙江',value: 12022 },
                        {name: '湖南',value: 27052 },
                        {name: '安徽',value: 21072 },
                        {name: '山东',value: 19032 },
                        {name: '新疆',value: 9052 },
                        {name: '江苏',value: 25022 },
                        {name: '浙江',value: 23022 },
                        {name: '江西',value: 19051 },
                        {name: '湖北',value: 23082 },
                        {name: '广西',value: 14002 },
                        {name: '甘肃',value: 12072 },
                        {name: '山西',value: 18022 },
                        {name: '内蒙古',value: 12022 },
                        {name: '陕西',value: 14022 },
                        {name: '吉林',value: 21022 },
                        {name: '福建',value: 23022 },
                        {name: '贵州',value: 16022 },
                        {name: '广东',value: 26022 },
                        {name: '青海',value: 17082 },
                        {name: '西藏',value: 6012 },
                        {name: '四川',value: 19062 },
                        {name: '宁夏',value: 11022 },
                        {name: '海南',value: 19022 },
                        {name: '台湾',value: 21022 },
                        {name: '香港',value: 16022 },
                        {name: '澳门',value: 19022 }
                    ]
                }
            ]  
        }
    }
  },
  components:{ Echart },
  mounted(){
      this.$emit('title',this.title)
      Echart.init(document.getElementById("map")).setOption(this.option);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #map{
      width:100%;
      height:100%;
    }
</style>
