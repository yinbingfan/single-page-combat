import Vue from 'vue'


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

const filters = {
  setString: setString,
  PrecentFilter: PrecentFilter,
  formatDouble: formatDouble
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters
