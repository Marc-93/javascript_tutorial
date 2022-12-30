// class

class Person {
    constructor(name, last_name)
    {
        this.name = name
        this.last_name = last_name
    }
    age = 29
    get location(){return "Vilanova"}

    full_name()
    {
        return `${this.name} ${this.last_name}`
    }
}

let p1 = new Person(name="marc", last_name="AC")

console.log(`[class] full name: ${p1.full_name()}, age: ${p1.age}, location: ${p1.location}`)
