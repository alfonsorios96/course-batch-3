'use strict';


const displayTooltip = () => {
	const link = document.getElementById('triger_tooltip');
	const displayedElement = document.getElementById('text');
    link.addEventListener('mouseover', () => {
        displayedElement.classList.add('tooltip');
    });
    link.addEventListener('mouseleave', () => {
        displayedElement.classList.remove('tooltip');
    });
};

const displayModal = () => {
	const container = document.getElementById('container');
	const modal = document.getElementById('modal');
	const link = document.getElementById('modal_link');
	const mt = document.getElementById('modal_title');
	const mb= document.getElementById('modal_body');
	const mf = document.getElementById('modal_footer');
	const cerrar = document.getElementById('cerrar');

	mt.innerHTML = 'Un titulo';
	mb.innerHTML = 'lorem ipsum dolor';
	mf.innerHTML = 'footer';


    link.addEventListener('click', () => {
        container.style.display = "block" ;
        modal.style.display = "block" ;
        mt.style.display = "block" ;
        mb.style.display = "block" ; 
        mf.style.display = "block" ;
    });

    cerrar.addEventListener('click', () => {
        container.style.display = "none" ;
        modal.style.display = "none" ;
    });
};

const displayDropdown = () => {
    const container = document.getElementById('master');
    const items = document.getElementById('items');

    container.addEventListener('click', () => {
        items.style.display = "block" ;
    });

    container.addEventListener('mouseover', () => {
        master.style.background = "blue";
    });

    container.addEventListener('mouseleave', () => {
        master.style.background = "#996699";
        items.style.display = "none" ;
    });
}

displayTooltip();
displayModal();
displayDropdown();