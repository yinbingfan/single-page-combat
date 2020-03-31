// import 'babel-polyfill'
// import Promise from 'es6-promise'
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
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'
Vue.use(VueKindEditor)
// Promise.polyfill()
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(ViewUI);
import axios from 'axios'
//解决IE中，elementUI的input删除操作无法触发数据变动监听
import oninputPolyfill from 'ie9-oninput-polyfill';
Vue.use(oninputPolyfill);
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
// Vue.use(vueBaberrage) //弹幕
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
Vue.directive('loaded-callback', {
    inserted: function (el, binding, vnode) {
        binding.value(el, binding, vnode)
    }
})
//无法获取未定义或 null 引用的属性“remove”
//错误信息：无法获取未定义或 null 引用的属性“add”
//解决iview在IE9中list方法报错的问题

if (!('classList' in document.documentElement)) {

    Object.defineProperty(HTMLElement.prototype, 'classList', {

        get: function () {

            var self = this;

            function update(fn) {

                return function (value) {

                    var classes = self.className.split(/\s+/g);

                    var index = classes.indexOf(value);

                    fn(classes, index, value);

                    self.className = classes.join(' ');

                };

            }

            return {

                add: update(function (classes, index, value) {

                    if (!~index) classes.push(value);

                }),

                remove: update(function (classes, index) {

                    if (~index) classes.splice(index, 1);

                }),

                toggle: update(function (classes, index, value) {

                    if (~index) { classes.splice(index, 1); } else { classes.push(value); }
                }),

                contains: function (value) {
                    return !!~self.className.split(/\s+/g).indexOf(value);
                },

                item: function (i) {
                    return self.className.split(/\s+/g)[i] || null;
                },
            };
        },
    });
}

//

//解决IE9中不支持foreach的解决方法
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function forEach(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError("this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}
//这是ie10及以下不支持dataset导致的，而iview的transfer-dom.js使用了这个属性
if (window.HTMLElement) {
    if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
        Object.defineProperty(HTMLElement.prototype, 'dataset', {
            get: function () {
                var attributes = this.attributes; // 获取节点的所有属性
                var name = [];
                var value = []; // 定义两个数组保存属性名和属性值
                var obj = {}; // 定义一个空对象
                for (var i = 0; i < attributes.length; i++) { // 遍历节点的所有属性
                    if (attributes[i].nodeName.slice(0, 5) === 'data-') { // 如果属性名的前面5个字符符合"data-"
                        // 取出属性名的"data-"的后面的字符串放入name数组中
                        name.push(attributes[i].nodeName.slice(5));
                        // 取出对应的属性值放入value数组中
                        value.push(attributes[i].nodeValue);
                    }
                }
                for (var j = 0; j < name.length; j++) { // 遍历name和value数组
                    obj[name[j]] = value[j]; // 将属性名和属性值保存到obj中
                }
                return obj; // 返回对象
            },
        });
    }
}
// npm install--save ie9 - oninput - polyfill

if (Number.parseInt === undefined) Number.parseInt = window.parseInt;
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat
new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#app')