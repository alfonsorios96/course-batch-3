'use strict';

const element   = document.getElementById('modalDiv');
const container = document.getElementById('container');
const idHeader  = document.getElementById('header');
const idBody    = document.getElementById('body');
const idFooter  = document.getElementById('footer');

const idName    = document.getElementById('name');
const idEmail   = document.getElementById('email');
const idGender  = document.getElementById('gender');
const idStreet  = document.getElementById('street');
const idCity    = document.getElementById('city');
const idState   = document.getElementById('state');

const header = 'Random User';
const footer = 'https://randomuser.me/api/';

idHeader.innerHTML = header;
idFooter.innerHTML = footer;

element.setAttribute('style', 'visibility: hidden; ');

const onClickOpen  = () =>  {
    element.setAttribute('style', 'visibility: visible;  background-color: #ffffff;');
    element.setAttribute('class', 'modal');
    container.setAttribute('class', 'container');

    fetch('https://randomuser.me/api/')
        .then((res) => { return res.json() })
        .then((data) => {
            idName.innerHTML    = getName(data.results[0]);
            idEmail.innerHTML   = data.results[0].email;
            idGender.innerHTML  = data.results[0].gender;
            idStreet.innerHTML  = data.results[0].location.street;
            idCity.innerHTML    = data.results[0].location.city;
            idState.innerHTML   = data.results[0].location.state;
        })
        .catch((error) => {
            idHeader.innerHTML = "Error to get User.";
            idBody.innerHTML = error.message;
        });
}

const getName   = (data) =>  {
    return data.name.title + ' ' + data.name.first + ' ' + data.name.last ;
}

const onClickClose   = () =>  {
    element.setAttribute('style', 'visibility: hidden;');
    container.removeAttribute("class");
}

window.addEventListener('click', (e) => {
    if (!document.getElementById('modalDiv').contains(e.target)
        && !document.getElementById('btnOpenModal').contains(e.target)){
        onClickClose();
    }
});
