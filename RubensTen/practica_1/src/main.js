const url = 'https://randomuser.me/api/?results=2';

class Main {
    contructor() {
    }
    
    printEmpleados() {
        const empleados = new Empleados();
        empleados.getEmpleados().then((empleados) => {
            this.generarTabla(empleados);
        }, (error) => {
            alert('Error al obtener empleados');
        });
    }

    generarTabla(listaEmpleados) {
        const body = document.getElementsByTagName("body")[0];
        const tabla = document.createElement("table");
        const tblBody = document.createElement("tbody");

        
        for(const empleado in listaEmpleados) {
            let hilera = document.createElement("tr");
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(
                'Email: ' + listaEmpleados[empleado].email
            );
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            tblBody.appendChild(hilera);
        }

        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", "2");

    }
}


document.getElementById('get-empleados').addEventListener('click', () => {
    const main = new Main();
    main.printEmpleados();
});