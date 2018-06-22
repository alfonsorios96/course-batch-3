const element = document.getElementById('tooltip');
element.setAttribute('style', 'visibility: hidden;');

const overTooltip = () => {
    element.setAttribute('style', 'visibility: visible; background-color: black; color: #fff;');
}

const overTooltipOff  = () => {
    element.setAttribute('style', 'visibility: hidden;');
}
