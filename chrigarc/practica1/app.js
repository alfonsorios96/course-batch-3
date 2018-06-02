'use strict';

/* DropDown */
const dropdown = (elementDiv, arrayElementos) => {
    const widget = elementDiv;

    const eventElementDropdown = (evento) => {
        label.innerText = evento.target.innerText;
        eventDropdown();
    };
    const eventDropdown = () =>{
        
        if(widget.classList.contains('dropdown')){
            widget.classList.remove('dropdown');
            widget.classList.add('dropdown-active');
        }else{
            widget.classList.remove('dropdown-active');
            widget.classList.add('dropdown');
        }
    };
    widget.innerHTML = '';
    const label = document.createElement('span');
    label.innerText = 'Seleccionar';
    const areaElementos = document.createElement('ul');
    for(const elem of arrayElementos){
        const elemento = document.createElement('li');
        elemento.innerText = elem.name;
        elemento.addEventListener('click', eventElementDropdown);
        areaElementos.appendChild(elemento);
    }
    widget.classList.add('dropdown');
    widget.appendChild(label);
    widget.appendChild(areaElementos);
    label.addEventListener('click', eventDropdown);
};

/* Tooltip */
const tooltip = (elementDiv) => {
    const widget = elementDiv;
    const label = document.createElement('span');
    label.innerText = widget.getAttribute('data-help');
    widget.addEventListener('mouseover', () => {
        widget.classList.add('tooltip');
    });
    widget.addEventListener('mouseleave', () => {
        widget.classList.remove('tooltip');
    });


    label.classList.add('tooltip-help');
    widget.appendChild(label);
};

/* Modal */
const modal = (elementDiv, opcionesModal) => {

    const widget = elementDiv;
    let dentroModal = false;

    const modalHeader = document.createElement('div');
    const modalBody = document.createElement('div');
    const modalFooter = document.createElement('div');
    const btnCerrar = document.createElement('button');
    btnCerrar.innerText = 'Cerrar';

    const eventModalCerrar = () =>{
        widget.classList.add('modal');
        widget.classList.remove('modal-active');
    };
    btnCerrar.addEventListener('click', eventModalCerrar);
    const estructuraModal = {
        modalHeader:modalHeader, modalBody:modalBody,
        modalFooter:modalFooter
    };

    for(const elem of opcionesModal){
        estructuraModal[elem.llave].innerHTML = elem.valor;
    }

    widget.appendChild(modalHeader);
    widget.appendChild(modalBody);
    widget.appendChild(modalFooter);
    widget.appendChild(btnCerrar);

    widget.classList.add('modal');
    widget.addEventListener('pointerover', () => {
        dentroModal = true;
    });
    widget.addEventListener('pointerleave', () => {
        dentroModal = false;
    });
    document.addEventListener('click', (event) => {
        if(!dentroModal && event.target.id !== 'btnActivaModal'){
            eventModalCerrar();
        }
    });
};


/* prueba dropdown */
const itemDropdown = document.getElementById('dropdown');
const elementosDropdown = [
    {value:1, name: 'elemento1'},
    {value:2, name: 'elemento2'},
    {value:3, name: 'elemento3'},
    {value:4, name: 'elemento4'}
];

dropdown(itemDropdown, elementosDropdown);

/* prueba tooltip */
const itemTooltip = document.getElementById('tooltip');
tooltip(itemTooltip);


/* prueba Modal */
const btnActivaModal = document.getElementById('btnActivaModal');
const itemModal = document.getElementById('modal');
const opcionesModal = [
    {llave: 'modalHeader', valor:'<h3>Titulo del modal</h3>'},
    {llave: 'modalBody', valor:'<p>Este es el contenido de prueba</p>'},
    {llave: 'modalFooter', valor:'<p>Footer</p>'}
];
modal(itemModal, opcionesModal);
btnActivaModal.addEventListener('click', () => {
    itemModal.classList.remove('modal');
    itemModal.classList.add('modal-active');
});
