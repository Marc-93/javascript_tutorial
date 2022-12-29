// objects

const person = {
    name : "John",
    lastName : "Doe",
    fullname : function()
    {
        return `${this.name} ${this.lastName}`
    }
}

// access type
console.log(`[objects] person data: ${person.fullname()}`)

console.log(`[objects] person name: ${person.name}, last name: ${person.lastName}`)

//update property
person.name = "tester"
console.log(`[objects] person name: ${person['name']}, last name: ${person['lastName']}`)

// chechking extra properties
console.log(`[objects] gender is in object? ${'gender' in person}`)

person.gender = "male"

console.log(`[objects] gender: ${person.gender}`)

console.log(`[objects] gender is in object? ${'gender' in person}`)
