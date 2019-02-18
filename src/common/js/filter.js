import Vue from 'vue'
const moment  = require('moment')

/*
* 详情页发布时间
* */
export function detailsReleaseTime(date,judgment) {
    let onlyTime
    switch(judgment) {
      case "kr" :
        //2018-03-05 11:00 (不区分AM和PM，使用二十四小时制）
        moment.locale('ko');
        onlyTime =moment(date).format("YYYY-MM-DD  HH:mm");
        break;
      case "jp" :
        //2018/05/20  11:00 AM（区分AM和PM）
        moment.locale('ja');
        onlyTime =moment(date).format("YYYY/MM/DD  HH:mm A");
        break;
      case "ru" :
        //5 мар. 2018 г. 11:00 （俄罗斯采用24小时时间制）
        moment.locale('ru');
        onlyTime =moment(date).format("DD MMM YYYY [г.]  HH:mm");
        break;
    }
    return onlyTime
}
/*
* 快讯列表时间
* */
export function birefListTime(date) {
let time = moment(date).format('HH:mm')
return time.replace('|','at')
}

export function PrecentFilter(num) {
  if(!num) return '-'
  var STEP = 3;
  var DELIMITER = ',';
  var str = '' + num;
  var arr = str.split('');
  var len = arr.length;

  for(var i = len - STEP; i > 0; i -= STEP) {
    arr.splice(i, 0, DELIMITER);
  }

  return arr.join('');

}
/*
*千位进制
* */
export function formatDouble(value, integer){
  if(!value) return '-'
  var num = parseFloat(value);
  num = num.toFixed(2)+"";
  var str = num.split(".")[0];
  var lis = num.split(".")[1];
  var siz = 0;
  var result = "";
  for (var i=str.length-1;i>=0;i--){
    siz++;
    if (siz%3==0){
      siz=0;
      result = ","+str.substr(i,3)+result;
    }
  }

  if (str.length%3 != 0){
    result = str.substr(0,str.length%3)+result;
  }else{
    result = result.substring(1,result.length);
  }
  if(integer) {
    return result
  } else {
    return result+"."+lis;
  }
}

/* KMB */
export function BinaryProcess(str){
  if(str == '' || str == null) return '--'
  str=Number(str);
  if(0<=str&&str<=999.994){
    // str = str
    str = str.toFixed(2)
  }else if(999.995<=str&&str<=999994) {
    str = (str/1000).toFixed(2)+'K'
  }else if(999995<=str&&str<=999994999){
    str = (str/1000000).toFixed(2)+'M'
  }else if(999995000<=str){
    // str = (str/1000000000).toFixed(2)
    str = formatDouble(str/1000000000) + 'B'
  }
  return str
}
/*
* 限制字符长度
* */

export function  setString(str, len,showEllipsis) {
  if(str == '' || str == null) return
  var strlen = 0;
  var s = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strlen += 2;
    } else {
      strlen++;
    }
    s += str.charAt(i);
    if (strlen >= len) {
      if(showEllipsis){
        return s+"...";
      }else {
        return s
      }

    }
  }
  return s;
}
/*
* 手机号码中间四位用*代替
* */
export function encryptPhone(val){
  if(!val) return;
  return val.replace(/^(\d{3})(\d{4})(\d+)/, '$1****$3')
}
/*
* 格式化金额
* */
export function FormattedAmount(val){
  if(!val) return;
  return val.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')
}
/*
* 不允许输入如下字符: (像 !@#$%^& 等)*
* */

export function CheckUserNameFormat(userName) {
  let first = userName.charCodeAt(0);
  if ((first >= 65 && first <= 90) || (first >= 97 && first <= 122)) {
    let pattern = /^[A-Za-z0-9_]+$/;  //首字母必须是A-Z或者a-z
    if (pattern.test(userName)) {
      return userName
    } else {
      return '请输入合法的用户名'
    }
  }
}
export function qi() {
  // 匹配中文字符：[\u4e00-\u9fa5]
  //   //匹配正整数
  //   return val.replace(/^[1-9]\d*$/,'')
  //   //匹配负数
  //   return val.replace(/^-[1-9]\d*$/,'')
  // //正数
  // ^-?[1-9]\d*$

  // //匹配非负正数（正整数 + 0）
  // ^[1-9]\d*|0$

  // //匹配非正负数（负整数 + 0）
  // ^-[1-9]\d*|0$

  // //匹配正浮点数
  // ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$

  // //匹配负浮点数
  // ^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$

  //身份证
  //^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$

  //6 - 16位字符，区分大小写（不能是9位以下的纯数字，不含空格）:
  //^ (? !\d{ 6, 8 } $) (? ! )(?=.* [a - z])(?=.* [0 - 9])[a - zA - Z0 -9_]{ 6, 16 } $

  //6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母:
  //^ (? !\d{ 6, 8 } $) (? ! )(?=.* [A - Z])(?=.* [a - z])(?=.* [0 - 9])[a - zA - Z0 -9_]{ 6, 16 } $

  //密码不能为纯数字或字母，不少于6位:
  //^ (? ![0 - 9] + $)(?![a - zA - Z] + $)[0 - 9A - Za - z]{ 6,} $
}

const filters = {
    setString: setString,
    PrecentFilter: PrecentFilter,
    formatDouble: formatDouble,
    detailsReleaseTime: detailsReleaseTime,
    birefListTime: birefListTime,
    FormattedAmount:FormattedAmount,
    encryptPhone:encryptPhone
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters
