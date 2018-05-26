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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = employees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var employee = _step.value;

                document.querySelector('#employees tbody').appendChild(employee.getHTML());
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        console.log(employees);
    })();
})();