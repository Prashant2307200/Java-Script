// var is before es6 and let / const are after es6
// var add it in window object unlike let / const
// var is hoisted unlike let / const
// var is functionally scoped and let / const are block scoped
// var can be redeclared ,update within its scope 
// let can be updated but not redeclared
// const only intialize neither redeclared nor updated
// var initialize with undefined where as let / const are not initialized 
// const must be initialized with declaration unlike let / const

function greet(){
    {
        var a = 12;
        let b = "Harry";
        const c = 300;
        console.log(b,c);
    }
    console.log(a);
    // console.log(b);
}
// console.log(a);
greet()

var d;
console.log(d);
