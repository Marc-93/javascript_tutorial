// inheritance 
import {Person} from './js_08_class.js'


class Pet extends Person
{
    constructor(name, last_name){
        super(name, last_name)

    }
    get full_location(){
        return `location`
    }
}

let pet1 = new Pet("Roy", "AC")

console.log(`${pet1.full_name()}: location: ${pet1.full_location}`)