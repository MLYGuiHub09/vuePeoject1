<template>
    <div>
        <span>this is title</span>
        <div v-for = "item in arrayjson" :key="item.msg">
            <span>{{item.name}}</span>
        </div>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
             <el-button type="primary" icon="el-icon-edit"></el-button>
             <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"mly",
            arrayjson:[]
        }
    },
    mounted:function(){
        this.getMyjson();
    },
    methods:{
        getMyjson(){
            this.axios.get("/api/myjson").then((result)=>{
                var res = result.data;
                console.log(res);
                this.arrayjson = res.data.result;
            })
        }

    }
    
}
</script>

