<!--  -->
<template>
<div>
          <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',items.id == 0 ? 'mui-active':'']"
                     v-for="items in cate" :key="items.id">
                        {{items.title}}
                    </a>
                </div>
            </div>

                <ul>
                    <li v-for="item in list" :key="item.id">
                        <img v-lazy="item.img_url">
                    </li>
                </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import mui from '@/lib/mui/js/mui.min.js';
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });


export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
cate:[], //所以分类的id
list:[]//图片列表
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
getallCategory(){
    this.$http.get("api/getimgcategory").then(result=>{
        if(result.body.status ===0){
            result.body.message.unshift({title:"全部",id:0});
             this.cate = result.body.message
        }
    })
},
getimglist(cateid){
    this.$http.get('api/getimages/'+cateid).then(result=>{
        if(result.body.status === 0 ){
            this.list= result.body.message
        }
    })
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
this.getallCategory();
this.getimglist(0);//进入页面就加载全部图片
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
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>