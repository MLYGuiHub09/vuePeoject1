<template>
    <el-input-number size="mini" v-model="num" :min="0" style='width:110px' @change="updateCount"
     ref='numbox' ></el-input-number>
</template>
<script>
export default {
    data(){
        return{
            num:1
        }
    },
      methods:{
        updateCount(){
            //console.log(this.$refs.numbox.value) 这里会有问题：获取的数据是改变前的数据？
            //console.log(num) 正确
            this.$emit('getCount',this.num)
        }
    }
}
</script>

<style scoped>

</style>


