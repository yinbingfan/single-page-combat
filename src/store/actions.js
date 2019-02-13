import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    /*
    * 首页轮播图
    * params:langCode,
    * */
  async FETCH_BANNER({ state }, params) {
      const {data}= await axios({
        method: 'get',
        // url: `/v1/api/sliding.json`,
        url: `http://localhost:8888/getWikiTheme`,
        params: params,
      })
      state.banner = data
      return  data
    },
    /*
    * 首页 topfive数据
    * params:langCode,
    * */
    async FETCH_TOP_FIVE({state},params) {
      const { data } = await this.$axios({
        method: 'get',
        url: `/v1/api/dappTop5.json`,
        // url: `http://localhost:8888/getDappTop`,
        params: params,
      })
      state.topFive=data
      return data
    },
    /*
    * 最近添加Dapp
    * params:langCode,
    * */
    async FETCH_RECENTLY_LISTS({state},params) {
      const { data } = await this.$axios({
        method: 'get',
        url: `/v1/api/recentlyDapp.json`,
        // url: `http://localhost:8888/getRecentlyDapp`,
        params: params,
      })
      state.recentlyList=data
      return data
    },
    /*
    * Dapp列表
    * params:platform,langCode,categoryId,sortColumn.sortType
    * */
    async FETCH_FIND_LISTS({state},params) {
      const { data } = await this.$axios({
        method: 'get',
        url: `/v1/api/findDapps.json`,
        // url: `http://localhost:8888/getfindDapps`,
        params: params,
      })
      state.findDapps = data
      return data
    },
    /*
    * 详情页
    * params:id,langCode
    * */
    async FETCH_DETAILS({state},params) {
      const {data} = await this.$axios({
        method: 'get',
        url: `/v1/api/dappDetail.json`,
        // url: `http://localhost:8888/getdappDetails`,
        params: params,
      })
      state.details = data
      return  data
  
    },
    /*
    * 分类
    * params:langCode
    * */
    async FETCH_CATEGORY({state},params) {
      const { data } = await this.$axios({
        method: 'get',
        url: `/v1/api/category.json`,
        // url: `http://localhost:8888/getCategory`,
        params: params,
      })
      state.categoryList = data
      return data
    },
    /*
    * 邮件订阅
    * param: email
    * email=newk.wang@thedbit.com
    * */
    async FETCH_SUBSCRIBE({state},params) {
      const { data } = await this.$axios({
        method: 'post',
        url: `/v1/api/subscribe.json`,
        params: params,
      })
      state.subscribe = data
      return data
    },
  
  
  }
  