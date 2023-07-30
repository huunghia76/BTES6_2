import Person from "./Person.js"

export default class Employee extends Person{
    constructor( id , name , address , email ,dayWork, salary ,type){
        super(id, name , address,email)
        this.dayWork = dayWork
        this.salary = salary
        this.type = type
    }
}