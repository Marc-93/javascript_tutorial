// strings

let day = "monday"

console.log(`[string] Day: ${day} that contains ${day.length} chars`)

//remove white spaces at the end with trim()

let sentence = "hi bye bye    "

console.log(`[string] number of chars from sentence: ${sentence.trim().length}`)

//split strings

let bye = sentence.split(" ")
console.log(`[string] ${bye[1]}`)


// converse string to number

let n1 = "1"
let n2 = "2"

let diff = (n1,n2)=> parseInt(n2) - parseInt(n1)

console.log(`Parsing string to int with diff: ${diff(n1, n2)}`)

// concatenate 

console.log("[string] n1 " + "n2 = n3")

// indexOf string

console.log(`[string] bye is found in ${sentence.indexOf("bye", 4)}`)
