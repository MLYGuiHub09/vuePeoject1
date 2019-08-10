<template>
  <div id="app">
    <div class="cgs-content">
      <mt-header fixed title="固定在顶部">
        <span slot="left" @click='goback' v-show = "flag">
          <mt-button icon="back">返回</mt-button>
        </span>  
      </mt-header>
      <!-- <img src="./assets/logo.png"> -->

      <transition class>
        <router-view/>
      </transition>

      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">9</span>
          </span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopping">
          <span class="mui-icon mui-icon-contact">
            <span class="mui-badge">{{$store.getters.getGoodsCountAndmount.count}}</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import svgIcon from "@/components/svg";
export default {
  data(){
    return {
      flag:false
    }
  },
  created(){
    this.flag = this.$route.path ==='/home' ?  false :  true
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
  watch:{
    "$route.path":function(newval){
      if(newval ==='/home'){
        this.flag =false
      }else{
        this.flag = true
      }
    }
  }
};
</script>
<style lang="scss">
body {
  background: #fff;
}
hr {
  margin: 10px 0;
}
.cgs-content {
  margin-top: 40px;
  margin-bottom: 50px;
  overflow-x: hidden;
}
.mui-bar-tab {
  margin: 0;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
