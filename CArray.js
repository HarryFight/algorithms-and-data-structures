/**
 * 数组生成测试类
 * 
 * 资料：
 * https://www.cnblogs.com/liyongshuai/p/7197962.html
 */

class CArray {
    constructor(numElements, isOrder) {
        this.dataStore = new Array(numElements);
        this.pos = 0;
        this.numElements = numElements;

        this.setData();

        if(isOrder){
            this.dataStore = this.dataStore.sort();
        }
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
    selectionSort(_array) {
        _array = _array ? _array : this.dataStore.concat([]);
        console.time('selectionSort');

        let minIndex;
        for (let i = 0; i < _array.length - 1; i++) {
            //每次循坏，已排序区增加（剩余最后1个数的时候不用再排序了）
            minIndex = i;

            for (let j = i; j < _array.length; j++) {
                //在未排序区内找到最小值的index
                if (_array[j] < _array[minIndex]) {
                    minIndex = j
                }
            }

            if (minIndex == i) break;
            //起始位和最小下标交换
            let _temp = _array[minIndex];
            _array[minIndex] = _array[i];
            _array[i] = _temp;
        }

        console.timeEnd('selectionSort');
        return _array
    }


    /**
     * 插入排序
     * 从左到右，从第二个数开始取值到排序区比较（从后往前，同时把后面数的位置往后挪），到合适的位置后进行下一次循坏。
     * 
     * 平均O(n^2)  最好O(n)  最坏O(n^2)
     */
    insertSort(_array) {
        _array = _array ? _array : this.dataStore.concat([]);
        console.time('insertSort');

        //从第二个数开始选取到排序区插值
        for (let i = 1; i < _array.length; i++) {
            //用于插入比较的值
            let insertItem = _array[i];
            //排序区比较数的下标（从最后一个开始）
            let sortIndex = i - 1;

            //当插值 比 比较数小，则把数往后移动（当sortIndex为-1，表示已经比较完了，把插值放入第一个）
            while (sortIndex >= 0 && _array[sortIndex] > insertItem) {
                _array[sortIndex + 1] = _array[sortIndex];

                //继续往前比较
                sortIndex--;
            }

            //放入插值到比较后的位置
            _array[sortIndex + 1] = insertItem;
        }

        console.timeEnd('insertSort');

        return _array;
    }

    /**
     * 希尔排序
     * 先对数组元素进行分组，进行插入排序，然后减小间隔，继续进行插入排序。
     * 
     * 平均O(n*logn)  最好O(n*log2n)  
     */
    shellSort(_array) {
        _array = _array ? _array : this.dataStore.concat([]);

        console.time('shellSort');

        //取数组长度一半为初始间隔，每轮循坏后间隔减半，直到为1
        for (let gap = Math.floor(_array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {

            console.log('gap:' + gap, _array)
            //这里循环长度为数组length，是因为这里实际是对每个分组合并进行插入排序
            for (let i = gap; i < _array.length; i++) {
                //用于插入比较的值
                let insertItem = _array[i];
                // console.log(i,insertItem,_array)
                //排序区比较数的下标（从最后一个开始）
                let sortIndex = i - gap;

                //当插值 比 比较数小，则把数往后移动（当sortIndex为-1，表示已经比较完了，把插值放入第一个）
                while (sortIndex >= 0 && _array[sortIndex] > insertItem) {
                    _array[sortIndex + gap] = _array[sortIndex];

                    //继续往前比较
                    sortIndex = sortIndex - gap;
                }

                //放入插值到比较后的位置
                _array[sortIndex + gap] = insertItem;
            }

        }

        console.timeEnd('shellSort');
        return _array;
    }

    /**
     * 归并排序
     * 将数组自顶向下分成小组，小组之间两两按序合并，最后得到大的顺序数组
     * 
     * 平均O(n*logn) 最好O(n*logn)  最坏O(n*logn)
     */
    mergeSort(_array) {
        _array = _array ? _array : this.dataStore.concat([]);

        console.time('mergeSort');
        _array = _sort(_array);
        console.timeEnd('mergeSort');
        return _array;


        function _sort(array) {
            let len = array.length;
            //当数组元素为1时，不用进行分组，直接返回进行排序
            if (len < 2) {
                return array;
            }

            let middleIndex = Math.floor(len / 2);
            let left = array.slice(0, middleIndex);
            let right = array.slice(middleIndex);

            //递归分组排序处理
            let _left = _sort(left);
            let _right = _sort(right);

            //对两组数组进行顺序合并
            return merge(_left, _right);
        }


        function merge(left, right) {
            let result = [];

            //当子数组都不为空时，根据子数组第一个元素大小决定放入result顺序
            while (left.length && right.length) {
                if (left[0] > right[0]) {
                    result.push(right.shift())
                } else {
                    result.push(left.shift())
                }
            }

            //left || right有一个已经为空数组了
            if (left.length) {
                result = result.concat(left)
            } else if (right.length) {
                result = result.concat(right)
            }

            return result;
        }
    }


    /**
     * 快速排序
     * 1、选择一个基准元素，将列表分隔成两个子序列;
     * 2、对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面;
     * 3、分别对较小元素的子序列和较大元素的子序列重复步骤 1 和 2。
     * 
     * 平均O(n*logn) 最好O(n*logn)  最坏O(n^2)
     */
    quickSort(_array) {
        _array = _array ? _array : this.dataStore.concat([]);

        console.time('quickSort');
        _array = _sort(_array);
        console.timeEnd('quickSort');

        return _array;

        function _sort(_arr) {
            if (_arr.length < 2) return _arr;

            //中间位置
            var pivotIndex = Math.floor(_arr.length / 2);
            //基准值
            var pivot = _arr.splice(pivotIndex, 1)[0];
            // console.log(pivot)
            var left = [];
            var right = [];

            for (var i = 0; i < _arr.length; i++) {
                //小于中间值的放在left，大于放right
                if (_arr[i] < pivot) {
                    left.push(_arr[i]);
                } else {
                    right.push(_arr[i]);
                }
            }

            //对子序列进行递归
            let _left = _sort(left);
            let _right = _sort(right);

            //将排序好的数组组合返回
            return _left.concat([pivot], _right);
        }
    };


    /**
     * todo: 堆排序
     */


    /**
     * todo：计数排序
     */


    /**
     * todo：桶排序
     */



    /**
    * 二分查找有序数组
    * 
    * 1、将数组的第一个位置设置为下边界(0)。
    * 2、将数组最后一个元素所在的位置设置为上边界(数组的长度减 1)。
    * 3、若下边界等于或小于上边界，则做如下操作。
        * a. 将中点设置为(上边界加上下边界)除以 2。
        * b. 如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标加 1。 
        * c. 如果中点的元素大于查询的值，则将上边界设置为中点元素所在下标减 1。 
        * d. 否则中点元素即为要查找的数据，可以进行返回。
    */
    binarySearch(target, _array) {
        _array = _array ? _array : this.dataStore.sort();
        console.time('binarySearch');

        let start = 0;
        let end = _array.length - 1;
        let pos = -1;

        //若下边界等于或小于上边界，继续缩减范围查找
        while (start <= end) {
            //重设中轴点
            let mid = parseInt(start + (end - start) / 2);

            if (target == _array[mid]) {
                //找到该元素
                pos = mid;
            } else if (target > _array[mid]) {
                //继续缩减范围
                start = mid + 1;
            } else {
                //继续缩减范围
                end = mid - 1;
            }
        }

        console.timeEnd('binarySearch');

        return pos;
    }

}