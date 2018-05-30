const dropDown = document.getElementById('dropDown');
const launch = document.getElementById('launch');
const options = document.getElementsByClassName('opcion');
const modal = document.getElementById('modal');
const bodyDiv = document.getElementById('bodyDiv');
const close = document.getElementById('close');
const principal = document.getElementById('principal');
const modalContainer = document.getElementById('modalContainer');

bodyDiv.innerText = `Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.
                    También es una composición de caracteres imprimibles
                     (con grafema) generados por un algoritmo de cifrado que, 
                     aunque no tienen sentido para cualquier persona, sí puede 
                     ser descifrado por su destinatario original. En otras palabras,
                      un texto es un entramado de signos con una intención comunicativa
                       que adquiere sentido en determinado contexto.`;
const tooltip = document.getElementById('tooltip');

dropDown.addEventListener('click',  (event) => {
    let opcionDiv = dropDown.nextElementSibling;
    if (opcionDiv.style.display === 'block') {
        opcionDiv.style.display = 'none';
    } else {
        opcionDiv.style.display = 'block';
        dropDown.style.display = 'none';
    }
});

const clickOption = () => {
    let i;
    for (i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function () {
            dropDown.innerText = this.innerText;
            this.parentElement.style.display = 'none';
            dropDown.style.display = 'block';
        });
    }
}

launch.addEventListener('click', (event) => {
    principal.style.display = 'none';
    modalContainer.style.display = 'block'
    modal.style.display = 'block';
});

close.addEventListener('click', (event) => {
    modal.style.display = 'none';
    principal.style.display = 'block';
});

modalContainer.addEventListener('click', (event) => {
    if(modalContainer == event.target){
        principal.style.display = 'block';
        modalContainer.style.display = 'none'
        modal.style.display = 'none';
    }
})

tooltip.addEventListener('mouseenter', (event) => {
    let tooltipText = document.getElementById('tooltipText');
    tooltipText.style.visibility = 'visible';
    tooltipText.style.width = '120px';
    tooltipText.style.backgroundColor = 'black';
    tooltipText.style.color = '#fff';
    tooltipText.style.padding = '5px 0px 0px 0px';
    tooltipText.style.borderRadius = '6px';

    tooltipText.style.position = 'absolute';
    tooltipText.style.zIndex = '1';
});

tooltip.addEventListener('mouseleave', (event) => {
    let tooltipText = document.getElementById('tooltipText');
    tooltipText.style.visibility = 'hidden';
});


clickOption();