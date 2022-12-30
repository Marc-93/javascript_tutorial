// class
export default class Person {
    constructor(name, last_name)
    {
        this.name = name
        this.last_name = last_name
    }
    age = 29
    location = "Barcelona"
    postal_code = "08007"
    get full_location(){return `${this.location} - ${this.postal_code} `}

    full_name()
    {
        return `${this.name} ${this.last_name}`
    }
}

// let p1 = new Person(name="John", last_name="Doe")

// console.log(`[class] full name: ${p1.full_name()}, age: ${p1.age}, location: ${p1.full_location}`)
