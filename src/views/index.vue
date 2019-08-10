<template>
  <div>
    <span>this is my first vue page</span><br>
    <span>{{$route.params.name}}</span>
     <router-link to='/index/title'>to title</router-link>
     <router-link to='/index/image'>to image</router-link>
      <router-link to='/good'>to good</router-link>
     <button @click="jump">jump good</button>
     <div>
       <!-- //这里就是子组件渲染的位置 -->
         <router-view></router-view>   
     </div>
  </div>
</template>

<script>
export default {
    methods:{
      jump(){
        console.log("jump");
        // this.$router.push('/good')
        this.$router.push({path:'/good'})
      }
    }
}
</script>

<style>

</style>