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
export const userDepartData = (soure, id, parentId) => {
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

export const handleData = (source, id, parentId, children) => {
    return source.filter(father => {
        if (father[id] && father[parentId] === null) {
            let branchArr = source.filter(child => father[id] === child[parentId]);
            if (branchArr.length > 0) {
                father[children] = branchArr
            }
            if (father.list && father.list.length > 0) {
                return father
            }
        }
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

export const sortByKey = (array, key) => {
    return array.sort((a, b) => {
        let x = a[key];
        let y = b[key];
        return ((x < y) ? -1 : (x > y) ? 1 : 0)
    })
}



export const uniqueArray = (array, key) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][key] === array[j][key]) {
                array[i] = Object.assign(array[i], array[j])
            }
        }
    }
    var result = []
    var json_arr = []
    for (let i = 0; i < array.length; i++) {
        if (result.indexOf(array[i][key]) === -1) {
            result.push(array[i][key]);
            json_arr.push(array[i])
        }
    }

    return json_arr
}


export const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
        'Mobile' :
        'Desktop';

//表单转换为对象
export const formToObject = form =>
    Array.from(new FormData(form)).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: value
        }), {}
    );


export const backTop = (btnId) => {
    var btn = document.getElementById(btnId);
    var d = document.documentElement;
    var b = document.body;
    window.onscroll = set;
    btn.style.display = "none";
    btn.onclick = function () {
        btn.style.display = "none";
        window.onscroll = null;
        this.timer = setInterval(function () {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            if (d.scrollTop + b.scrollTop == 0)
                clearInterval(btn.timer, (window.onscroll = set));
        }, 10);
    };

    function set() {
        btn.style.display = d.scrollTop + b.scrollTop > 100 ? "block" : "none";
    }
}
// backTop("goTop");

// 事例
//formToObject(document.querySelector('#form'));
// { email: 'test@email.com', name: 'Test Name' }


export const isMobileUserAgent = () => {
    return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
        window.navigator.userAgent.toLowerCase()
    );
}
//按照字母排序
export const setSort = (K1) => {
    var text = K1.value
        .split(/[\r\n]/)
        .sort()
        .join("\r\n"); //顺序
    var test = K1.value
        .split(/[\r\n]/)
        .sort()
        .reverse()
        .join("\r\n"); //反序
    K1.value = K1.value != text ? text : test;
}

/*
1、< 60s, 显示为“刚刚”
2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
*/
export const timeFormat = (time) => {
    var date = new Date(time),
        curDate = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 10,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        curYear = curDate.getFullYear(),
        curHour = curDate.getHours(),
        timeStr;

    if (year < curYear) {
        timeStr = year + "年" + month + "月" + day + "日 " + hour + ":" + minute;
    } else {
        var pastTime = curDate - date,
            pastH = pastTime / 3600000;

        if (pastH > curHour) {
            timeStr = month + "月" + day + "日 " + hour + ":" + minute;
        } else if (pastH >= 1) {
            timeStr = "今天 " + hour + ":" + minute + "分";
        } else {
            var pastM = curDate.getMinutes() - minute;
            if (pastM > 1) {
                timeStr = pastM + "分钟前";
            } else {
                timeStr = "刚刚";
            }
        }
    }
    return timeStr;
}


export const transform = (tranvalue) => {
    try {
        var i = 1;
        var dw2 = new Array("", "万", "亿"); //大单位
        var dw1 = new Array("拾", "佰", "仟"); //小单位
        var dw = new Array(
            "零",
            "壹",
            "贰",
            "叁",
            "肆",
            "伍",
            "陆",
            "柒",
            "捌",
            "玖"
        );
        //整数部分用
        //以下是小写转换成大写显示在合计大写的文本框中
        //分离整数与小数
        var source = splits(tranvalue);
        var num = source[0];
        var dig = source[1];
        //转换整数部分
        var k1 = 0; //计小单位
        var k2 = 0; //计大单位
        var sum = 0;
        var str = "";
        var len = source[0].length; //整数的长度
        for (i = 1; i <= len; i++) {
            var n = source[0].charAt(len - i); //取得某个位数上的数字
            var bn = 0;
            if (len - i - 1 >= 0) {
                bn = source[0].charAt(len - i - 1); //取得某个位数前一位上的数字
            }
            sum = sum + Number(n);
            if (sum != 0) {
                str = dw[Number(n)].concat(str); //取得该数字对应的大写数字，并插入到str字符串的前面
                if (n == "0") sum = 0;
            }
            if (len - i - 1 >= 0) {
                //在数字范围内
                if (k1 != 3) {
                    //加小单位
                    if (bn != 0) {
                        str = dw1[k1].concat(str);
                    }
                    k1++;
                } else {
                    //不加小单位，加大单位
                    k1 = 0;
                    var temp = str.charAt(0);
                    if (temp == "万" || temp == "亿")
                        //若大单位前没有数字则舍去大单位
                        str = str.substr(1, str.length - 1);
                    str = dw2[k2].concat(str);
                    sum = 0;
                }
            }
            if (k1 == 3) {
                //小单位到千则大单位进一
                k2++;
            }
        }
        //转换小数部分
        var strdig = "";
        if (dig != "") {
            var n = dig.charAt(0);
            if (n != 0) {
                strdig += dw[Number(n)] + "角"; //加数字
            }
            var n = dig.charAt(1);
            if (n != 0) {
                strdig += dw[Number(n)] + "分"; //加数字
            }
        }
        str += "元" + strdig;
    } catch (e) {
        return "0元";
    }
    return str;
}
//拆分整数与小数
export const splits = (tranvalue) => {
    var value = new Array("", "");
    temp = tranvalue.split(".");
    for (var i = 0; i < temp.length; i++) {
        value = temp;
    }
    return value;
}
