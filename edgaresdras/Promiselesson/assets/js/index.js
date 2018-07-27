'use strict'
const populate = document.querySelector('#populate');

function getData() {
  fetch('https://randomuser.me/api/?results=50')
    .then((resp) => resp.json())
    .then(function(data) {
      data.results.forEach(function(user){
        const node = `
              <div class="gender">
              ${user.gender}
              </div>
              <div class="email">
              ${user.email}
              </div>
              `;
              populate.innerHTML += node;
      });
    })
    .catch(function() {
            // Get the modal
            const modal = document.getElementById('myModal');

            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName('close')[0];

            // When there is an error, open the modal
            () =>  modal.style.display = 'block';

            // When the user clicks on <span> (x), close the modal
            span.onclick = () => modal.style.display = 'none';
    })
}

getData();
