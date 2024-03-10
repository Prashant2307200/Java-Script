let age = +prompt("What is your age?");

//Q.1

if(age>10 && age<20){
    console.log("Your age lies between 10 and 20");
}else{
    console.log("Your age does not lies between 10 and 20");
}

//Q.2

let isTrue = age>10 && age<20;
switch(isTrue){
    case true :
        console.log("Your age lies between 10 and 20");
        break;
    case false :
        console.log("Your age does not lies between 10 and 20");
        break;
    default :
        console.log("Not possible");
}

//Q.3

if(age%2==0 && age%3==0){
    console.log("Divisible by 2 and 3");
}else if(age%2==0){
    console.log("Divisible by 2");
}else if(age%3==0){
    console.log("Divisible by 3");
}else{
    console.log("Divisible by none");
}

//Q.4
let isDrive = age>18 ? "Drive" : "not Drive";
console.log("You can",isDrive);