<!--  -->
<template>
<div class='shop-centainer'>

    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag"></div>
    </transition>

    <!-- 商品轮播区域 -->
    <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbotuList='msg' :isfull = false></swiper>
				</div>
			</div>
	</div>
    <!-- 商品购买区域 -->
      <div class="mui-card">
          <div class="mui-card-header">{{shopinfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>{{shopinfo.market_price}}</del>&nbsp;&nbsp;销售价: <span class="now_price">
                            {{shopinfo.sell_price}}
                        </span>
                    </p>
                    <p>
                        购买数量：
                        <numbox :initCount='selectedCount' @getCount='getSelectCount'></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
				</div>
			</div>
	</div>
    <!-- 商品参数区域 -->
      <div class="mui-card">
           <div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{shopinfo.goods_no}}</p>
                    <p>库存情况：{{shopinfo.stock_quantity}}</p>
                    <p>上架时间：{{shopinfo.add_time}}</p>
				</div>
			</div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large">图文介绍</mt-button>
                <mt-button type="danger" size="large">商品评论</mt-button>
            </div>
	</div>


     
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import swiper from '../sub/swiper';
import numbox from '../sub/goodsinfo_number'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    swiper,
    numbox
},
data() {
//这里存放数据
return {
    id:this.$route.params.id,
    msg:[],
    shopinfo:{},
    ballFlag:false,
    selectedCount:1
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getLunbotu(){
        this.$http.get('api/getthumimages/' + this.id).then(result=>{
            if(result.body.status === 0 ){
                this.msg = result.body.message
            }
        })
    },
    getshopinfo(){
        this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
             if(result.body.status === 0 ){
                this.shopinfo = result.body.message[0]
            }
        })
    },
    addToShopCar(){
        this.ballFlag = !this.ballFlag;
        //拼接处一个要保存在store中的
        let goodsinfo = {
            id:this.id,
            count:this.$store.state.count,
            price:this.shopinfo.sell_price,
            selected:true
        }
        this.$store.commit('addToCart',goodsinfo)
    },
    getSelectCount(count){
        console.log(count)
        this.$store.commit('setCount',count);
    },
    beforeEnter(el){
        el.style.transform = 'translate(0,0)'
    },
    enter(el,done){
        el.offsetWidth;
        el.style.transform = 'translate(76px, 237px)';
        el.style.transition = "all 1s ease";
        done();
    },
    afterEnter(){
         this.ballFlag =!this.ballFlag;
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getLunbotu();
    this.getshopinfo();
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
.shop-centainer{
    background: #eee;
    overflow: hidden;
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #f00;
        position: absolute;
        z-index: 99;
        left: 160px;
        top: 405px;
    }
}
.now_price{
    color: #f00;
    font-size: 16px;
    font-weight: bold
}
.mui-card-footer{
    display: block;
    button{
    margin: 15px 0
    }
}
</style>