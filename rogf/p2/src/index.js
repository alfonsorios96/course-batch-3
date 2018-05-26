'use strict';
// Dislpay contents using the selected lng
const displayContent = (content) => {

    console.log(content);

    let contentP = JSON.parse(content);

    console.log(contentP);

    // Display page elements
    document.getElementById('blogName').innerHTML = contentP.page.title;
    document.getElementById('footerName').innerHTML = contentP.page.footer;

    // Display list blogs
    document.getElementById('list').innerHTML = '';
    

    for (let element of contentP.posts) {

        // Get a DOM node templete used for blog records
        let itm = document.getElementById('card');

        let clone = itm.cloneNode(true);

        clone.removeAttribute('id');
        let nods = clone.childNodes;

        nods[0].innerHTML = element.title;
        nods[1].innerHTML = element.description;
        nods[3].innerHTML = element.text;

        // Insert into DOM the new element
        document.getElementById('list').appendChild(clone);

    }
}

// Handle event on the select box change
const handleChangeLng = (event) => {

    console.log(event.target.value);
    retrieveLngData(event.target.value, displayContent);

}

// Make request to get lng data
const retrieveLngData = (lng, callback) => {

    // Define URL service
    let url = 'http://127.0.0.1:8080/dist/';


    switch (lng) {
        case 'eng':
            url += 'eng.json';
            break;
        case 'mxn':
            url += 'mxn.json';
        default:
            break;
    }

    // Generate request
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();

}

(function () {

    // Load by defaul content in mxn
    retrieveLngData('mxn', displayContent);

    // Add event to select box lnaguage
    document.getElementById('lng').addEventListener('change', handleChangeLng);

})();