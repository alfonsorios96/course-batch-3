'use strict';

const urlApi = 'https://randomuser.me/api/';
let numberOfUsers = 15;


class User {
    constructor(gender, name, email) {
        this.gender = gender;
        this.name = name;
        this.email = email;
    }
}

(() => {
    for (let i = 0; i < numberOfUsers; i++) {
        fetch(urlApi)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                const responseObject = responseJson.results[0];
                return new User(responseObject.gender, responseObject.name.first, responseObject.email);
            })
            .then(user => {
                fillTable(user);
            })
            .catch(response => {
                return response;
            });
    }
})();

const fillTable = (user) => {

    const table = document.querySelector('#table tbody');
    const contentTable = table.innerHTML;

    const rowTemplate = `${contentTable}<tr><td>${user.gender}</td><td>${user.name}</td><td>${user.email}</td></tr>`;

    table.innerHTML = rowTemplate;
};