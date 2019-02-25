<template>
    <div class="header-nav" @click="nav">
       服务
         <div   v-if="isShow">
             <div
                 v-for="(item,key) in items" :key="key"
                 class="nav-menu"
             >
                 <div @click="navMenu(item.id)" >{{item.name}}</div>
             </div>
         </div>
     </div>
</template>
<script>
import eventBut from '../common/js/eventBus.js';  
export default {
     data(){
        return{
            isShow:false,
            items:[
                {id:0,name:`720 \u00B0`},
                {id:1,name:'视频'},
                {id:2,name:'硬盘'},
                {id:3,name:'流量'}
            ]
        }
    },
     mounted(){
        eventBut.$on('getTarget',()=>{
             this.isShow=false
        })  
      
    },
    methods: {
         nav(){
            eventBut.$emit('getTarget');   
            this.isShow=!this.isShow
        },
        navMenu(){
            
        }
    }
}
</script>
<style lang='less' scope>
    .header{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: rgb(9, 7, 46);
  .header-nav{
      width: 25%;
        color: #fff;
    .nav-menu{
        background-color: rgb(9, 7, 46);
    }
  }

}
</style>
