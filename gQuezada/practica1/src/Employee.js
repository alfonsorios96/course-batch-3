class Employee {
    constructor(name, email, phone, cell, sha256) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.cell = cell;
        this.sha256 = sha256;
    }

    getHTML() {
        let tr = document.createElement('tr');
        let td=[];
        let tn=[];

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
}