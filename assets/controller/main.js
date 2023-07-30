import Student from "../model/Student.js";
import Employee from '../model/Employee.js';
import Customer from '../model/Customer.js';
let arrPerson = new ListPerson();
arrPerson.init()

const getElement = (selector) => {
    return document.querySelector(selector);
};
const namePattern = /^[\p{L}\s']+$/u
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const addressPattern = /^[\p{L}\d\s.,-]+$/u

const lengthValue = (id, idThongbao, min, messErr) => {
    let idValue = getElement(id).value.trim()
    if (idValue.length <= min) {
        getElement(idThongbao).style.display = 'block'
        getElement(idThongbao).innerHTML = messErr
        return false
    } else {
        getElement(idThongbao).style.display = 'none'
        return true
    }
}
const patternTest = (idTest, idThongbao, pattern, messErr) => {
    if (pattern.test(getElement(idTest).value)) {
        getElement(idThongbao).style.display = 'none'
        return true
    } else {
        getElement(idThongbao).style.display = 'block'
        getElement(idThongbao).innerHTML = messErr
        return false
    }
}
const idTest = () => {
    let idLenght = lengthValue('#inputId', '.thongbaoId', 0, 'Vui lòng nhập mã người dùng')
    if (idLenght) {
        let valueTest = getElement('#inputId').value
        let trung = false
        arrPerson.arrPerson.forEach(value => {
            if (value.id === valueTest) {
                trung = true
            }
        })
        if (trung) {
            getElement('.thongbaoId').style.display = 'block'
            getElement('.thongbaoId').innerHTML = 'Mã người dùng bị trùng. Vui lòng nhập mã khác'
            return false
        } else {
            getElement('.thongbaoId').style.display = 'none'
            return true
        }
    } else return false
}
const nameTest = () => {
    let nameLenght = lengthValue('#inputName', '.thongbaoName', 0, 'Không được bỏ trống')
    if (nameLenght) {
        let namePatternTest = patternTest('#inputName', '.thongbaoName', namePattern, 'Tên chỉ bao gồm các kí tự chữ cái')
        if (namePatternTest) { return true } else return false
    } else return false
}
const emailTest = function () {
    let emailLenght = lengthValue('#inputEmail', '.thongbaoEmail', 0, 'Không được bỏ trống')
    if (emailLenght) {
        let emailPatternTest = patternTest('#inputEmail', '.thongbaoEmail', emailPattern, 'Email không đúng định dạng')
        if (emailPatternTest) {
            return true
        } else return false
    } else return false
}
const adressTest = function () {
    let adressLenght = lengthValue('#inputAddress', '.thongbaoAddress', 0, 'Không được bỏ trống')
    if (adressLenght) {
        let adressPatternTest = patternTest('#inputAddress', '.thongbaoAddress', addressPattern, 'Địa chỉ chỉ bao gồm chữ và số')
        if (adressPatternTest) {
            return true
        } else return false
    } else return false
}
const diemTest = function (idTest, idThongbao, messErr) {
    let diem = getElement(idTest).value
    if (diem === '') {
        getElement(idThongbao).style.display = 'block'
        getElement(idThongbao).innerHTML = 'Vui lòng nhập điểm'
        return false
    } else {
        if (diem < 0 || diem > 10) {
            getElement(idThongbao).style.display = 'block'
            getElement(idThongbao).innerHTML = messErr
            return false
        } else {
            getElement(idThongbao).style.display = 'none'
            return true
        }
    }

}
const salaryTest = function () {
    let inputSalary = getElement('#inputSalary').value
    if (inputSalary === '') {
        getElement('.thongbaoSalary').style.display = 'block'
        getElement('.thongbaoSalary').innerHTML = 'Vui lòng nhập số lương'
        return false
    } else if (inputSalary < 0) {
        getElement('.thongbaoSalary').style.display = 'block'
        getElement('.thongbaoSalary').innerHTML = ' Số lương phải từ 0 - 1.000.000.000'
        return false
    } else {
        getElement('.thongbaoSalary').style.display = 'none'
        return true
    }
}

const DayWorkTest = function () {
    let inputDayWork = getElement('#inputDayWork').value
    if (inputDayWork === '') {
        getElement('.thongbaoDayWork').style.display = 'block'
        getElement('.thongbaoDayWork').innerHTML = 'Vui lòng nhập số ngày làm '
        return false
    } else if (inputDayWork < 0 || inputDayWork > 1000000000) {
        getElement('.thongbaoDayWork').style.display = 'block'
        getElement('.thongbaoDayWork').innerHTML = 'Ngày làm phải lớn hơn hoặc bằng 0'
        return false
    } else {
        getElement('.thongbaoDayWork').style.display = 'none'
        return true
    }
}
const companyTest = () => {
    let companyLength = lengthValue('#inputCompanyName', '.thongbaoCtyName', 0, 'Tên công ty không được bỏ trống')
    if (companyLength) {
        let companyPatternTest = patternTest('#inputCompanyName', '.thongbaoCtyName', addressPattern, 'Tên công ty chỉ bao gồm chữ và số')
        if (companyPatternTest) {
            return true
        } else return false
    } else return false

}

const hoaDonTest = function () {
    let hoaDon = getElement('#inputTriGiaHD').value
    if (hoaDon === '') {
        getElement('.thongbaoHD').style.display = 'block'
        getElement('.thongbaoHD').innerHTML = 'Vui lòng nhập Giá hoá đơn'
        return false
    } else if (hoaDon < 0 || hoaDon > 10000000000) {
        getElement('.thongbaoHD').style.display = 'block'
        getElement('.thongbaoHD').innerHTML = 'Giá trị hoá đơn phải từ 0 - 10.000.000.000'
        return false
    } else {
        getElement('.thongbaoHD').style.display = 'none'
        return true
    }
}
const rateTest = () => {
    let rateLenght = lengthValue('#inputRate', '.thongbaoRate', 0, 'Rate không được bỏ trống')
    if (rateLenght) {
        let ratePatternTest = patternTest('#inputRate', '.thongbaoRate', addressPattern, 'Rate chỉ bao gồm chữ và số')
        if (ratePatternTest) {
            return true
        } else return false
    } else return false

}
getElement("#addPerson").onclick = () => {
    getElement("#myForm").reset();
    getElement("#inputId").disabled = false;
    getElement("#btnUpdate").style.display = "none";
    getElement("#btnSaveModal").style.display = "inline-block";
    getElement('#inputSelect').style.display = "inline-block";
};
getElement("#inputSelect").onchange = () => {
    const valOption = getElement("#inputSelect").value
    if (valOption === '') {
        getElement('#inputSelected').innerHTML = ''
    }
    if (valOption === 'student') {
        getElement('#inputSelected').innerHTML = `
        <div class="row row-cols-1 row-cols-lg-3">
            <div class="mb-3">
                <label for="inputToan" class="form-label">Toán</label>
                <input type="text" class="form-control" id="inputToan"
                name="inputToan" placeholder="Enter your Toan">
                <p class="text-danger thongbaoToan"></p>
            </div>
            <div class="mb-3">
                <label for="inputLy" class="form-label">Lý</label>
                <input type="text" class="form-control" id="inputLy" name="inputLy"
                    placeholder="Enter your Ly">
                    <p class="text-danger thongbaoLy"></p>
            </div>
            <div class="mb-3">
                <label for="inputHoa" class="form-label">Hóa</label>
                <input type="text" class="form-control" id="inputHoa" name="inputHoa"
                    placeholder="Enter your Hoa">
                    <p class="text-danger thongbaoHoa"></p>
            </div>
        </div>
        `
    }
    if (valOption === 'employee') {
        getElement('#inputSelected').innerHTML = `
        <div class="row row-cols-1 row-cols-lg-2">
            <div class="mb-3">
                <label for="inputDayWork" class="form-label">Số ngày làm việc</label>
                <input type="text" class="form-control" id="inputDayWork" name="inputDayWork"
                    placeholder="Enter your Day Work">
                    <p class="text-danger thongbaoDayWork"></p>
            </div>
            <div class="mb-3">
                <label for="inputSalary" class="form-label">Lương theo ngày</label>
                <input type="text" class="form-control" id="inputSalary" name="inputSalary"
                    placeholder="Enter your Ly">
                    <p class="text-danger thongbaoSalary"></p>
            </div>
        </div>
        `
    }
    if (valOption === 'customer') {
        getElement('#inputSelected').innerHTML = `
        <div class="row ">
            <div class="col mb-3">
                <label for="inputCompanyName" class="form-label">Tên công ty</label>
                <input type="text" class="form-control" id="inputCompanyName" name="inputCompanyName"
                    placeholder="Enter your Company Name">
                    <p class="text-danger thongbaoCtyName"></p>

            </div>
            <div class="col mb-3">
                <label for="inputTriGiaHD" class="form-label">Trị giá hóa đơn</label>
                <input type="text" class="form-control" id="inputTriGiaHD" name="inputTriGiaHD"
                    placeholder="Enter your Trị giá hóa đơn">
                    <p class="text-danger thongbaoHD"></p>

            </div>
            <div class="col mb-3">
                <label for="inputRate" class="form-label">Rate</label>
                <input type="text" class="form-control" id="inputRate" name="inputRate"
                    placeholder="Enter your Rate">
                    <p class="text-danger thongbaoRate"></p>

            </div>
        </div>
        `
    }

}

const getValueStudent = () => {
    let student = {};
    const elements = document.querySelectorAll("#personForm input , #personForm select");
    elements.forEach((ele) => {
        // destructuring
        const { name, value } = ele;
        student[name] = value; //dynamic key get name dom input html
    });
    // tạo đối tượng món ăn từ class student
    const { inputId, inputName, inputAddress, inputEmail, inputToan, inputLy, inputHoa, inputSelect } = student;

    return new Student(
        inputId, inputName, inputAddress, inputEmail, inputToan, inputLy, inputHoa, inputSelect
    );
};
const getValueEmployee = () => {
    let emp = {};
    const elements = document.querySelectorAll("#personForm input , #personForm select");
    elements.forEach((ele) => {
        // destructuring
        const { name, value } = ele;
        emp[name] = value; //dynamic key get name dom input html
    });
    // tạo đối tượng món ăn từ class emp
    const { inputId, inputName, inputAddress, inputEmail, inputDayWork, inputSalary, inputSelect } = emp;
    return new Employee(inputId, inputName, inputAddress, inputEmail, inputDayWork, inputSalary, inputSelect);
};
const getValueCustomer = () => {
    let cus = {};
    const elements = document.querySelectorAll("#personForm input , #personForm select");
    elements.forEach((ele) => {
        // destructuring
        const { name, value } = ele;
        cus[name] = value; //dynamic key get name dom input html
    });
    // tạo đối tượng món ăn từ class cus
    const { inputId, inputName, inputAddress, inputEmail, inputCompanyName, inputTriGiaHD, inputRate, inputSelect
    } = cus;
    return new Customer(
        inputId, inputName, inputAddress, inputEmail, inputCompanyName, inputTriGiaHD, inputRate, inputSelect
    );
};

// get danh sách sinh viên từ localStorage
function getLocalStorage() {
    return arrPerson.arrPerson;
}

function renderListPerson(arr = arrPerson.arrPerson)  {
    let contenthtml = "";
    // let parseData = JSON.parse(arr)

    if (!arr) {
        return
    }
    arr.forEach((data) => {
        contenthtml += `
        <tr>
            <td class="text-center">${data.id}</td>
            <td>${data.name}</td>
            <td>${data.address}</td>
            <td>${data.email}</td>
            <td class="text-center"> 
            <button class="btn btn-outline-success" 
            data-bs-toggle="modal" data-bs-target="#detailModal"
             onclick="detailNd('${data.id}')"><i class="fa-regular fa-eye"></i></button>
            <button class="btn btn-outline-secondary"  
            onclick="editPerson('${data.id}')" data-bs-toggle="modal"
            data-bs-target="#exampleModal"><i class="fa-regular fa-pen-to-square"></i></button>
                <button class="btn btn-outline-danger" 
                onclick="deletePerson('${data.id}')"><i class="fa-solid fa-trash"></i></button>
            </td>
            </tr>
        `;
    });
    getElement("#tbodyPerson").innerHTML = contenthtml;
}

getElement("#btnSaveModal").onclick = () => {
    let a = getElement('#inputSelect').value
    if (idTest() && adressTest() && nameTest() && emailTest()) {
        if (a === 'student') {
            if (diemTest('#inputToan', '.thongbaoToan', 'Điểm toán không hợp lệ (0- 10)') &&
                diemTest('#inputLy', '.thongbaoLy', 'Điểm lý không hợp lệ (0- 10)') &&
                diemTest('#inputHoa', '.thongbaoHoa', 'Điểm hóa không hợp lệ (0- 10)')) {
                let sinhVien = getValueStudent();
                arrPerson.addPerson(sinhVien); // add thêm Sinh viên
            }

        } else if (a === 'employee') {
            if (DayWorkTest() && salaryTest()) {
                let emp = getValueEmployee();
                arrPerson.addPerson(emp); // add thêm Sinh viên
            }

        } else if (a === 'customer') {
            if (companyTest() && hoaDonTest() && rateTest) {
                let cus = getValueCustomer();
                arrPerson.addPerson(cus); // add thêm Sinh viên
            }

        } else {
            getElement('.thongbaoSelect').innerHTML = 'Vui lòng chọn loại học viên'
        }

    }
    renderListPerson();
};


window.deletePerson = (person) => {
    arrPerson.deletePerson(person);
    renderListPerson();
};
// Cập nhật lại sinh viên
getElement("#btnUpdate").onclick = function () {
    let arrSP = localStorage.getItem('QLHV')
    let parseData = JSON.parse(arrSP)
    let i = getElement('#inputId').value

    if (adressTest() && nameTest() && emailTest()) {
        parseData.forEach((data, index) => {
            if (data.id === i) {
                if (data.type === 'student') {
                    if (diemTest('#inputToan', '.thongbaoToan', 'Điểm toán không hợp lệ (0- 10)') &&
                        diemTest('#inputLy', '.thongbaoLy', 'Điểm lý không hợp lệ (0- 10)') &&
                        diemTest('#inputHoa', '.thongbaoHoa', 'Điểm hóa không hợp lệ (0- 10)')) {
                        // Lấy lại thông tin sinh viên sau khi chỉnh sửa xong
                        var student = getValueStudent();
                        arrPerson.updatePerson(student);
                    }
                }
                if (data.type === 'employee') {
                    if (DayWorkTest() && salaryTest()) {
                        // Lấy lại thông tin sinh viên sau khi chỉnh sửa xong
                        var emp = getValueEmployee();
                        arrPerson.updatePerson(emp);
                    }
                }
                if (data.type === 'customer') {
                    if (companyTest() && hoaDonTest() && rateTest()) {
                        // Lấy lại thông tin sinh viên sau khi chỉnh sửa xong
                        var cus = getValueCustomer();
                        arrPerson.updatePerson(cus);
                    }
                }
            }
        })
    }

    //  render lại UI
    renderListPerson();
};
window.editPerson = (id) => {
    let arrSP = localStorage.getItem('QLHV')
    let parseData = JSON.parse(arrSP)

    getElement("#inputId").disabled = true;
    getElement("#btnUpdate").style.display = "inline-block";
    getElement("#btnSaveModal").style.display = "none";
    getElement('#inputSelect').style.display = 'none'

    var index = arrPerson.findPerson(id);
    var person = parseData[index];
    if (person.type === 'student') {
        getElement('#inputSelected').innerHTML = `
        <div class="row row-cols-1 row-cols-lg-3">
            <div class="mb-3">
                <label for="inputToan" class="form-label">Toán</label>
                <input type="text" class="form-control" id="inputToan"
                name="inputToan" placeholder="Enter your Toan">
                <p class="text-danger thongbaoToan"></p>

            </div>
            <div class="mb-3">
                <label for="inputLy" class="form-label">Lý</label>
                <input type="text" class="form-control" id="inputLy" name="inputLy"
                    placeholder="Enter your Ly">
                    <p class="text-danger thongbaoLy"></p>

            </div>
            <div class="mb-3">
                <label for="inputHoa" class="form-label">Hóa</label>
                <input type="text" class="form-control" id="inputHoa" name="inputHoa"
                    placeholder="Enter your Hoa">
                    <p class="text-danger thongbaoHoa"></p>
            </div>
        </div>
        `;
        // đẩy data lên input
        getElement("#inputId").value = person.id;
        getElement("#inputName").value = person.name;
        getElement("#inputAddress").value = person.address;
        getElement("#inputEmail").value = person.email;
        getElement("#inputToan").value = person.toan;
        getElement("#inputLy").value = person.ly;
        getElement("#inputHoa").value = person.hoa;

        var studentInfo = getValueStudent();
        arrPerson.updatePerson(studentInfo);

        renderListPerson();

    }
    if (person.type === 'employee') {
        getElement('#inputSelected').innerHTML = `
        <div class="row row-cols-1 row-cols-lg-2">
            <div class="mb-3">
                <label for="inputDayWork" class="form-label">Số ngày làm việc</label>
                <input type="text" class="form-control" id="inputDayWork" name="inputDayWork"
                    placeholder="Enter your Day Work">
                    <p class="text-danger thongbaoDayWork"></p>

            </div>
            <div class="mb-3">
                <label for="inputSalary" class="form-label">Lương theo ngày</label>
                <input type="text" class="form-control" id="inputSalary" name="inputSalary"
                    placeholder="Enter your salary">
                    <p class="text-danger thongbaoSalary"></p>

            </div>
        </div>
        `;
        // đẩy data lên input
        getElement("#inputId").value = person.id;
        getElement("#inputName").value = person.name;
        getElement("#inputAddress").value = person.address;
        getElement("#inputEmail").value = person.email;
        getElement("#inputDayWork").value = person.dayWork;
        getElement("#inputSalary").value = person.salary;

        var empInfo = getValueEmployee();
        arrPerson.updatePerson(empInfo);

        renderListPerson();

    }
    if (person.type === 'customer') {
        getElement('#inputSelected').innerHTML = `
        <div class="row ">
            <div class="col mb-3">
                <label for="inputCompanyName" class="form-label">Tên công ty</label>
                <input type="text" class="form-control" id="inputCompanyName" name="inputCompanyName"
                    placeholder="Enter your Company Name">
                    <p class="text-danger thongbaoCtyName"></p>

            </div>
            <div class="col mb-3">
                <label for="inputTriGiaHD" class="form-label">Trị giá hóa đơn</label>
                <input type="text" class="form-control" id="inputTriGiaHD" name="inputTriGiaHD"
                    placeholder="Enter your Trị giá hóa đơn">
                    <p class="text-danger thongbaoHD"></p>

            </div>
            <div class="col mb-3">
                <label for="inputRate" class="form-label">Rate</label>
                <input type="text" class="form-control" id="inputRate" name="inputRate"
                    placeholder="Enter your Rate">
                    <p class="text-danger thongbaoRate"></p>

            </div>
        </div>
        `;
        // đẩy data lên input
        getElement("#inputId").value = person.id;
        getElement("#inputName").value = person.name;
        getElement("#inputAddress").value = person.address;
        getElement("#inputEmail").value = person.email;
        getElement("#inputCompanyName").value = person.compName;
        getElement("#inputTriGiaHD").value = person.triGiaHD;
        getElement("#inputRate").value = person.rate;

        var cusInfo = getValueCustomer();
        arrPerson.updatePerson(cusInfo);

        renderListPerson();

    }
};



window.detailNd = (id) => {

    let arrSP = localStorage.getItem('QLHV')
    let parseData = JSON.parse(arrSP)
    parseData.map(data => {
        if (data.id === id) {
            if (data.type === 'student') {

                getElement('#detailContent').innerHTML = `
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th>Tên người dùng:</th>
                            <th>${data.name}</th>
                        </tr>
                        <tr>
                            <td>Mã người dùng:</td>
                            <td>${data.id}</td>
                        </tr>
                        <tr>
                            <td>Địa chỉ:</td>
                            <td>${data.address}</td>
                        </tr>
                        <tr class="border-bottom">
                            <td>Email:</td>
                            <td>${data.email}</td>
                        </tr>
                        <tr>
                            <td>Điểm toán:</td>
                            <td>${data.toan}</td>
                        </tr>
                        <tr>
                            <td>Điểm lý:</td>
                            <td>${data.ly}</td>
                        </tr>
                        <tr class="border-bottom">
                            <td>Điểm hoá:</td>
                            <td>${data.hoa}</td>
                        </tr>
                    </tbody>
                   </table>
                `
            } else if (data.type === 'customer') {
                getElement('#detailContent').innerHTML = `
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th>Tên người dùng:</th>
                            <th>${data.name}</th>
                        </tr>
                        <tr>
                            <td>Mã người dùng:</td>
                            <td>${data.id}</td>
                        </tr>
                        <tr>
                            <td>Địa chỉ:</td>
                            <td>${data.address}</td>
                        </tr>
                        <tr class="border-bottom">
                            <td>Email:</td>
                            <td>${data.email}</td>
                        </tr>
                        <tr>
                            <td>Tên công ty:</td>
                            <td>${data.compName}</td>
                        </tr>
                        <tr class="border-bottom">
                            <td>Giá trị hoá đơn:</td>
                            <td>${data.triGiaHD}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Đánh giá:</td>
                            <td class="fw-bold">${data.rate}</td>
                        </tr>
                    </tbody>
                   </table>
                `
            } else if (data.type === 'employee') {
                getElement('#detailContent').innerHTML = `
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th>Tên người dùng:</th>
                            <th>${data.name}</th>
                        </tr>
                        <tr>
                            <td>Mã người dùng:</td>
                            <td>${data.id}</td>
                        </tr>
                        <tr>
                            <td>Địa chỉ:</td>
                            <td>${data.address}</td>
                        </tr>
                        <tr class="border-bottom">
                            <td>Email:</td>
                            <td>${data.email}</td>
                        </tr>
                        <tr>
                            <td>Số ngày làm:</td>
                            <td>${data.dayWork}</td>
                        </tr>
                        <tr class="border-bottom">
                            <td>Lương theo ngày:</td>
                            <td>${data.salary}</td>
                        </tr>
                    </tbody>
                   </table>
                `
            }
        }

    })
}
//Filter theo type
const filterRole = function (type) {
    // getLocalStorage()
    console.log(arrPerson.arrPerson);
    let filter = arrPerson.arrPerson.filter((value) => {
        console.log(value.type, type);
        return value.type === type
    })
    console.log(arrPerson.arrPerson);
    return filter
}
getElement('#filterBtn').onchange = function () {
    let role = getElement('#filterBtn').value
    if (role !== '') {
        let filter = filterRole(role)
        renderListPerson(filter)
    } else renderListPerson()
}

//Sort theo tên
const sortND = () => {
    // getLocalStorage()
    console.log(arrPerson.arrPerson);
    let arrSorted = arrPerson.arrPerson.sort((a, b) => {
        let namea = a.name.toUpperCase()
        let nameb = b.name.toUpperCase()
        return namea.localeCompare(nameb)
    })
    renderListPerson(arrSorted)
    console.log(arrPerson.arrPerson);

}
getElement('#sort').onchange = function () {
    if (getElement('#sort').value === 'name') {
        sortND()
    } else if (getElement('#sort').value === '') {
        getLocalStorage()
        renderListPerson()
    }
}

getLocalStorage();
renderListPerson();