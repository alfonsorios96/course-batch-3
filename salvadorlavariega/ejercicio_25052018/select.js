const element = document.getElementById('options');
const title = document.getElementById('selected');

element.setAttribute('style', 'visibility: hidden; ');

const dropDown = () => {
    element.setAttribute('style', 'visibility: visible; border-style: solid;');

}

const select = (value) => {
    title.innerHTML = value;
    element.setAttribute('style', 'visibility: hidden; ');

}