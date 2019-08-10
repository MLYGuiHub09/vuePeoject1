<template>
    <el-input-number size="mini" v-model="num" :min="0" style='width:110px' @change="updateCount"
     ref='numbox' ></el-input-number>
</template>

<script>
export default {
    props:['initCount','goodsID'],
    data(){
        return{
            num:this.initCount
        }
    },
    watch:{
        // num(nweval){
        //     console.log(`${newval} ${this.goodsID}`)
        // }
    },
    methods:{
        updateCount(){
            //console.log(this.$refs.numbox.value) 这里会有问题：获取的数据是改变前的数据？
            //console.log(num) 正确
            this.$store.commit('updateCount',{count:this.num,id:this.goodsID})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


