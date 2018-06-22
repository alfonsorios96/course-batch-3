'use strict';

// Variable section
const selectHTML = document.getElementById('selectSection');
const buttonHTML = document.getElementById('modalSection');
const closeHTML = document.getElementById('closeModal');
const closeButtonHTML = document.getElementById('closeButtonModal');
const helpHTML = document.getElementById('helpSection');
let flagModal = false;

/* Custom text for the modal*/
document.getElementById('titleModal').innerHTML = 'ssss';
document.getElementById('bodyModal').innerHTML = 'Cuerpo de modal';
document.getElementById('footerModal').innerHTML = 'Footer del modal';

// Functions section
const showDivSelector = () => {
    const optionHTML = document.getElementById('optionSection');
    if (optionHTML.style.display === 'none') {
        optionHTML.style.display = 'block';
    }
    else {
        optionHTML.style.display = 'none';
    }
};

const showDivModal = () => {

    let modalHTML = document.getElementById('modalWindow');
    flagModal = true;
    modalHTML.style.display = 'block';

};

const closeModal = () => {
    const modalHTML = document.getElementById("modalWindow");
    modalHTML.style.display = 'none';
    flagModal = false;
};



const showToolTip = () => {
    let toolTipHTML = document.getElementById('toolTip');

    if (toolTipHTML.style.display === 'none') {
        toolTipHTML.style.display = 'block';

    } else {
        toolTipHTML.style.display = 'none';

    }
}


window.addEventListener("click", function(evt) {
    const flyoutElement = document.getElementById('modalWindow');
    const buttonElement = document.getElementById('modalSection');
    if(flyoutElement.contains(evt.target)){
       return;
    }else{
        if(buttonElement.contains(evt.target)){
            showDivModal();
        }else{
            closeModal();
        }
    }

});



// Listener Event
selectHTML.addEventListener('click', showDivSelector);
buttonHTML.addEventListener('click', showDivModal);
closeHTML.addEventListener('click', closeModal);
closeButtonHTML.addEventListener('click', closeModal);
helpHTML.addEventListener('mouseover', showToolTip);
helpHTML.addEventListener('mouseout', showToolTip);

