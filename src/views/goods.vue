<template>
    <div>
        <section v-if="showitem">
            <header>
                <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            </header>
        </section>
        this is goods
        <a href="javascript:;" class="btn" @click="toresourceVue">to resourceVue</a>
         <div>
            <!-- //这里就是子组件渲染的位置 -->
         <router-view></router-view>   
        </div>
        <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
    </div>
</template>
<script>


export default {
    data() {
      return {
        showitem:true,
        value1: true,
        value2: true
      }
    },
   
    methods:{
        toresourceVue:function(){
            this.$router.push("/good/resource")
        }
    }
    
}
</script>
