const modal = document.getElementById('modal');
const modalContainer = document.getElementById('modalContainer');
const close = document.getElementById('close');
const bodyDiv = document.getElementById('bodyDiv');
bodyDiv.innerText = 'There is not Users';
const headers = new Headers();
headers.append('Content-Type', 'application/json');
const options = { method: 'GET',
    headers: headers };
const table = document.getElementById('tablita');
const promise = () => {
    fetch('https://randomuser.me/api/', options)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => {
            response.json().then(data => {
                fillTable(data.results);
            });

        }).catch(error => {
            modalContainer.style.display = 'block';
            modal.style.display = 'block';
        });
};

const fillTable = (users) => {
    const tblBody = document.createElement('tbody');
    for(const index in users){
        const row = document.createElement('tr');
        const columName = document.createElement('td');
        columName.appendChild(document.createTextNode(users[index].name.first));
        row.appendChild(columName);
        const columLastName = document.createElement('td');
        columLastName.appendChild(document.createTextNode(users[index].name.last));
        row.appendChild(columLastName);
        const columCell = document.createElement('td');
        columCell.appendChild(document.createTextNode(users[index].cell));
        row.appendChild(columCell);
        tblBody.appendChild(row);
    }
    table.appendChild(tblBody);
}

close.addEventListener('click', (event) => {
    modal.style.display = 'none';
    modalContainer.style.display = 'none';
});

modalContainer.addEventListener('click', (event) => {
    if(modalContainer == event.target){
        modalContainer.style.display = 'none'
        modal.style.display = 'none';
    }
})

promise();