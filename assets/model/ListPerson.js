function ListPerson() {
    // 
    this.arrPerson = []

    this.addPerson = function addPerson(person) {
        this.arrPerson.push(person);
    }
    this.deletePerson = function deletePerson(r) {
        var index = -1;
        // Tìm index sv cần xóa
        for (var i = 0; i < this.arrPerson.length; i++) {
            var id = this.arrPerson[i].id
            // console.log(id, r);
            if (id === r) {
                index = i;
            }
        }
        // console.log("index: ", index);
        if (index !== -1) {
            this.arrPerson.splice(index,1);
        }
    }
    this.findPerson = function (idPerson) {
        // var index = -1;
        // Tìm index sv cần xóa
        // console.log(this.arrPerson);
        for (let i = 0; i < this.arrPerson.length; i++) {
            let id = this.arrPerson[i].id
            // console.log(id, idPerson);
            if (id === idPerson) {
                return i;
            }
        }
        return -1
    }
    this.updatePerson = function ( person ) {
        // console.log(person);
        var index = this.findPerson( person.id )
        if (index !== -1) {
            this.arrPerson[index] = person ;
        }
    }
    
}