
// variables

var a = "any type of value"
var a = "the result can be reassigned + updated"

let b = "the result cannot be reassigned"
b = "the result can be updated, cannot be updated"

const c = "the result cannot be reassigned neither updated"


// display type of variable
console.log(`var: ${a} -> ${typeof(a)}`);
console.log(`let: ${b} -> ${typeof(b)}`);
console.log(`const: ${c} -> ${typeof(c)}`);
