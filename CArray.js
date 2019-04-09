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

    /** 
     * 冒泡排序
     * 两两交换，每一轮循坏将最大的数放在末尾，排序区长度递减
     * 
     * 平均O(n^2)  最好O(n)  最坏O(n^2)
     * 
     *  */
    bubblesort(_array) {
        _array = _array ? _array : this.dataStore.concat([]);
        console.time('bubblesort');

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

        console.timeEnd('bubblesort');
        return _array
    }


    /**
     * 选择排序
     * 从左到右，每次遍历把最小和未排序区最左边对调，已排序区增加1，未排序区减1
     * 
     * 平均O(n^2)  最好O(n^2)  最坏O(n^2)
     * 小于1000条数据，选择排序比冒泡更优
     */
    selectionSort(_array){
        _array = _array ? _array : this.dataStore.concat([]);
        console.time('selectionSort');

        let minIndex;
        for(let i=0; i<_array.length-1; i++){
            //每次循坏，已排序区增加（剩余最后1个数的时候不用再排序了）
            minIndex = i;

            for(let j=i; j< _array.length;j++){
                //在未排序区内找到最小值的index
                if(_array[j] < _array[minIndex]){
                    minIndex = j
                }
            }

            if(minIndex == i) return;
             //起始位和最小下标交换
             let _temp = _array[minIndex];
             _array[minIndex] = _array[i];
             _array[i] = _temp;
        }

        console.timeEnd('selectionSort');
        return _array
    }



}