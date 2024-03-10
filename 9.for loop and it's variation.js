/*

types of loops :

for
while
do_while
for_of
for_in
for_each

*/

let n = +prompt("Enter number");
let sum = 0;
for(let i = 0; i < n; ++i){
    sum += (i+1);
}
console.log("Sum till",n,"is",sum);

//it is used for object non-iterable things 

let marks = {
    harry : 90 ,
    shubh : 45 ,
    prashant : 98 ,
    ram : 100
}

for(let i = 0; i < Object.keys(marks).length; i++) {
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

for(let item in marks){
    console.log("Marks of " + item + " are " + marks[item]);
}

// it is used for objects iterable things

let name = "Prashant";
for(let ch of name){
    console.log(ch);
}