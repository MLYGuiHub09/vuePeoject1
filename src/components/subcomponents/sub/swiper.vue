<!--  -->
<template>
<div class=''>
     <mt-swipe>
         <!-- 将来谁使用 轮播图组件 谁传递lunbotuList -->
         <!-- 此时，lunbotuList 应该是 父组件向子组件传值来设置 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.src" alt="" :class="{full:isfull}">
            </mt-swipe-item>
      </mt-swipe>
      <!-- 分析：为什么 商品评论组件的轮播图这么丑？ -->
      <!-- 1.首页的图片 他的宽和高 都是使用了100% -->
      <!-- 2.在商品详情页面中，轮播图的图片如果也使用100%的话，页面不好看 -->
      <!-- 3.商品详情页面中的轮播图。期望高度为100%，宽度自适应 -->
      <!-- 4.经过分析，得到问题的原因：首页中的轮播图和商品详情中的轮播图 分歧点是宽度到底是自适应还是100% -->
      <!-- 5.既然这两个轮播图 其其他方面没有冲突，只是宽度有分歧，那我们可以定义一个属性，让使用轮播图的调度者，手动指定
      宽度是否为100% -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
props:['lunbotuList','isfull'],    
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
.mint-swipe{
    height: 200px;
    text-align: center;
    img{
        height: 100%
    }
}
.full{
    width: 100%;
}
</style>