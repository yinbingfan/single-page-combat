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
import  store  from './store/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


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
Vue.use(ElementUI)
Vue.use(SocialSharing)
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
