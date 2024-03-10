let arr = [39,343,94,49,39];

let arrStr = arr.toString();
console.log(arrStr ,typeof arrStr);

let sent = arr.join(' ');
console.log(sent ,typeof sent);

let popped = arr.pop();
console.log(arr ,popped);

let newLen = arr.push(3);
console.log(arr ,newLen);

let popped2 = arr.shift();
console.log(arr ,popped2);

let newLen2 = arr.unshift(2);
console.log(arr ,newLen2);

console.log(arr.reverse());

let lstNum = arr.findLast(x => x>5);
let lstIdxNum = arr.findLastIndex(x => x>5);
console.log(lstNum ,lstIdxNum);

// console.log(arr.toSpliced(0,1));
// console.log(arr.toSorted());
// console.log(arr.with(2,4));
