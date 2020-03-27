<template>
  <div>
    <social-share />
    <common-editor />
  </div>
</template>

<script>
import socialShare from "../components/share.vue";
import commonEditor from "../components/commonEditor";
export default {
  name: "home",
  components: {
    socialShare,
    commonEditor
  }
};
</script>


<style scoped>
</style>