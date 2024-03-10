let arr = [1,2,3,4,5,6,,7,8];

let mappedArr = arr.map((val,idx,arr) => {
    return val*val;
});

console.log(mappedArr);

let filteredArr = arr.filter((val) => {
    return val < 5;
});

console.log(filteredArr);

let reducedVal = arr.reduce((e1,e2) => {
    return e1+e2;
});

console.log(reducedVal);