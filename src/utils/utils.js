/**
 * 最简单且最安全的方法显示一个值，举个例子: 
 * var obj = {a: 123 }
   maybe(_=> obj.a, 0); // 123
   maybe(_=> obj.b, 0); // 0
   maybe(_=> obj.a.b.s.w.holy.shit.fuck.god, 0); // 0
 */
export const maybe = (fn, n = '') => {
    try {
        const result = fn()
        return (result && result === result && result !== 'NaN' && result !== 'undefined' && result !== 'Invalid date') ? result : n
    } catch (err) {
        return n
    }
}

/**
 * 获取数组最后一位
 */
Array.prototype.last = function () {
    return this[this.length - 1]
} 


/**
 * 判断对象是否是一个空的对象，既{}
 */
export const isEmptyObject = obj => {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

/**
 * 将对象转化为formdata格式
 */
export const obj2formdata = (json) => {
    var data = new FormData()
    if (json) {
        Object.keys(json).forEach(function(key) {
            data.append(key, json[key])
        });
    }
    return data
}


/**
 * 将对象转化为GET参数
 */
export const obj2formdatastr = (body) => {
    if (body) {
        let formparams = '';
        Object.keys(body).forEach(key => {
            if (formparams.length > 0) {
                formparams += '&';
            }
            formparams = formparams + key + '=' + body[key];
        });
        return formparams
    }
    return ''
}

/**
 * 函数节流（throttle）
 */
export const throttle = (func, wait, options) => {
  var timeout, context, args, result;
  // 标记时间戳
  var previous = 0;
  // options可选属性 leading: true/false 表示第一次事件马上触发回调/等待wait时间后触发
  // options可选属性 trailing: true/false 表示最后一次回调触发/最后一次回调不触发
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : +(new Date());
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    // 记录当前时间戳
    var now = +(new Date());
    // 如果是第一次触发且选项设置不立即执行回调
    if (!previous && options.leading === false)
    // 将记录的上次执行的时间戳置为当前
    previous = now;
    // 距离下次触发回调还需等待的时间
    var remaining = wait - (now = previous);
    context = this;
    args = arguments;

    // 等待时间 <= 0或者不科学地 > wait（异常情况）
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
          // 清除定时器
        clearTimeout(timeout);
        // 解除引用
        timeout = null;
      }
      // 将记录的上次执行的时间戳置为当前
      previous = now;

      // 触发回调
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
    // 在定时器不存在且选项设置最后一次触发需要执行回调的情况下
    // 设置定时器，间隔remaining时间后执行later
    else if (!timeout && options.trailing !== false)    {
      timeout = setTimeout(later, remaining);
    }
   return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};