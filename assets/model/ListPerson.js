function ListPerson() {
    // 
    this.arrPerson = []

    this.addPerson = function addPerson(person) {
        this.arrPerson.push(person);
        this.setLocalStorage('add')
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
        if (index !== -1) {
            this.arrPerson.splice(index,1);
        }
        this.setLocalStorage('delete')
    }
    this.findPerson = function (idPerson) {
        // var index = -1;
        // Tìm index sv cần xóa
        for (let i = 0; i < this.arrPerson.length; i++) {
            let id = this.arrPerson[i].id
            if (id === idPerson) {
                return i;
            }
        }
        return -1
    }
    this.updatePerson = function ( person ) {
        console.log('update');
        var index = this.findPerson( person.id )
        if (index !== -1) {
            this.arrPerson[index] = person ;
        }
        this.setLocalStorage('update')
    }

    this.init = function () {
        this.arrPerson = JSON.parse(localStorage.getItem('QLHV'))
    }
    this.setLocalStorage = function (type = null) {
        let data = JSON.stringify(this.arrPerson);
        localStorage.setItem("QLHV", data);
    }
    
    this.getLocalStorage = function () {
       return this.arrPerson
    }
}