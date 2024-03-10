// Q.1

let str = "Harr\'n";
console.log(str.length);

// Q.2

let sent = `The quick fox jumps over the lazy dog`;
let word = "fox";
console.log(`The word "${word}" ${ sent.includes(word) ? "is" : "is not" } in the sentence`);

// Q.3

let name = "Harry";
let pfx = "Ha";
console.log(name.startsWith(pfx));

// Q.4

let moneyStr = "Please give Rs 1000";
let amount = +moneyStr.slice("Please give Rs ".length);
console.log(amount ,typeof amount);