/**
 * 数组生成测试类
 */

class CArray {
    constructor(numElements) {
        this.dataStore = new Array(numElements);
        this.pos = 0;
        this.numElements = numElements;

        this.setData();
    }

    setData() {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * 100);
        }
    }

    clear() {
        for (var i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }

    insert(element) {
        this.dataStore[this.pos++] = element;
    }

    toString() {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + " ";
            if (i > 0 & i % 10 == 0) {
                retstr += "\n";
            }
        }
        return retstr;
    }

    swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    //冒泡排序
    bubblesort(_array) {
        _array = _array ? _array : this.dataStore;

        //每次冒泡可以把最大的数换到末尾，未排序部分-1，，冒泡的总次数应该为数组长度-1（最后剩余一个未排序的时候就不用冒泡了）
        for (let _outerLen = _array.length; _outerLen > 1; _outerLen--) {

            //对未排序部分
            for (let i = 0; i < _outerLen; i++) {
                //两两排序交换
                if (_array[i] > _array[i + 1]) {
                    let _temp = _array[i];
                    _array[i] = _array[i + 1];
                    _array[i + 1] = _temp;
                }
            }
        }

        return _array
    }
}