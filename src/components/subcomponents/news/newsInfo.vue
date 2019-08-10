<!--  -->
<template>
<div class='newsinfo-containter'>
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
        <span>发表时间：{{newsinfo.add_time | timeFilter}}</span>
        <span>点击：{{newsinfo.click}}次</span>
    </p>

    <hr>
    <div class="content" v-html="newsinfo.content">

    </div>

    <comment-box :id="this.id"></comment-box>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import {Toast} from "Mint-ui";

//导入评论子组件
import comment from '../sub/comment';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    commentBox:comment
},
data() {
//这里存放数据
return {
    id:this.$route.params.id, //将URL地址传送过来的id值挂在data上，方便调用
    newsinfo:{}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getnewinfo(){
        this.$http.get("api/getnew/" + this.id).then(result =>{
            if(result.body.status === 0){
                this.newsinfo = result.body.message[0];
            }else{
                Toast("获取新闻失败");
            }
        })
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getnewinfo();
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

.newsinfo-containter{
    padding: 0 4px;
    .title{
        text-align: center;
        font-size: 16px;
        color: red;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{

    }
}
</style>