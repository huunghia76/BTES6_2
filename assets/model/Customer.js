import Person from "./Person.js"

export default class Customer extends Person{
    constructor( id , name , address , email ,compName, triGiaHD, rate, type){
        super(id, name , address,email)
        this.compName = compName
        this.triGiaHD = triGiaHD
        this.rate = rate
        this.type = type
    }
}


