import Controller from './Controller.js';

const init = function() {
    
    let ctrl = new Controller();
    
    ctrl.retrieve();

    document.getElementById("add").addEventListener("click", ctrl.add);

};

init();