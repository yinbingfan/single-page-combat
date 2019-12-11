/*
 * @Author: your name
 * @Date: 2019-09-25 09:17:44
 * @LastEditTime: 2019-11-25 18:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \single-page-combat-master\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import FastClick from 'fastclick'
import VueI18n from 'vue-i18n'
import SocialSharing from 'vue-social-sharing'
import './common/js/filter'
import './common/js/mixin'
import './assets/css/normalize.css'
import store from './store/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iview from 'iview';
import 'iview/dist/styles/iview.css';
import { vueBaberrage } from 'vue-baberrage'

import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
document.addEventListener('touchstart', function (event) {
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
Vue.use(ElementUI)
Vue.use(SocialSharing)
Vue.use(iview)
Vue.use(vueBaberrage)//弹幕
window.bus = new Vue();
const i18n = new VueI18n({
    locale: 'zh',
    // fallbackLocale: store.state.locale,
    messages: {
        'en': require('./locales/en.json'),
        'ja': require('./locales/ja.json'),
        'ko': require('./locales/ko.json'),
        'zh': require('./locales/zh.json')
    }
})
new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#app')
