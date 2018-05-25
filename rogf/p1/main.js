
class Empleados {

    constructor() {
        this.desplegar = this.desplegar.bind(this);
        this.agregar = this.agregar.bind(this);
        this.borrar = this.borrar.bind(this);
    }

    obtener() {
        var that = this;
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

                        let empleados = [];

                        for (let i = 0; i != data.results.length; i++) {

                            let empleado = {
                                email:data.results[i].email,
                                gender:data.results[i].gender,
                                phone:data.results[i].phone,
                                id: Math.floor(Math.random() * 100)
                            };
                            
                            empleados.push(empleado);
                        }
                        
                        localStorage.setItem("empleados", JSON.stringify(empleados));
                        
                        console.log(empleados);
                        
                        that.desplegar();
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

        return "obtener";
    }
    
    agregar(){
        let empleado = {
            email:document.getElementById("email").value,
            gender:document.getElementById("gender").value,
            phone:document.getElementById("phone").value,
            id: Math.floor(Math.random() * 100)
        };
        
        let empleados = JSON.parse(localStorage.getItem("empleados"));
        
        localStorage.removeItem("empleados");
        
        empleados.push(empleado);
        
        console.log(JSON.stringify(empleados));
        localStorage.setItem("empleados", JSON.stringify(empleados));
        
        this.desplegar();
    }
    
    desplegar(){
        
        let empleados = JSON.parse(localStorage.getItem("empleados"));
        console.log(empleados);
        
        var table = document.getElementById("tabla");
        
        table.innerHTML = "";
        
        for (let i = 0; i != empleados.length; i++) {

            // Create an empty <tr> element and add it to the 1st position of the table:
            let rowx = table.insertRow(-1);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            let cell1 = rowx.insertCell(0);
            let cell2 = rowx.insertCell(1);
            let cell3 = rowx.insertCell(2);
            let cell4 = rowx.insertCell(3);

            // Add some text to the new cells:
            cell1.innerHTML = empleados[i].email;
            cell2.innerHTML = empleados[i].gender;
            cell3.innerHTML = empleados[i].phone;
            
            
            let btn = document.createElement("BUTTON");        // Create a <button> element
            let t = document.createTextNode("Borrar"); 
            btn.appendChild(t); // Create a text node
            btn.addEventListener("click", this.borrar);
            btn.value = empleados[i].id;
            
            cell4.appendChild(btn);                                // Append the text to <button>
        }
    }
    
    borrar(e){
        
        console.log(e.target.value);
        
        let empleados = JSON.parse(localStorage.getItem("empleados"));
        console.log(empleados);
        
        for (let i = 0; i != empleados.length; i++) {
            debugger
            // Detect to delete
        }
        
        console.log(JSON.stringify(empleados));
        
        localStorage.removeItem("empleados");
        
        localStorage.setItem("empleados", JSON.stringify(empleados));
        
        this.desplegar();
    }
}


let em = new Empleados();

console.log(em.obtener());

document.getElementById("agregar").addEventListener("click", em.agregar);