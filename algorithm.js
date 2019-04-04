let testString = 'harryxiang'

/**----- 字符串反转 -------- */
const reverse1 = string => string.split('').reverse().join('');

// reduce函数签名
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
const reverse2 = string => string.split('').reduce((res,char) => char + res);

reverse2(testString);
/**---------------------- */


/**----- 回文判断 -------- */
function isPalindrome(string){
    return string.split('').reverse().join('') === string.split('').join('');
}
/**---------------------- */


/**----- 整数反转 -------- */
function reverseInteger(number){
    return parseInt(number.toString().split('').reverse().join(''))*Math.sign(number);
}
/**---------------------- */


/**----- 出现次数最多的字符 -------- */
function maxCharacter(string){
    let _obj = {};
    let _max = 0;
    let _maxChar = '';

    for(let index in string){
        //当undefined + 1时返回NaN
        _obj[string[index]] = _obj[string[index]] + 1  || 1;
    }

    for(let _char in _obj){
        if(_obj[_char] > _max){
            _max = _obj[_char];
            _maxChar = _char;
        }
    }

    return _maxChar
}
/**---------------------- */