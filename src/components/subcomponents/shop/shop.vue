<!--  -->
<template>
<!-- 声明式跳转 -->
<!-- <div class='goods-list'>
    <router-link class="goods-item" v-for="item in goodsList" :key=item.id
    :to="'/home/shopinfo/' + item.id">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
            <p class="price">
                <span class="new">{{item.sell_price}}</span>
                <span class="old">{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </p>
        </div>
    </router-link>
    <mt-button type="danger" size="large">加载更多</mt-button>
</div> -->

<!-- 编程式跳转 -->
<div class='goods-list'>
    <div class="goods-item" v-for="item in goodsList" :key=item.id @click="toShopInfo(item.id)">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
            <p class="price">
                <span class="new">{{item.sell_price}}</span>
                <span class="old">{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </p>
        </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {                                                     
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
    return {
        pageindex:1,
        goodsList:[]
    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
getGoodList(){
    //获取商品列表
    this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
        if(result.body.status ===0 ){
            this.goodsList = result.body.message;
        }
    })
},
toShopInfo(id){
    this.$router.push("/home/shopinfo/"+id)
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getGoodList();
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

.goods-list{
    display: flex;
    flex-wrap: wrap;
      padding: 0 1rem 1rem 1rem;
    .goods-item{
        padding: 1rem 1rem;
        width: 49%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%
        }
        .title{
            font-size: 14px
        }
        .info{
            .price{
                .new{
                    color: red;
                    font-weight: bold;
                    font-size: 16px
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 2rem
                }
            }
        }
    }
}
</style>