class Empleados {

    constructor() {
        this.http = new Http();
    }

    getEmpleados() {
        return new Promise((resolve, reject) => {
            this.http.get(url).then((response) => {
                resolve(response.results);
            }, (error) => {
                reject(error);
            });
        });
    }
}