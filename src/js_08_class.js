// class
export class Person {
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
