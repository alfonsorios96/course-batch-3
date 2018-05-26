import Employees from './Employees.js';

export default class Controller {

    constructor() {
        this.display = this.display.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    retrieve() {
        
        Employees.getAll(this.display);
        
    }

    add() {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let gender = document.getElementById("gender").value;
        let phone = document.getElementById("phone").value;
        let cell = document.getElementById("cell").value;

        Employees.add(name, email, gender, phone, cell);
        this.display();
    }

    display() {

        let employees = JSON.parse(localStorage.getItem("employees"));
        console.log(employees);

        let table = document.getElementById("tabla");

        table.innerHTML = "";
        table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Gender</th><th>Phone</th><th>Cell</th></tr>";

        for (let i = 0; i != employees.length; i++) {

            // Create an empty <tr> element and add it to the 1st position of the table:
            let rowx = table.insertRow(-1);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            let cell0 = rowx.insertCell(0);
            let cell1 = rowx.insertCell(1);
            let cell2 = rowx.insertCell(2);
            let cell3 = rowx.insertCell(3);
            let cell4 = rowx.insertCell(4);
            let cell5 = rowx.insertCell(5);

            // Add some text to the new cells:
            cell0.innerHTML = employees[i].name;
            cell1.innerHTML = employees[i].email;
            cell2.innerHTML = employees[i].gender;
            cell3.innerHTML = employees[i].phone;
            cell4.innerHTML = employees[i].cell;


            // Create a <button> element
            let btn = document.createElement("BUTTON");
            let t = document.createTextNode("Borrar");
            // Create a text node
            btn.appendChild(t);
            btn.addEventListener("click", this.remove);
            btn.value = employees[i].id;

            // Append the text to <button>
            cell5.appendChild(btn);
        }
    }

    remove(e) {

        console.log(e.target.value);

        Employees.remove(e.target.value);
        this.display();
    }
}