<!--  -->
<template>
<div class=''>
     <mt-swipe>
            <mt-swipe-item>
                <img src="../images/59561202_p0.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../images/achievement_ezhihual.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../images/achievement_fengchenl.png" alt="">
            </mt-swipe-item>
      </mt-swipe>

  	<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <router-link to="/home/news">
                                <img src="../images/menu1.png" alt="">
                                <div class="mui-media-body">新闻资讯</div>
                            </router-link>
		                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <router-link to="/home/images">
                                <img src="../images/menu2.png" alt="">
                                <div class="mui-media-body">图片分享</div>
                            </router-link>
		                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <router-link to="/home/shop">
                                <img src="../images/menu3.png" alt="">
                                <div class="mui-media-body">商品购买</div>
                            </router-link>
		                    </li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photos">
                             <img src="../images/menu4.png" alt="">
		                     <div class="mui-media-body">留言反馈</div>
                        </router-link>
		                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <router-link to="/home/photos">
                                <img src="../images/menu5.png" alt="">
                                <div class="mui-media-body">视频专区</div>
                            </router-link>
		                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <router-link to="/home/photos">
                                <img src="../images/menu6.png" alt="">
		                        <div class="mui-media-body">联系我们</div>
                            </router-link>
		                   </li>
		        </ul> 
		</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import swiper from "./subcomponents/sub/swiper"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    swiper
},
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

.mui-content>.mui-table-view:first-child{
    margin-top: 0
}
.mint-swipe{
    height: 200px;
    img{
        width: 100%;
        height: 100%
    }
}

.mui-content{
    .mui-grid-view.mui-grid-9{
        background: #fff;
        .mui-table-view-cell{
            border:0
        }
        li{
            img{
                width: 60px;
                height:60px;
            }
        }
    }
}
</style>