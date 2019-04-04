let testString = 'harryxiang'

/**----- 字符串反转 -------- */
const reverse1 = string => string.split('').reverse().join('');

// reduce函数签名
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
const reverse2 = string => string.split('').reduce((res,char) => char + res);

reverse2(restString);
/**----- 字符串反转 -------- */