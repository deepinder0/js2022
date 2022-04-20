let arr = [1,2,3,10,5,6,7,8,9];

for(let i = 0; i < arr.length; i++){
    let temp = 0;
    for(let j = 0; j < arr.length - 1 - i; j++){
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
    }
}
console.log(...arr);