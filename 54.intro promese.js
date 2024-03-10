let promise = new Promise((resolve,reject) => {
    alert("Hello");
    resolve(53);
});
console.log(promise);

/*
promese is a promise of a code execution
it is in two state state and result
also state has to possiblities it's either resolve or reject
if it's resolved then do further more else stop it
*/