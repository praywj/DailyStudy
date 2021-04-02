
//从小到大排序
//选择排序：每次找一个最小的交换位置
function SelectSort(arr){
    var len = arr.length;
    if(len<2)
        return arr;
    var temp;
    for(var i=0;i<len-1;i++){
        var min = i;
        for(var j=i+1;j<len;j++){
            if(arr[j]<a[min])
            {
                min = j;
            }
        }
        temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
    return arr;
}

//插入排序  向前插入一个一个比较
function InsertSort(arr){
    var len = arr.length;
    if(len<2)
        return arr;
    for(var i=0;i<len;i++){

        for(var j=i-1;j>=0&&arr[j]>arr[i];j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = arr[i];
    }
    return arr;
}

//冒泡排序 相邻两个元素比较 每次交换最大的元素都到了最后
//优化：如果一轮没有任何交换则说明已经是有序的
function BubbleSort(arr){
    var len = arr.length;
    if(len<2)
        return arr;
    for(var i=0;i<len-1;i++){
        for(var j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//希尔排序 插入排序的一种优化 相隔gap进行插入
function ShellSort(arr){
    var len = arr.length;
    if(len<2)
        return arr;
    for(var gap=len/2; gap>=1; gap/=2){
        // 每组轮流排序
        for(var i=gap;i<len;i++){
            for(var j=i-gap;j>=0&&arr[j]>arr[i]; j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = arr[i];
        }
    }
    return arr;
}

//归并排序 先拆分后合并
function merge(arr, left, mid, right){
    var len_l=mid-left+1;
    var len_r=right-mid;
    var arr_temp=Array();
    var cur=0;
    while(len_l>0&&len_r>0){
        if(arr[left]<a[mid]){
            arr_temp[cur++]=arr[left++];
            len_r--;
        }else{
            arr_temp[cur++]=arr[mid++];
            len_r--;
        }
    }
    for(var i=0;i<len_l;i++){
        arr_temp[cur++]=arr[left++];
    }
    for(var i=0;i<len_r;i++){
        arr_temp[cur++]=arr[mid++];
    }
    for(var i=0;i<cur;i++){
        arr[left++]=arr_temp[i];
    }

}
function mergeSort(arr, left, right){
    var len = arr.length;
    if(len<2)
        return arr;

    if(left<right){
        var mid=Math.floor((left+right)/2);
        arr=mergeSort(arr, left, mid);
        arr=mergeSort(arr, mid+1, right);
        arr=merge(arr, left, mid, right);
    }
    return arr;
}
//快速排序
function quickSort(arr, left, right){
    var len = arr.length;
    if(len<2)
        return arr;
    if(left<right){
        var partition_mid=partition(arr,left,right);
        arr=quickSort(arr,left,partition_mid-1);
        arr=quickSort(arr,partition_mid+1,right);
    }
    return arr;

}
function partition(arr,left,right){
    var mid=arr[left],
        start=left+1,
        end=right,
        temp;
    while(true){
        while(arr[start++]<mid){
            if(start==right)
                break;
        }
        while(arr[end--]>mid){
            if(end==left)
                break;
        }
        if(start>=end)
            break;
        //交换后继续扫描
        temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
    }
    arr[left]=arr[end];
    arr[end]=mid;
    return end;
    
}

//快排非递归
function quicksort1(arr, left, right){
    
}

//计数排序

//桶排序 最快