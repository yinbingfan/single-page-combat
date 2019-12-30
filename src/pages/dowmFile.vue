<template>
  <div>
      <div @click="down">
            下载
      </div>
  </div>
</template>

<script>
import JSZip from 'jszip';
import FileSaver from 'file-saver'
export default {
    data(){
        return{

        }
    },
    methods:{
        down(item,fileNames){
            if(fileNames){
                const zip = new JSZip();
                const data =fileNames;
                const cache ={};
                const promises=[];
                data.map(item=>{
                    let formData=new formData();
                    const promise=File_LSIT(formData).then(data=>{
                        const arr_name=item.split('/');
                        const file_name=arr_name[arr_name.length-1];
                        zip.file(file_name,data.data,{binary:true});
                        cache[file_name]=data
                    })
                    promises.push(promise)
                })
                Promise.all(promises).then(()=>{
                    zip.generateAsync({type:'blob'}).then(content=>{
                        FileSaver.saveAs(content,'aaa.zip')
                    })
                })
            }else{
                 let formData=new formData();
                 formData.append('filename',item.filename);
                 File_LSIT(formData).then(res=>{
                     if(res.status===200){
                         let url = window.URL.createObjectURL(new Blob([res.dat],{type:'application/octec-stream'}));
                         let link = document.createElement('a');
                         link.style.display='none';
                         link.href=url;
                         link.setAttribute('download',item.fileName);
                         document.body.append(link);
                         link.click()
                     }
                 })
            }
        }
    }
}
</script>

<style>

</style>