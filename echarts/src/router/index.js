import Vue from 'vue'
import Router from 'vue-router'
import linereport from '../components/line'    //折线图
import chinaMap from '../components/map'       //粉丝区域图
import chinaMaps from '../components/maps'     //全国省市热度图
import bar from '../components/Bar'            //柱状图
import initOne from '../components/one/Entrance'//分页页面
import task from '../components/three/task'    //任务执行成功率
import hello from '../components/three/hello'    //日打招呼数
import count from '../components/four/dataCount'    //日打招呼数(折线图)
import helloOk from '../components/two/helloOk'    //打招呼数成功率

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'initOne',
      component: initOne
    },
    {
      path: '/linereport',
      name: 'linereport',
      component: linereport
    },
    {
      path: '/chinaMap',
      name: 'chinaMap',
      component: chinaMap
    },
    {
      path: '/chinaMaps',
      name: 'chinaMaps',
      component: chinaMaps
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
    {
      path: '/initOne',
      name: 'initOne',
      component: initOne
    },
    {
      path: '/task',
      name: 'task',
      component: task
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/helloOk',
      name: 'helloOk',
      component: helloOk
    },
  ]
})
