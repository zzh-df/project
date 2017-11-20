<template>
    <div class="mainpage">
        <div class="chose">
            <i class="iconfont icon-sjfx"></i>
            <router-link to="/initOne" :class="{active:activecol=='initOne'}">小号信息</router-link>
            <router-link to="/linereport" :class="{active:activecol=='linereport'}">折线图</router-link>
            <router-link to="/chinaMap" :class="{active:activecol=='chinaMap'}">粉丝区域图</router-link>
            <router-link to="/chinaMaps" :class="{active:activecol=='chinaMaps'}">全国省市热度图</router-link>
            <router-link to="/bar" :class="{active:activecol=='bar'}">柱状图</router-link>
            <router-link to="/task" :class="{active:activecol=='task'}">任务执行成功率</router-link>
            <router-link to="/hello" :class="{active:activecol=='hello'}">日打招呼数</router-link>
            <router-link to="/count" :class="{active:activecol=='count'}">日打招呼数</router-link>
            <router-link to="/helloOk" :class="{active:activecol=='helloOk'}">打招呼数成功率</router-link>
        </div>
        <div class="result">
            <div class="pos">
                <div>{{title}}</div>
            </div>
            <div class="count">
                <router-view @title="getTitle"></router-view>
                <!--<linereport></linereport>-->
                <!--<chinaMap @title="getTitle"></chinaMap>-->
                <!--<chinaMaps @title="getTitle"></chinaMaps>-->
                <!--<bar></bar>-->
                <!--<init-one @title="getTitle"></init-one>-->
                <!--<task @title="getTitle"></task>-->
                <!--<hello @title="getTitle"></hello>-->
                <!--<count @title="getTitle"></count>-->
                <!--<helloOk @title="getTitle"></helloOk>-->
            </div>
        </div>
    </div>
</template>
<script>
    import linereport from './line'    //折线图
    import chinaMap from './map'       //粉丝区域图
    import chinaMaps from './maps'     //全国省市热度图
    import bar from './Bar'            //柱状图
    import initOne from './one/Entrance'//分页页面
    import task from './three/task'    //任务执行成功率
    import hello from './three/hello'    //日打招呼数
    import count from './four/dataCount'    //日打招呼数(折线图)
    import helloOk from './two/helloOk'    //打招呼数成功率
    export default{
        name:'mainpage',
        data(){
            return {
                title:'',
                activecol:'initOne'
            }
        },
        methods:{
            getTitle(val){
                console.log(val);
                this.title=val;
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
            helloOk
        },
        watch:{
            '$route' (to, from) {
                this.activecol = to.name;
            }
        }
    }
</script>
<style lang="scss" scoped>
    *{
    margin:0;
    padding:0;
    }
    html,body{
        height:100%;
        font-size:0.14rem;
    }
    .icon-sjfx{
        font-size:70px;
        color:#ccc;
        position:absolute;
        top:100px;
        left:50%;
        transform: translateX(-50%)
    }
    .mainpage{
        width:100%;
        height:100%;
        display: flex;
        background:#323232;
        .chose{
            position:relative;
            // top:0;
            // left:0;
            // z-index:999;
            width:200px;
            height:100%;
            background:#000;
            border-radius:5px;
            padding-top:200px;
            a{
                color:#fff;
                text-decoration: none;
                display: block;
                text-align: center;
                line-height: 50px;
                &:hover{
                    background: #464646;
                }
                &.active{
                    color:#20a0ff;
                }
            }
        }
        .result{
            flex:1;
            height: 100%;
        }
        .pos{
            width:100%;
            height:14%;
            padding-top:2.2%;
            box-sizing: border-box;
        }
        .pos div{
            width:100%;
            height:.7rem;
            background:url(../assets/head.png) no-repeat;
            font-size:.3rem;
            text-align:center;
            line-height:.7rem;
            background-size:100%;
        }
        .count{
            width:100%;
            height:86%;
        }
    }
</style>
