<template>
    <div>
       <layout/>
       <content-lists/>
    </div>
</template>
<script>
import layout from '../components/layout.vue'
import contentLists from '../components/content-lists.vue'
export default {
  components: {
    layout,
    contentLists
  },
  data(){
    return{
      CategoryList:[]
    }
  },
  mounted(){
    // this.getCategory()
  },
  methods:{
    async getCategory() {
          let Category = await this.$store.dispatch('FETCH_BANNER', {
            // langCode:this.$store.state.locale
          });
          this.CategoryList = Category.data
    },
  }
}
</script>

