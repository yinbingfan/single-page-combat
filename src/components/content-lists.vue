<!--
 * @Author: your name
 * @Date: 2019-09-25 09:17:44
 * @LastEditTime: 2019-12-12 16:38:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \single-page-combat-master\src\components\content-lists.vue
 -->
<template>
  <div>
    <div>{{ num | formatDouble }}</div>
    <div :style="{ backgroundColor: setColor(1), color: setFontColor(2) }">
      黄河
    </div>
    <div class="product-image-wrapper">
      <img src alt />
    </div>
    <div class="time">{{ time | birefListTime }}</div>
    <div class="header-nav" @click="goToHome">跳转HOME</div>
    <div class="phone">{{ phone | encryptPhone }}</div>
    <div>{{ num | FormattedAmount }}</div>
    <i class="el-icon-delete"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 66666666666,
      time: 1550045424,
      phone: "13572314175",
      s: [
        {
          a: "name",
          b: "age"
        }
      ],
      b: {
        a: 1
      }
    };
  },
  mounted() {},
  methods: {
    goToHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="less" scope>
.product-image-wrapper {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    &[lazy="error"] {
      background: url("../assets/imgs/banner-defult.svg") no-repeat;
      background-size: 100% 100%;
    }
    &[lazy="loading"] {
      background: url("../assets/imgs/banner-defult.svg") no-repeat;
      background-size: 100% 100%;
    }
  }
}
.phone {
  background: rgba(0, 152, 231, 0.2);
}
</style>
