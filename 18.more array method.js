let num  = [14555,2,3656,4,535,456,7,8,9];
let numMore = [10,11,12]
let numMore2 = [13,14,15,16];

delete num[0];
console.log(num.length);

console.log(num.concat(numMore,numMore2));

let myCmp = (a,b) => { 
    return a-b;
}

num.sort(myCmp);
console.log(num);

num.reverse();
console.log(num);

let delVal = num.splice(2,3,39,393,3929);
console.log(num ,delVal);

console.log(num.slice(1,3));

