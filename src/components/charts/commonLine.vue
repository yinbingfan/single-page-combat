<template>
  <div ref="dom"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    lists: {
      type: Array,
      default: () => []
    },
    namesList: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    lists: {
      handler(newValue) {
        this.initChart(newValue);
      }
    }
  },
  data() {
    return {
      dom: null
    };
  },
  methods: {
    initChart(data) {
        let colors=['#00ff00','#36cbcb'];
        let seriesData=[];
        let colorBale=[];
        let legendData=[];
        let xAixisDate=[];
        let names=this.names.map(item=>item.name);
        let enNames=this.names.map(item=>item.englishName);
        xAixisDate=data.map(item=>item.date);
        let lists=[]
        for(let i=0;i<){

        }
    }
  }
};
</script>

<style>
</style>