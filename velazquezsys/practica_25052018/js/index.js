'use strict';

const divSelector = document.getElementById('selector');
const divModal = document.getElementById('modal');
const botonCerrar = document.getElementById('boton');

let tituloModal = 'Este es un modal';
let textModal = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

document.getElementById('titulo').innerHTML = tituloModal;
document.getElementById('texto').innerHTML = textModal;


const showOptions = (elementId) => {
    let elementShow = document.getElementById(elementId);
    if (elementShow.style.display === 'block') {
        elementShow.style.display = 'none';
    } else {
        elementShow.style.display = 'block';
    }
};

//Evento click en funcion
divSelector.addEventListener('click', () => (showOptions('options')));
divModal.addEventListener('click', () => (showOptions('contenidoModal')));
botonCerrar.addEventListener('click', () => (showOptions('contenidoModal')));