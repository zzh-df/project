<template>
  <div id="app">
    <!--<div class="pos">
      <div>{{title}}</div>
    </div>
    <div class="count">
      <linereport></linereport>-->
      <!--<chinaMap @title="getTitle"></chinaMap>-->
      <!--<chinaMaps @title="getTitle"></chinaMaps>-->
      <!--<bar></bar>-->
      <!--<init-one @title="getTitle"></init-one>-->
      <!--<task @title="getTitle"></task>-->
      <!--<hello @title="getTitle"></hello>-->
      <!--<count @title="getTitle"></count>-->
      <!--<helloOk @title="getTitle"></helloOk>-->
    <!--</div>-->
    <mainpage></mainpage>
  </div>
</template>

<script>
import linereport from './components/line'    //折线图
import chinaMap from './components/map'       //粉丝区域图
import chinaMaps from './components/maps'     //全国省市热度图
import bar from './components/Bar'            //柱状图
import initOne from './components/one/Entrance'//分页页面
import task from './components/three/task'    //任务执行成功率
import hello from './components/three/hello'    //日打招呼数
import count from './components/four/dataCount'    //日打招呼数(折线图)
import helloOk from './components/two/helloOk'    //打招呼数成功率
import mainpage from './components/main'
export default {
    name: 'app',
    data(){
        return {
          title:''
        }
    },
    components:{ 
      linereport,
      chinaMap,
      chinaMaps,
      bar,
      initOne,
      task,
      hello,
      count,
      helloOk,
      mainpage
     },
    methods:{
        getTitle(val){
            console.log(val);
            this.title=val;
        }

    }
}
</script>

<style lang='scss'>
*{
    margin:0;
    padding:0;
}
html,body{
    height:100%;
    font-size:0.14rem;
}
#app{
  width:100%;
  height:100%;
  background:#323232;
  // .pos{
  //   width:100%;
  //   height:14%;
  //   padding-top:2.2%;
  //   box-sizing: border-box;
  //   div{
  //     width:100%;
  //     height:.7rem;
  //     background:url(./assets/head.png) no-repeat;
  //     font-size:.36rem;
  //     text-align:center;
  //     line-height:.7rem;
  //     background-size:100%;
  //   }
  // }
  // .count{
  //   width:100%;
  //   height:86%;
  // }
}
    
</style>
