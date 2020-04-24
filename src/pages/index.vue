<template>
  <div>
    <layout />
    <content-lists />
    <common-form />
  </div>
</template>
<script>
import layout from "../components/layout.vue";
import contentLists from "../components/content-lists.vue";
import commonForm from "../components/common-form";
export default {
  components: {
    layout,
    contentLists,
    commonForm
  },
  data() {
    return {
      CategoryList: []
    };
  },
  mounted() {
    // this.getCategory()
  },
  methods: {
    async getCategory() {
      let Category = await this.$store.dispatch("FETCH_BANNER", {
        // langCode:this.$store.state.locale
      });
      this.CategoryList = Category.data;
    }
  }
};
</script>
