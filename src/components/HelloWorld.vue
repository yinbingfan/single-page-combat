<template>
  <div class="header">
     <div class="header-nav">
       首页
     </div>
     <div class="header-nav" @click="nav">
       服务
         <div   v-if="isShow">
             <div
                 v-for="(item,key) in items" :key="key"
                 class="nav-menu"
             >
                 <div @click="navMenu(item.id)">{{item.name}}</div>
             </div>
         </div>

     </div>
     <div class="header-nav">
       案列
     </div>
     <div class="header-nav">
        我们
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
        return{
            isShow:false,
            items:[
                {id:0,name:'营销'},
                {id:1,name:'视频'},
                {id:2,name:'硬盘'},
                {id:3,name:'流量'}
            ]
        }
    },
    methods:{
        navMenu(){
        },
        nav(e){
            e.preventDefault()
            this.isShow=!this.isShow
        }
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
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
