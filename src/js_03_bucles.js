// bucle

//while
console.log("\n[while]")
let i = 1
while(i<4)
{
    console.log(`[while] iteration: ${i}`);
    i++
}


// do while (first iteration is always executed)
console.log("\n[do while]")
let j = 1
do
{
    console.log(`[do while] iteration: ${j}`);
    j++
} while(j<4)

//for 
console.log("\n[For]")
for (k = 1; k < 4; k++)
{
    console.log(`[while] iteration: ${k}`);
    //stop bucle
    if(k==3)
    {
        break
    }
}

// for in lists
let list_of_names = ['marc', 'rachel', 'roy', 'ares']

for (let name in list_of_names){
    console.log(`[for] name: ${list_of_names[name]}`)
}
