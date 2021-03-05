function countUniqueValues(arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length == 0) return 0
    else if(arr.length == 1) return 1

    let i = 0;
    let j = 1;

    while(j < arr.length){
        if(arr[i] == arr[j]){
            j++;
        }else{
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return arr.slice(0, i+1).length;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))