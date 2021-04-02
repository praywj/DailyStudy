/**
 * 二分法：每次处理去除一半
 * @param {*} arr 
 * @param {*} key 
 */
function binarySearch(arr, key){
    var low = 0, high = arr.length-1;
    while(low<=high){
        var mid = Math.floor((low + high) / 2);
        if(arr[mid]===key){
            return mid;
        }
        if(arr[mid]<key){
            low = mid+1;
        }
        if(arr[mid]>key){
            high = mid-1;
        }
    }
    return -1;
}
console.log(binarySearch([1,5,7,8,10,20,30],10));

/**
 * 分治法：一个复杂的问题分解成若干个相同或者相似的子问题，然后将子问题合并，每个子问题相互独立
 * 例子：归并排序
 */