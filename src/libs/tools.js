/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 14:17:38
 * @LastEditTime: 2019-12-11 20:45:47
 * @LastEditors: Please set LastEditors
 */
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60)
            }

        )
    }
    const difference = Math.abs(from - to);

    const step = Math.ceil(difference / duration * 50);

    const scroll = (start, end, step) => {
        if (start === end) {
            endCallback && endCallback()
            return;
        }
        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }
        if (el === window) {
            window.scrollTo(d, d)
        } else {
            el.scrollTo = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
}

export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handle) {
            element.addEventListener(event, handle, false)
        }
    } else {
        return function (element, event, handle) {
            if (element && event && handle) {
                element.attachEvent('on' + event, handle)
            }
        }
    }
})();

export const off = (function () {
    if (document.addEventListener) {
        return function (element, event, handle) {
            if (element && event) {
                element.removeEventListener(event, handle, false)
            }
        }
    } else {
        return function (element, event, handle) {
            if (element && event) {
                element.detachEvent('on' + event, handle)
            }
        }
    }
})()

export const isEmptyObj = (obj) => {
    for (const key in obj) {
        return false
    }
    return true
}

//https://github.com/opendigg/awesome-github-vue
export const dateFormatter = (t) => {
    if (!t) return '';
    t = new Date(t).getTime();
    t = new Date(t);
    var year = t.getFullYear();
    var month = t.getFullMonth() + 1;
    month.checkAddZone(month);
    var date = t.getDate();
    date = checkAddZone(date);
    var hour = t.getHours();
    hour = checkAddZone(hour);
    var min = t.getMinutes();
    return year + '-' + month + '-' + date + '-' + hour
}

function checkAddZone(num) {
    return num < 10 ? '0' + num.toString() : num;
}

export const get_time = () => {
    let date = new Date();
    let year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let dateStr;
    if (hours > 12) {
        hours = hours - 12;
        dateStr = year + '-' + ('0' + mouth).slice(-2) + '-' + day;
    } else {
        dateStr = year + '-' + ('0' + mouth).slice(-2) + '-' + day
    }
    return dateStr
}
// 
export const userDepartData = (soure, id, parentId, children) => {
    soure.map((item, index) => {
        if (item.parentId) {
            delete soure[index]
        }
    })

    return soure.filter(father => {
        father.value = father.id;
        father.label = father.name;
        let branchArr = soure.filter(child => father[id] === child[parentId]);
        return father[parentId] === 1
    })
}
/* 禁止复制 */
// onpaste='return false'

