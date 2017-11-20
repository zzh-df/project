<template>
	<div class="page">
		<ul class="pagination" >
			<li :class="{disabled:current == 1}" @click="gotofirst"><a href="javascript:void(0);">首页</a></li>
            <li :class="{disabled:current == 1}" @click="current-- && goto(current--)" ><a href="javascript:void(0);">上一页</a></li>
            <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
              <a href="javascript:void(0);" >{{index}}</a>
            </li>
            <li :class="{disabled:allpage == current && allpage != 0}" @click="current++ && goto(current++)"><a href="javascript:void(0);" >下一页</a></li>
            <li>跳转到：<input type="text" class="ipt" @keyup.enter="goto($event.target.value)"></li>
            <li>{{current}}&nbsp;/&nbsp;{{allpage}}</li>
            <li :class="{disabled:allpage == current && allpage != 0}" @click="gotoend"><a href="javascript:void(0);">尾页</a></li>
        </ul>
	</div>
</template>
<script>
	export default {
		name:'page',
		data() {
			return {
				//当前显示页
				current:1,
				//总共显示多少页
	            showItem:5,
                //每页显示数据条数
                // pageSize:10,
	            //总页数
	            // allpage:11
			}
		},
        props:[
            'pageSize','allpage'
        ],
		computed:{
            pages:function(){
                var pag = [];
                if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                    //总页数和要显示的条数那个大就显示多少条
                    var i = Math.min(this.showItem,this.allpage);
                    while(i){
                        pag.unshift(i--);
                    }
                }else{ //当前页数大于显示页数了
                    var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                        i = this.showItem;
                    if( middle >  (this.allpage - this.showItem)  ){
                        middle = (this.allpage - this.showItem) + 1
                    }
                    while(i--){
                        pag.push( middle++ );
                    }
                }
                return pag
           }
      },
      methods:{
        gotofirst:function(){
            this.current = 1;
            this.goto(this.current)
        },
        gotoend:function(){
            this.current = this.allpage;
            this.goto(this.current)
        },
        goto:function(index){

          if(index<1){
              this.current = 1;
          }
          if(index>this.allpage){
              this.current = this.allpage;
          }
          if(index>0 && index<=this.allpage){
            this.current = index;
          }
          this.$emit('change', this.current);
        }
            
      },
      mounted:function(){
               
      }
}
</script>
<style scoped>
    body{font-family:"Segoe UI";}
    li{list-style:none;}
    a{text-decoration:none;}
    .page{padding-right:1.2rem;text-align: right;margin-top:.4rem;}
    .pagination { position: relative;}
    .pagination li{display: inline-block;margin:0 .05rem;color:#989898;}
    .pagination li a{
        padding:.07rem .14rem;
        display:inline-block;
        border-radius: .05rem;
        background:#fff;
        color:#333333;
      }
      .pagination li a:hover{
        background:#eee;
      }
      .pagination li.active a{
        background:#4f4f4f;
        color:#fff;
      }
      .disabled{pointer-events:none;}
      .ipt{max-width:.4rem;border-radius: .05rem;padding:.09rem .04rem;vertical-align: middle;}
</style>