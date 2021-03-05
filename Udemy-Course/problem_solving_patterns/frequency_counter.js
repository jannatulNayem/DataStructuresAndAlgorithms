function validAnagram(arr1, arr2) {
    // add whatever parameters you deem necessary - good luck!
    if(arr1.length != arr2.length){
        return false;
    }

    let object1 = {};
    let object2 = {};

    for(let item of arr1){
        object1[item] = (object1[item] || 0) + 1;
    }

    for(let item of arr2){
        object2[item] = (object2[item] || 0) + 1;
    }

    for(let key in object1){
        if(object1[key] != object2[key])return false;
    }
    return true;
}

console.log(validAnagram('texttwisttime', 'timetwisttext'))
console.log(validAnagram('qwerty', 'qeywrt'))
