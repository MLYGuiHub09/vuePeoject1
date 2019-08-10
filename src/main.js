// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//使用路由
import router from './router/router'
//导入vue-resoure
import VueResource from 'vue-resource'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
//import axios from "axios"
//import VueAxios from "vue-axios"
import $ from 'jquery'
import jquery from 'jquery'

//安装 vue-resource
Vue.use(VueResource)
//设置请求根路径
Vue.http.options.root = "http://www.liulongbin.top:3005";

//全局设置 post 时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;

import moment from "moment"
//定义全局过滤器 时间初始化
Vue.filter('timeFilter', function (datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(datastr).format(pattern);
})

Vue.use(ElementUI)
Vue.config.productionTip = false
//Vue.prototype.$ajax = axios
//Vue.use(VueAxios,axios)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//导入MUI的样式
import "./lib/mui/css/mui.min.css"

//导入mint-ui 中的组件
import { Header, Swipe, SwipeItem, Button, Lazyload, Tabbar, TabItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.use(Lazyload)

//import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
import Mint from "mint-ui"
Vue.use(Mint)
import 'mint-ui/lib/style.css'

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: { //this.$store.state.xxx
    cart: JSON.parse(localStorage.cart), //将购物车中的商品的数据，用一个数组存储起来，在cart数组中，存储一些商品的对象，砸门可以展示将这个商品对象，设计成
    //这个样子，{id:'商品的id'，count：购买的数量，price：商品的价格，selected：false}
    count: 1
  },
  mutations: {//this.$store.commit('方法的名称','按需传递唯一的参数')
    addToCart(state, goodsinfo) {
      var flag = false
      state.cart.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true
          return true
        }
      })

      if (!flag) {
        state.cart.push(goodsinfo)
      }

      //当更新cart以后，将数组数据存储z本地的localstorage中
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCount(state, goodsInfo) {
      state.cart.some(item => {
        if (item.id == goodsInfo.id) {
          item.count = goodsInfo.count
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateSeleted(state,goodsInfo){
      state.cart.some(item => {
        if (item.id == goodsInfo.id) {
          item.selected = goodsInfo.selected
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeByID(state,id){
      state.cart.some((item,i)=>{
        if(item.id ==id){
          state.cart.splice(i,1);
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setCount(state, val) {
      state.count = val
    }
  },
  getters: {//this.$store.getters.xxx
    getAllcount(state) {
      var c = 0;
      state.cart.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {};
      state.cart.forEach(item => {
        o[item.id] = item.count;
      })
      return o;
    },
    getGoodsSelected(state){ //获取商品对应的勾选状态
      var o={};
      state.cart.forEach(item => {
          o[item.id] = item.selected
      })
      return o;
    },
    getGoodsCountAndmount(state){ //获取总价和数量
      var o ={
        count:0,//勾选的数量
        mount:0//勾选的总价
      }
      state.cart.forEach(item=>{
        if(item.selected){
          o.count +=item.count;
          o.mount +=item.price * item.count
        }
      })
      return o
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
