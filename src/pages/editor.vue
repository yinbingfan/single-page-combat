<template>
  <div id="editorContainer">
    <compatible-editor></compatible-editor>
  </div>
</template>

<script>
import compatibleEditor from '../components/commonEditor'
export default {
    components:{
        compatibleEditor
    },
    data(){
      return{
        options:{
         
        },
        content:'here'
      }
    },
    methods:{
  aaa(){

  }
    },
    mounted(){
  
    }
}
</script>

<style>

</style>