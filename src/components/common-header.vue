<template>
  <div class="header">
    <div class="header-nav">首页</div>
    <selection />
    <div class="header-nav">{{ $t('nav.home') }}</div>
    <div class="header-nav">我们</div>
    <div class="header-nav" @click="doClick">点击</div>
    <div class="header-nav" @click="selectLang()">切换语言</div>
  </div>
</template>

<script>
import Bus from "../common/js/eventBus.js";
import selection from "./selection.vue";
export default {
  name: "CommonHeader",
  components: {
    selection
  },
  props: {
    msg: String
  },
  data() {
    return {};
  },

  methods: {
    selectLang() {
      if (this.$i18n.locale === "zh") {
        this.$i18n.locale = "en"; //关键语句
      } else {
        this.$i18n.locale = "zh"; //关键语句
      }
    },
    doClick() {
      Bus.$emit("getTarget");
    }
  }
};
</script>

<style lang="less" scoped>
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
.header {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: rgb(9, 7, 46);
  .header-nav {
    width: 25%;
    color: #fff;
    .nav-menu {
      background-color: rgb(9, 7, 46);
    }
  }
}
</style>
