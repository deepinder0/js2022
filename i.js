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

//6 compute, the average marks of the following students Then, this average is used to determine the corresponding grade
// let marks = [80,77,88,95,68];
// let totalMraks = 0;
// for(let i = 0; i < marks.length; i++){
//     totalMraks += marks[i];
// }
// let avgMarks = totalMraks/marks.length;

// console.log(avgMarks);
// if(avgMarks < 60){
//     console.log('F');
// }  else if(avgMarks < 70){
//     console.log('D');
// } else if(avgMarks < 80){
//     console.log('C');
// } else if(avgMarks < 90){
//     console.log('B');
// } else {
//     console.log('A');
// }

//7 JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
// for(let i = 1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i, " FizzBuzz");
//     } else if(i % 5 == 0){
//         console.log(i, " Buzz");
//     } else if (i % 3 == 0){
//         console.log(i, " Fizz");
//     }
// }

// 9 program to find the armstrong numbers of 3 digits
// 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 9 = 153
// for(let i = 1; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         for(let k = 0; k < 10; k++){
//             let powered = Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3);
//             let num = (i * 100 + j * 10 + k);
//             if(powered == num){
//                 console.log(num, powered);
//             }
//         }
//     }
// }

// 10 pattern
// for(let i = 0; i < 5; i++){
//     let arr = [];
//     for(let j = 0; j <= i; j++){
//         arr.push('*')
//     }
//     console.log(...arr);
// }

// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
// let a = 36;
// let b = 81;
// while(a!=b){
//     if(a>b){
//         a = a -b;
//     } else{
//         b = b - a;
//     }
// }
// console.log(a);

// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000
// let sum = 0;
// for(let i = 0; i < 1000; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         sum += i;
//     }
// }
// console.log(sum);