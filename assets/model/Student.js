import Person from "./Person.js"

export default class Student extends Person{
    constructor( id , name , address , email ,toan, ly, hoa, type){
        super(id, name , address,email)
        this.toan = toan
        this.ly = ly
        this.hoa = hoa
        this.type = type
    }
}