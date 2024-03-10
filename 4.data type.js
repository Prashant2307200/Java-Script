/*
1. primitive :
    null
    number
    boolean
    bigint
    symbol
    string
    undefined

2. non - primitive :  creates reference variable
    {} [] ()
*/

let a = null;
let b = 39;
let c = true;
let d = BigInt("49");
let e = "Harry";
let f = Symbol("Hey ,i'm a nice symbol");
let g = undefined;

console.log(a ,typeof a);
console.log(b ,typeof b);
console.log(c ,typeof c);
console.log(d ,typeof d);
console.log(e ,typeof e);
console.log(f ,typeof f);
console.log(g ,typeof g);

let h = Boolean(b);
let i = Number(c);
let j = String(b);

console.log(h ,typeof h);
console.log(i ,typeof i);
console.log(j ,typeof j);

const item = {
    Harry : true,
    Shubh : false,
    Lovish : 65,
    Rohan : undefined
}

console.log(item ,typeof item);
console.log(item["Shubh"]);
console.log(item.Harry);