export const BrowserType = () => {
    // 权重：系统 + 系统版本 > 平台 > 内核 + 载体 + 内核版本 + 载体版本 > 外壳 + 外壳版本
    const ua = navigator.userAgent.toLowerCase();
    const testUa = regexp => regexp.test(ua);
    const testVs = regexp => (ua.match(regexp) + "")
        .replace(/[^0-9|_.]/ig, "")
        .replace(/_/ig, ".");
    // 系统
    let system = "unknown";
    if (testUa(/windows|win32|win64|wow32|wow64/ig)) {
        system = "windows"; // window系统
    } else if (testUa(/macintosh|macintel/ig)) {
        system = "macos"; // macos系统
    } else if (testUa(/x11/ig)) {
        system = "linux"; // linux系统
    } else if (testUa(/android|adr/ig)) {
        system = "android"; // android系统
    } else if (testUa(/ios|iphone|ipad|ipod|iwatch/ig)) {
        system = "ios"; // ios系统
    }
    // 系统版本
    let systemVs = "unknown";
    if (system === "windows") {
        if (testUa(/windows nt 5.0|windows 2000/ig)) {
            systemVs = "2000";
        } else if (testUa(/windows nt 5.1|windows xp/ig)) {
            systemVs = "xp";
        } else if (testUa(/windows nt 5.2|windows 2003/ig)) {
            systemVs = "2003";
        } else if (testUa(/windows nt 6.0|windows vista/ig)) {
            systemVs = "vista";
        } else if (testUa(/windows nt 6.1|windows 7/ig)) {
            systemVs = "7";
        } else if (testUa(/windows nt 6.2|windows 8/ig)) {
            systemVs = "8";
        } else if (testUa(/windows nt 6.3|windows 8.1/ig)) {
            systemVs = "8.1";
        } else if (testUa(/windows nt 10.0|windows 10/ig)) {
            systemVs = "10";
        }
    } else if (system === "macos") {
        systemVs = testVs(/os x [\d._]+/ig);
    } else if (system === "android") {
        systemVs = testVs(/android [\d._]+/ig);
    } else if (system === "ios") {
        systemVs = testVs(/os [\d._]+/ig);
    }
    // 平台
    let platform = "unknow";
    if (system === "windows" || system === "macos" || system === "linux") {
        platform = "desktop"; // 桌面端
    } else if (system === "android" || system === "ios" || testUa(/mobile/ig)) {
        platform = "mobile"; // 移动端
    }
    // 内核和载体
    let engine = "unknow";
    let supporter = "unknow";
    if (testUa(/applewebkit/ig) && testUa(/safari/ig)) {
        engine = "webkit"; // webkit内核
        if (testUa(/edge/ig)) {
            supporter = "edge"; // edge浏览器
        } else if (testUa(/opr/ig)) {
            supporter = "opera"; // opera浏览器
        } else if (testUa(/chrome/ig)) {
            supporter = "chrome"; // chrome浏览器
        } else {
            supporter = "safari"; // safari浏览器
        }
    } else if (testUa(/gecko/ig) && testUa(/firefox/ig)) {
        engine = "gecko"; // gecko内核
        supporter = "firefox"; // firefox浏览器
    } else if (testUa(/presto/ig)) {
        engine = "presto"; // presto内核
        supporter = "opera"; // opera浏览器
    } else if (testUa(/trident|compatible|msie/ig)) {
        engine = "trident"; // trident内核
        supporter = "iexplore"; // iexplore浏览器
    }
    // 内核版本
    let engineVs = "unknow";
    if (engine === "webkit") {
        engineVs = testVs(/applewebkit\/[\d.]+/ig);
    } else if (engine === "gecko") {
        engineVs = testVs(/gecko\/[\d.]+/ig);
    } else if (engine === "presto") {
        engineVs = testVs(/presto\/[\d.]+/ig);
    } else if (engine === "trident") {
        engineVs = testVs(/trident\/[\d.]+/ig);
    }
    // 载体版本
    let supporterVs = "unknow";
    if (supporter === "chrome") {
        supporterVs = testVs(/chrome\/[\d.]+/ig);
    } else if (supporter === "safari") {
        supporterVs = testVs(/version\/[\d.]+/ig);
    } else if (supporter === "firefox") {
        supporterVs = testVs(/firefox\/[\d.]+/ig);
    } else if (supporter === "opera") {
        supporterVs = testVs(/opr\/[\d.]+/ig);
    } else if (supporter === "iexplore") {
        supporterVs = testVs(/(msie [\d.]+)|(rv:[\d.]+)/ig);
    } else if (supporter === "edge") {
        supporterVs = testVs(/edge\/[\d.]+/ig);
    }
    // 外壳和外壳版本
    let shell = "none";
    let shellVs = "unknow";
    if (testUa(/micromessenger/ig)) {
        shell = "wechat"; // 微信浏览器
        shellVs = testVs(/micromessenger\/[\d.]+/ig);
    } else if (testUa(/qqbrowser/ig)) {
        shell = "qq"; // QQ浏览器
        shellVs = testVs(/qqbrowser\/[\d.]+/ig);
    } else if (testUa(/ucbrowser/ig)) {
        shell = "uc"; // UC浏览器
        shellVs = testVs(/ucbrowser\/[\d.]+/ig);
    } else if (testUa(/2345explorer/ig)) {
        shell = "2345"; // 2345浏览器
        shellVs = testVs(/2345explorer\/[\d.]+/ig);
    } else if (testUa(/sougoubrowser/ig)) {
        shell = "sougou"; // 搜狗浏览器
    } else if (testUa(/liebaobrowser/ig)) {
        shell = "liebao"; // 猎豹浏览器
    } else if (testUa(/maxthon/ig)) {
        shell = "maxthon"; // 遨游浏览器
        shellVs = testVs(/maxthon\/[\d.]+/ig);
    } else if (testUa(/baidubrowser/ig)) {
        shell = "baidu"; // 百度浏览器
        shellVs = testVs(/baidubrowser [\d.]+/ig);
    }
    return Object.assign({
        engine, // webkit gecko presto trident
        engineVs,
        platform, // desktop mobile
        supporter, // chrome safari firefox opera iexplore edge
        supporterVs,
        system, // windows macos linux android ios
        systemVs
    }, shell === "none" ? {} : {
        shell, // wechat qq uc 2345 sougou liebao maxthon baidu
        shellVs
    });
}

export const isNumber = (s) => {
    let regNum = /^[0-9]+\.?[0-9]*$/;
    if (regNum.test(s)) {
        if (s.indexOf('.') > -1) {
            if (s.split('.')[1].length > 2) {
                s = s.substring(0, 5)
            }
        }
    }
    return s
}