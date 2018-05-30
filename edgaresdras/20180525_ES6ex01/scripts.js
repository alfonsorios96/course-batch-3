'use strict'
// DROPDOWN ==========================================
const div = document.querySelector('#container'),
      frag = document.createDocumentFragment(),
      select = document.createElement('select');

select.options.add( new Option('Opcion 1','AU', true, true) );
select.options.add( new Option('Opcion 2','FI') );
select.options.add( new Option('Opcion 3','FI') );
select.options.add( new Option('Opcion 4','FI') );

frag.appendChild(select);
div.appendChild(frag);

// MODAL =============================================
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = () => modal.style.display = 'block';

// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = 'none';

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

//Esta arrow function me marca error en el if
// window.onclick = (event) => if (event.target === modal) {
//   modal.style.display = 'none';
//   }
