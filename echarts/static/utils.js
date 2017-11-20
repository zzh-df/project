
/**
 *---------------------------------------------------------
 * Fn_name: isFunction
 * Fn_DES: 判断是否Function
 * @param:  ,/type: 任何类型的值/ 默认值: / 描述:
 *
 *---------------------------------------------------------
 */

const isFunction= function (fn){
    return Object.prototype.toString.call(fn)=='[object Function]'?true:false;
}

/**
 *---------------------------------------------------------
 * Fn_name: isObject
 * Fn_DES: 判断是否{}
 * @param:  obj,/type: 任何类型的值/ 默认值: / 描述:
 *
 *---------------------------------------------------------
 */

const isObject = function (obj){
    return Object.prototype.toString.call(obj)=='[object Object]'?true:false;
}

/**
 * 精确判断数据的类型
 * @param {*任何类型} obj
 */
const typeOf= function (obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

/**
 *---------------------------------------------------------
 * Fn_name: deepCopy
 * Fn_DES: 对象或数组的深度copy
 * @param:  ,/type: {}/[]/ 默认值: / 描述:
 *
 *---------------------------------------------------------
 */

/**
 *---------------------------------------------------------
 * Fn_name: deepCopy
 * Fn_DES: 对象或数组的深度copy
 * @param: data ,/type: {}/[]/ 默认值: / 描述:
 *
 *---------------------------------------------------------
 */


const deepCopy = function (data) {
  var t = Object.prototype.toString.call(data).replace(/\[object\s|\]/g, '');
  var o;

  if (t === 'array') {
    o = [];
      for (var i = 0; i < data.length; i++) {
        o.push(copy(data[i]));
      }
  } else if (t === 'object') {
    o = {};
      for (var j in data) {
        o[j] = copy(data[j]);
      }
  } else {
    return data;
  }
  return o;
}


/**
 *---------------------------------------------------------
 * Fn_name: extend
 * Fn_DES: 合并{}
 * @param:  ,/type: / 默认值: / 描述:
 *
 *---------------------------------------------------------
 */
const extend = function () {
  if (arguments.length == 0) return;
  var str=Object.prototype.toString;
  var target=null;
  //判断第一个参数是否布尔值
  var s = typeof arguments[0] == 'boolean' ? 1 : 0;
  target=arguments[s]; //把第一个作为目标对象
  for (var j = s+1; j < arguments.length; j++) {  //遍历合并
    // if (typeOf(arguments[j]) != 'object') return;
    if (str.call(arguments[j])=='[object Object]') {  //如果是{}
    target=str.call(target)!='[object Object]'?{}:target;
      if(s==1 && arguments[0]==true){
        for (var key in arguments[j]) {
          target[key]=extend(true,target[key], arguments[j][key]);
        }
      }else{
        for (var key in arguments[j]) {
          target[key] = arguments[j][key];
        }
      }// Object.assgin(target,arguments[j]);
    }else if(str.call(arguments[j])=='[object Array]'){  //如果是[]
      target=str.call(target)!='[object Array]'?[]:target;
      if(s==1 && arguments[0]==true){
        for (var m=0;m<arguments[j].length;m++) {
          target[m]=extend(true,target[m], arguments[j][m]);
        }
      }else{
        for (var m=0;m<arguments[j].length;m++) {
          target[m]=arguments[j][m];
        }
      }
    }else{  //其他类型
      target=arguments[j];
    }
  }
return target;
}

/**
 *---------------------------------------------------------
 * Fn_name: date
 * Fn_DES: 格式化日期
 * @param:  date,/type: 日期的原始值/ 默认值: / 描述:
 * @param:  format,/type: string/ 默认值: 'yyyy-MM-dd'/ 描述:
 *        y:表示年，四位'yyyy'和两位'yy'
 *        M:表示月，'MM' 'M'
 *        d:表示日，同上
 *        h:表示小时；m:表示分；s:表示秒
 *
 *---------------------------------------------------------
 */

const date = function (date, format) {
  if (!date) return;
  var fmt = format ? format : 'yyyy-MM-dd';
  var date = new Date(date);
  var time = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  }
  //格式化：今天/昨天/更久
  fmt = fmt.replace(/C/g, function (v) {
    var c = '更久';
    if ((v.length > 0) && (time.y == new Date().getFullYear()) && (time.M == new Date().getMonth() + 1)) {
      if (time.d == new Date().getDate()) {
        c = '今天'
      } else if (time.d == new Date().getDate() - 1) {
        c = '昨天'
      }
    }
    return c;
  });
  // 格式化
  fmt = fmt.replace(/M+|d+|h+|m+|s+/g, function (v) {
    return ((v.length > 1 ? '0' : '') + time[v.slice(-1)]).slice(-2);
  });
  // 格式化年
  fmt = fmt.replace(/y+/g, function (v) {
    return time.y.toString().slice(-(v.length))
  });
  return fmt
};

/**
 *---------------------------------------------------------
 * Fn_name: date
 *
 *---------------------------------------------------------
 */
const rnd = function(n,m){
    return Math.floor(Math.random()*(m-n)+n);
}

export {
    copy,
    date,
    isFunction,
    isObject,
    typeOf,
    extend,
    rnd
}
