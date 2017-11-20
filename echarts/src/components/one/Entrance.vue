<template>
    <div id="map">
        <span id="back" v-if="bsign==1" @click="back" ></span>
        <section v-if="bsign==0">
            <div class="list" v-for="item in activedata">
                <div @click="switchVue(item)">
                    <!--<img src="../../assets/sublogo.png">-->
                    <!--<img src="../../assets/1.jpg">-->
                    <img :src="item.url">
                    <span></span>
                    <p>{{item.title}}</p>
                    <p>编号：{{item.id}}</p>
                </div>
                <div @click="switchVue(item)">{{item.desc}}</div>
                <span>+</span>
            </div>
        </section>
        <page :allpage="data" v-if="bsign==0" @change="changes"></page>
        <detail v-if="bsign==1" :countData="childData"></detail>
    </div>
</template>

<script>    
import page from './page'
import detail from './details'
import Axios from 'axios'
import {date} from '../../../static/utils.js'
import mock from '../../../static/mock.js'

export default {
    name: 'entrance',
    data () {
        return {
            title:'小号信息',
            pagesize:10,
            data:0,
            bsign:0,
            activedata:[],
            childData:{},
            listdata:[
                // {},{},{},{},{},{},{},{},
                // {},{},{},{},{},{},{},{}
            ]
        }
    },
    components:{ page,detail },
    methods:{
        switchVue(item){
            this.bsign=1;
            this.$emit('title','小号运行情况');
            this.childData=item;
        },
        back(){
            this.bsign=0
            this.$emit('title','小号信息');
        },
        pageing(val){
            this.activedata=this.listdata.slice((val-1)*10,10*val);
            this.data=Math.ceil(this.listdata.length/this.pagesize);
        },
        changes(val){
            this.pageing(val)
        },
        setStorage(){
            // console.log(localStorage.day)
            if(localStorage.day!==date(Date.now())){
                Axios.get('mockjs').then((res)=>{
                    res.data.echartDate.map((cur)=>{
                        this.listdata.push(cur);
                    })
                    let obj=this.listdata;
                    let str = JSON.stringify(obj); 
                    localStorage.obj = str;
                    // console.log(this.listdata)
                    this.pageing(1);
                })
                localStorage.day=date(Date.now());
            }else{
                this.listdata=JSON.parse(localStorage.obj);
                this.pageing(1);
                // console.log(this.listdata)
            }
            // console.log(this.listdata)
        }
    },
    mounted(){
        this.setStorage();
        this.$emit('title',this.title);

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

    #map{
        width:100%;
        height:100%;
        overflow:hidden;
            #back{
                position:absolute;
                width:.5rem;
                height:.5rem;
                background:url(../../assets/back.png);
                background-size:100%;
                top:2.2%;
                left:2.3rem;
                cursor: pointer;
            }
            section{
                // width:18rem;
                margin:0 auto;
                display:flex;
                box-sizing:border;
                padding-top:.2rem;
                flex-wrap: wrap;
                .list{
                    width:2.4rem;
                    height:2.6rem;
                    background:#eee;
                    margin: 0 .5rem .5rem;
                    border-radius:.06rem;
                    overflow:hidden;
                    div:nth-child(1){
                        width:100%;
                        height:80%;
                        background:#72cf98;
                        box-sizing: border-box;
                        padding:.06rem;
                        text-align:center;
                        cursor: pointer;
                        img{
                            width:1.2rem;
                            display:block;
                            border:.03rem solid #fff;
                            border-radius: 50%;
                            margin:0.1rem auto;
                        }
                        span{
                            display:block;
                            width:.8rem;
                            height:.01rem;
                            background:#fff;
                            margin:0.05rem auto;
                        }
                        p{
                            color:#fff;
                        }
                    }
                    div:nth-child(2){
                        width:100%;
                        height:20%;
                        text-align:center;
                        line-height:.5rem;;
                    }
                }
                .lists{
                    width:2.6rem;
                    height:2.6rem;
                    text-align:center;
                    line-height:2.6rem;
                    font-size:1.2rem;
                    color:#707070;
                    border:1px dotted #b7b7b7;
                    margin: 0 .5rem .5rem;
                    border-radius:.06rem;
                }
            }
    }
</style>
