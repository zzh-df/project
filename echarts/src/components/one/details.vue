<template>
    <div id="details">
        <div class="subDetail">
            <div class="list">
                <div>
                    <img :src="countData.url">
                    <p>{{countData.title}}</p>
                    <p>编号：{{countData.id}}</p>
                </div>
            </div>
        </div>
        <section>
            <div class="Echart">
                <h3>粉丝活跃度</h3>
                <div>
                    <fens :fens="countData.data.fens"></fens>
                </div>
            </div>
            <div class="Echart">
                <h3>朋友圈回复数</h3>
                <div>
                    <friend :friend="countData.data.friend"></friend>
                </div>
            </div>
            <div class="Echart">
                <h3>24小时点赞人数百分比</h3>
                <div>
                    <hours :hours="countData.data.yestersay"></hours>
                </div>
            </div>
            <div class="Echart">
                <h3>小号日点赞数量</h3>
                <div>
                    <praise :praise="countData.data.liked"></praise>
                </div>
            </div>
        </section>
    </div>
</template>

<script>    
    import Echart from 'echarts'
    import 'echarts/map/js/china'
    import fens from './echart/fensList'
    import friend from './echart/friend'
    import hours from './echart/hours'
    import praise from './echart/praise'

    export default {
        name: 'details',
        data () {
            return {
                title:'小号运行情况'
            }
        },
        props:['countData'],
        components:{ fens,friend,hours,praise },
        mounted(){
            this.$emit('title',this.title)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    #details{
        width:100%;
        height:100%;
        display:flex;
            .subDetail{
                width:20%;
                height:100%;
                .list{
                    width:2.6rem;
                    height:2.6rem;
                    margin: 0 .5rem .5rem;
                    border-radius:.06rem;
                    overflow:hidden;
                    div:nth-child(1){
                        width:100%;
                        height:80%;
                        box-sizing: border-box;
                        padding:.06rem;
                        text-align:center;
                        img{
                            width:1.2rem;
                            display:block;
                            border:.03rem solid #fff;
                            border-radius: 50%;
                            margin:0.1rem auto;
                        }
                        p{
                            color:#fff;
                        }
                    }
                }
            }
            section{
                width:80%;
                height:100%;
                display: flex;
                flex-wrap: wrap;
                .Echart{
                    width:50%;
                    height:50%;
                    padding-top:.25rem;
                    h3{
                        width:2rem;
                        height:.4rem;
                        padding-left:.5rem;
                        color:#999;
                        background:#3e3e3d url(../../assets/icon-1.png) no-repeat;
                        background-size:20%;
                        border-radius: .2rem;
                        line-height:.4rem;
                        margin-bottom:.1rem;
                    }
                    div{
                        width:80%;
                        height:90%;
                    }
                }
                div:nth-child(2){
                    h3{
                        background:#3e3e3d url(../../assets/icon-2.png) no-repeat;
                        background-size:20%;
                    }
                }
                div:nth-child(3){
                    h3{
                        font-size:12px;
                        background:#3e3e3d url(../../assets/icon-3.png) no-repeat;
                        background-size:20%;
                    }
                }
            }
    }
</style>
