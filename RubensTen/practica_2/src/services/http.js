import { deprecate } from "util";

class Http {
    constructor() {}
    
    /**
    * @deprecated function que no se usa
    */
    request (url, body) {
        const promise = new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
        return promise;
    }


    makeRequest(method, url) {
        const promise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                resolve(JSON.parse(xhr.response));
            };
            xhr.onerror = function () {
                reject(error);
            };
            xhr.send();
        });
        return promise;
    }

    /**
     * Regresa una promesa con el response de la peticion
     * @param {string} url endpoint to send request
     */
    get(url) {
        return this.makeRequest('GET', url);
    }
}