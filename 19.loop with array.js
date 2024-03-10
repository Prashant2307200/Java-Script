let nums = [1,2,3,4,5,6];

for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

nums.forEach((elm) => {
    console.log(elm);
});

for(let i in nums){
    console.log(nums[i]);
}

let name = "Harry";
let nameArr = Array.from(name);

for(let elm of nameArr){
    console.log(elm);
}