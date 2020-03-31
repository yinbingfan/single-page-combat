<template>
  <div>
      <div id="editorContent">
            
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import Vuex from 'vuex'
import {createEditor} from 'vueditor'
import 'vueditor/dist/style/vueditor.min.css'
// 编辑器配置
let config = {
  toolbar: [
     'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
    'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
    'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
    'insertOrderedList', 'insertUnorderedList', '|', 'emoji', 'picture', 'tables', '|', 'switchView'
  ],
  fontName: [
    {val: 'arial black'}, 
    {val: 'times new roman'}, 
    {val: 'Courier New'}
  ],
  fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
  uploadUrl: ''
};

// Vue.use(Vuex);

export default {
    data(){
        return{

        }
    },
    mounted(){
       var inst = createEditor('#editorContent',config)
       inst.setContent('you content here')
    }
}
</script>

<style>

</style>