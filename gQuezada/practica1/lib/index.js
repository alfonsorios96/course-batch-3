'use strict';

(function () {
    (async function () {
        var rawResponse = await fetch('https://randomuser.me/api/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        var content = await rawResponse.json();

        var employees = [];

        content.results.forEach(function (element) {
            var e = new Employee(element.name.first, element.email, element.phone, element.cell, element.login.sha256);
            employees.push(e);
        });

        console.log(employees);

        console.log(content);
    })();
})();