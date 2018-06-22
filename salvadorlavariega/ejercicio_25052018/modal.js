const element = document.getElementById('modalDiv');
const container = document.getElementById('container');
const idHeader = document.getElementById('header');
const idBody = document.getElementById('body');
const idFooter = document.getElementById('footer');

const header = 'Javascript';
const body = 'JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3​ basado en prototipos, imperativo, débilmente tipado y dinámico.';
const footer = 'fuente: https://es.wikipedia.org/wiki/JavaScript';

idHeader.innerHTML = header;
idBody.innerHTML = body;
idFooter.innerHTML = footer;

element.setAttribute('style', 'visibility: hidden; ');

const onClickOpen  = () =>  {
    element.setAttribute('style', 'visibility: visible;  background-color: #ffffff;');
    element.setAttribute('class', 'modal');
    container.setAttribute('class', 'container');
}

const onClickClose   = () =>  {
    element.setAttribute('style', 'visibility: hidden;');
    container.removeAttribute("class");
}

window.addEventListener('click', (event) => {
    if (!document.getElementById('modalDiv').contains(event.target)
        && !document.getElementById('btnOpenModal').contains(event.target)){
        onClickClose();
    }
});

