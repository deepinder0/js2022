// console.log('hello'); 

// we can do it in console also









/** 24 min values and veriables in javascript */

// you cannot use reserved keyword for javascript var names
var myName = 'Deepinder Singh';
var myAge = 21;

console.log(myName + myAge);

//1 program that accept two integers and display the larger

// let a = 10;
// let b = 20;
// console.log(a > b ? a : b);

//2 conditional statement to find the sign of product of three numbers
// let arr = [3, 7, 1];
// let product = 1;
// for(let i = 0; i < arr.length; i++){
//     product = arr[i] * product;
// }
// if(product >= 0){
//     console.log("Product is +ve and it is " + product);
// } else{
//     console.log("Product is -ve and it is " + product);
// }

//3 conditional statement to sort three numbers
// let arr = [0, 4, -13];
// if(arr[0] < arr[1] && arr[0] < arr[2]){
//     if(arr[1] < arr[2]){
//         //[0,1,2]
//         arr = arr;
//     } else{
//         //[0,2,1]
//         let temp = arr[2];
//         arr[2] = arr[1];
//         arr[1] = temp;
//     }
// } else if(arr[1] < arr[0] && arr[1] < arr[2]){
//     if(arr[0] < arr[2]){
//         //[1,0,2]
//         let temp = arr[1];
//         arr[1] = arr[0];
//         arr[0] = temp;
//     } else{
//         //[1,2,0]
//         let temp = arr[2];
//         let temp1 = arr[1]
//         arr[2] = arr[0];
//         arr[1] = temp;
//         arr[0] = temp1;
//     }
// } else if(arr[2] < arr[0] && arr[2] < arr[1]){
//     if(arr[0] < arr[1]){
//         //[2,0,1]
//         let temp = arr[1];
//         let temp1 = arr[0];
//         arr[0] = arr[2];
//         arr[1] = temp1;
//         arr[2] = temp;
//     } else{
//         //[2,1,0]
//         let temp = arr[0];
//         arr[0] = arr[2];
//         arr[2] = temp;
//     }
// }
// console.log(arr);

// 4 conditional statement to find the largest of five numbers

// let arr = [1,2,7,4,5];
// if(arr[0]>= arr[1] && arr[0] >= arr[2] && arr[0] > arr[3] && arr[0] > arr[4]){
//     console.log(arr[0]);
// } else if(arr[1]>= arr[0] && arr[1] >= arr[2] && arr[1] > arr[3] && arr[1] > arr[4]){
//     console.log(arr[1]);
// } else if(arr[2]>= arr[0] && arr[2] >= arr[1] && arr[2] > arr[3] && arr[2] > arr[4]){
//     console.log(arr[2]);
// } else if(arr[3]>= arr[0] && arr[3] >= arr[1] && arr[3] > arr[2] && arr[3] > arr[4]){
//     console.log(arr[3]);
// } else {
//     console.log(arr[4]);
// }

//5 for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
// for(let i = 0; i <= 15; i++){
//     if(i%2 == 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
// }

//6 