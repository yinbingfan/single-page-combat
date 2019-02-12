import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import FastClick from 'fastclick'
import VueI18n from 'vue-i18n'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
document.addEventListener('touchstart', function(event) {
    // 判断默认行为是否可以被禁用
    if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }
    }
}, false);
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
Vue.use(VueI18n)

export default ({ app, store }) => {
    app.i18n = new VueI18n({
        locale: store.state.locale,
        fallbackLocale: store.state.locale,
        messages: {
            // 'en': require('~/locales/en.json')
            // 'ja': require('~/locales/ja.json'),
            // 'ko': require('~/locales/ko.json'),
            // 'zh': require('~/locales/zh.json')
        }
    })

}
new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
