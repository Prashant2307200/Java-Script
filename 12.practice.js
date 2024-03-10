//Q.1

let marks = {
    harry : 90 ,
    shubh : 45 ,
    prashant : 98 ,
    ram : 100
}

for(let i = 0; i < Object.keys(marks).length; i++) {
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//Q.2

let cn = 4;
do{
    let n = prompt("Enter number: ");
    console.log("try again");
}while(n != cn);

//Q.3

let mean = function(){
    let sum = 0;
    for(let item of arguments) {
        sum += item;
    }
    return sum/arguments.length;
}
console.log(mean(1,2));
console.log(mean(1,2,3))
console.log(mean(1,2,3,4));