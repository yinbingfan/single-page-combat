<template>
    <div>
          <div>{{num | formatDouble}}</div>
            <div 
            :style="{backgroundColor:setColor(1),'color':setFontColor(2)}"
            >
                黄河
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:66666666666666666666
        }
    }
}
</script>
<style lang="less">
    
</style>