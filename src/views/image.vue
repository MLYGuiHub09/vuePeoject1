<template>
    <div>
        <el-row>
            <el-button @click="get">默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success" @click="tobaidu">成功login按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <svg class="user_avatar" >
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
        </svg>
        <span>this is image</span>
        
    </div>
</template>

<script>
export default {
    methods:{
        get:function(){
            //网上看到有的不需要使用this？
            this.axios.get("/#/index",{
                params:{
                    userid:"099"
                },
                header:{
                    token:"jack"
                }
            }).then(res=>{
                console.log("thed");
                var res = res.data;
            })
        },
        tobaidu:()=>{
            this.axios.get('/login').then(res=>{
                console.log("okoko")
            })
        }
    }
}
</script>


