import {Person} from './js_08_class.js'

let p1 = new Person("John", "Doe")

console.log(`[Import] Person: ${p1.full_name()}\nLocation: ${p1.full_location}`)