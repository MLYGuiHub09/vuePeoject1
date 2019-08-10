<!-- 评论子组件 -->
<template>
<div class='cmt-container'>
    <h3>发表评论</h3>
    <hr>
    <textarea class="text-content" placeholder="请输入评论" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postMessage">发表评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for="item in commentlist" :key="item.user_name">
            <div class="cmt-title">
                <span>第一楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;</span>
                <span>发表时间:{{item.add_time | timeFilter}}</span>
            </div>
            <div class="cmt-body">
                {{item.content}}
            </div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import {Toast} from "Mint-ui";

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    msg:"",//评论输入的内容
    pageindex:1,//第一页 默认
    commentlist:[] //评论数组
};
},
props:['id'],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getcomments(){
        this.$http.get("api/getcomments/"+ this.id +"?pageindex="+this.pageindex).then(result => {
             if(result.body.status === 0){
                //this.commentlist = result.body.message;
                this.commentlist = this.commentlist.concat(result.body.message);
            }else{
                Toast("获取评论失败");
            }
        })
    },
    getMore(){//加载更多
        this.pageindex++;
        this.getcomments();
    },
    postMessage(){
        //发表评论
        //
        if(this.msg.trim().length ===0){
            return Toast("评论")
        }
        this.$http.post('api/postcomment/'+ this.$route.params.id,{
             content:this.msg.trim() 
             })
             .then((result)=>{
            if(result.body.status ===0){
                let cmt = {
                    user_name : "匿名用户",
                    add_time : Date.now(),
                    content:this.msg.trim()
                };
                this.commentlist.unshift(cmt);
                this.msg=""
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getcomments();
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.cmt-container{
    h3 {
        font-size: 18px;
    }
    .text-content{
        height: 85px;
        font-size: 14px;
        margin: 0
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
                display: flex;
                justify-content: space-between;

            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>