<!--  -->
<template>
  <div class="shop-containt">
    <div class="goodlist">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" v-for="(item,i) in goodslist" :key="item.id">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
             @change='switchChanged(item.id,$store.getters.getGoodsSelected[item.id])' ref="switched"></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h3>{{item.title}}</h3>
              <p>
                <span class="price">${{item.sell_price}}</span>
                <shop-number :initCount="$store.getters.getGoodsCount[item.id]" :goodsID="item.id"></shop-number>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="shop-computed">
            <div>
              <p>总计(不包含运费)</p>
              <p>
                已选购商品
                <span>{{$store.getters.getGoodsCountAndmount.count}}</span>件，总价：
                <span>￥{{$store.getters.getGoodsCountAndmount.mount}}</span>
              </p>
            </div>
            <mt-button type="danger" size="small">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>

  <p>{{$store.getters.getGoodsCountAndmount}}</p>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import shopNumber from "./subcomponents/sub/shopinfo_number";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    shopNumber
  },
  data() {
    //这里存放数据
    return {
      goodslist: [],
      ids: [],
      arr: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getGoodList() {
      this.ids = [];
      this.arr = this.$store.state.cart;
      this.$store.state.cart.forEach(item => this.ids.push(item.id));
      if (this.ids.length <= 0) {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + this.ids.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    },
    remove(id, index) {
      //点击删除， 把商品从store中根据传递的Id删除，同时把当前组件中的goodslist中，对应要删除的那个商品，使用index来删除
      this.goodslist.splice(index, 1);
      this.$store.commit("removeByID", id);
    },
    switchChanged(id,val){
      console.log(val)
      this.$store.commit('updateSeleted',{id:id,selected:val});
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getGoodList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.goodlist {
  background: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    display: flex;
    align-items: center;
  }
  img {
    margin: 0 5px;
    width: 60px;
    height: 60px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    p {
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 16px;
        color: #f00;
      }
    }
  }
}
.shop-computed {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    color: #f00;
    font-size: 18px;
    font-weight: bold
  }
}
</style>