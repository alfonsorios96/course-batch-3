import {
    sha256
} from 'js-sha256';

export default class Employees{
    
    static getAll(callback){
        
        fetch('https://randomuser.me/api/')
            .then(
                function (response) {
                    
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        console.log(data);

                        let employees = [];

                        for (let i = 0; i != data.results.length; i++) {

                            let employee = {
                                name:data.results[i].name.first,
                                email: data.results[i].email,
                                gender: data.results[i].gender,
                                phone: data.results[i].phone,
                                cell: data.results[i].cell,
                                id: sha256(Math.floor(Math.random() * 1000).toString())
                            };

                            employees.push(employee);
                        }

                        console.log(employees);
                        
                        localStorage.setItem("employees", JSON.stringify(employees));
                        
                        callback();

                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }
    static add(name, email, gender, phone, cell){
        let employee = {
            name:name,
            email: email,
            gender: gender,
            phone: phone,
            cell:cell,
            id: sha256(Math.floor(Math.random() * 1000).toString())
        };

        let employees = JSON.parse(localStorage.getItem("employees"));

        localStorage.removeItem("employees");

        employees.push(employee);

        console.log(JSON.stringify(employees));
        localStorage.setItem("employees", JSON.stringify(employees));
        
    }
    static remove(id){

        let employees = JSON.parse(localStorage.getItem("employees"));
        console.log(employees);
        let element = null;
        for (let i = 0; i != employees.length; i++) {

            // Detect to delete
            if (employees[i].id === id) {
                element = i;
                break;
            }
        }
        if (element !== null) {
            employees.splice(element, 1);
        }

        console.log(JSON.stringify(employees));

        localStorage.removeItem("employees");

        localStorage.setItem("employees", JSON.stringify(employees));
    }
}