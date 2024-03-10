// Q.1

let arr = [1,2,3,4,5,6];
let a = +prompt("Enter num ");
arr.push(a);
console.log(arr);

// Q.2

let arr1 = [1,2,3,4,5,6];
let a1;
do{
    a1 = +prompt("Enter num ");
    arr.push(a1);
    console.log(arr1);
}while(a1 != 0);

// Q.3

let arr2 = [1,2,3,4,5,6];
let filteredArr = arr2.filter(elm => elm%2 == 0);
console.log(filteredArr);

// Q.4

let arr3 = [1,2,3,4,5,6];
let squreArr = arr3.map(elm => elm**2);
console.log(squreArr);

// Q.5

let arr4 = [1,2,3,4,5,6];
let multiply = arr4.reduce((elm1,elm2) => elm1*elm2);
console.log(multiply);