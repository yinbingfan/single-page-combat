<template>
  <div>
      <draggable class="drop-box" v-model="dropList" tag="div" v-on:options="option">
      <div v-for="(item,index) in dropList" :key="index">{{item.name}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      option: {
        group: "drag_list",
        sort: true
      },
      dropList: [
        {
          name: "aaaa"
        },
        {
          name: "bbbb"
        }
      ]
    };
  }
};
</script>

<style>
</style>