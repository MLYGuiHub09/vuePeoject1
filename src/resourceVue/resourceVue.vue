<template>
    <div>
        <p>this is resource page</p>
        <span class="btn" @click="get">resource</span>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
        </svg>
    </div>
</template>
<script>
//import resource from 'vue-resource'
export default {
    methods:{
        get:function(){
            // this.$http.get("../../package.json",{
            //     params:{
            //         //userID:"101"
            //     },
            //     headers:{
            //         token:"abcd"
            //     }
            // }).then(res=>{
            //     this.mes = res.data;
            // })
        }
    }
}
</script>
