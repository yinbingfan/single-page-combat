export default {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    },
    // 无国家路径获取国家路由
    SET_DEFAULT_LANG(state, langCode) {
      state.locale = langCode
    },
  
    SET_MEUN_STATE(state, type) {
      if(state.menu.indexOf(state.locales)>=0) {
        state.menu = 'home'
      }else {
        state.menu = type
      }
    },
    SET_DETAILS_STATE(state, isShow) {
      state.detailsIsShow = isShow
    }
  
  }
  