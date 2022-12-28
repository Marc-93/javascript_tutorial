// Arrays 

let table = [1,2,3,4,5,6]
console.log(`[arrays] create table: \n ${table}`)

// Add number at last position
table.push(7)
console.log(`[arrays] push: ${table[6]}`)

// Add number at first position
table.unshift(0)
console.log(`[arrays] push: ${table[0]}`)

//display counter
console.log(`[arrays] count fields: ${table.length}`)


// check params in table
console.log(`[arrays] Table includes number 7?`)
if(table.includes(7))
{
    console.log("[arrays] Response: yes!")
}
else 
{
    console.log("[arrays] Response: no!")
}

// filter is used to create a new array filtering by some conditions
condition = table.filter(pos=>pos==0||pos==1)
console.log(`[arrays][filter] create new array with filtered table: \n ${condition}`)

//map is used to create a new array depending on the passaed array and doing some operations
map_array = table.map(pos=>pos*2)
console.log(`[arrays][map] create new array mapping table values: \n ${map_array}`)

// sum of all array content:

let total = table.reduce((sum, pos)=>sum+pos,0)
console.log(`[arrays][total] sum all the values inside the table: ${total}`)


// arrays with strings
let fruits = ["banana", "mango", "Apple"].sort()
console.log(`[arrays][sort] sort string array: \n ${fruits}`)
