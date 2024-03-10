let pocketMoney = prompt("What is your pocket money ? ");
pocketMoney = Number.parseInt(pocketMoney);

if(pocketMoney > 5000){
    if(pocketMoney > 10000){
        alert("Road trip with Neha");
    }else{
        alert("Shopping with Neha");
    }
}else if(pocketMoney > 2000){
    alert("Shopping with Rashmi");
}else{
    alert("Friends");
}

let age = 2;
console.log("You can", age > 18 ? "drive" : "not drive");