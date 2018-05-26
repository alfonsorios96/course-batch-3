'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function () {
    function Employee(name, email, phone, cell, sha256) {
        _classCallCheck(this, Employee);

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.cell = cell;
        this.sha256 = sha256;
    }

    _createClass(Employee, [{
        key: 'getHTML',
        value: function getHTML() {
            var tr = document.createElement('tr');
            var td = [];
            var tn = [];

            tn.push(document.createTextNode(this.name));
            td.push(document.createElement('td'));
            td[0].appendChild(tn[0]);
            tr.appendChild(td[0]);

            tn.push(document.createTextNode(this.email));
            td.push(document.createElement('td'));
            td[1].appendChild(tn[1]);
            tr.appendChild(td[1]);

            tn.push(document.createTextNode(this.phone));
            td.push(document.createElement('td'));
            td[2].appendChild(tn[2]);
            tr.appendChild(td[2]);

            tn.push(document.createTextNode(this.cell));
            td.push(document.createElement('td'));
            td[3].appendChild(tn[3]);
            tr.appendChild(td[3]);

            tn.push(document.createTextNode(this.sha256));
            td.push(document.createElement('td'));
            td[4].appendChild(tn[4]);
            tr.appendChild(td[4]);

            return tr;
        }
    }]);

    return Employee;
}();