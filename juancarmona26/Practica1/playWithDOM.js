'use strict';

const arrayOfDinosaurus = ['allosaurus', 'brontosaurus', 'carcharodontosaurus','diplodocus'];
const value = 'value';
const divOptionMenu = document.getElementById('optionMenu');
const divOptionValues = document.getElementById('optionValue');
const modal = document.getElementById('myModal');;
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const elems = document.getElementsByClassName('quick-tip');

const createOptionsInOptionMenuDiv = () =>{

    for(const iterable of arrayOfDinosaurus) {
              
        const option = document.createElement('OPTION');
        option.setAttribute(value, iterable);
        const textNode = document.createTextNode(iterable);
        option.appendChild(textNode);
        option.addEventListener("click", () => {
            setValue(iterable);
        });
        divOptionValues.appendChild(option);      
        divOptionMenu.style.display = "none";                
    }

};

const setValue = (value) => {    
    const textElement = document.getElementById('demo');
    textElement.innerHTML = value;   
    divOptionMenu.style.display = 'block';

    divOptionValues.innerHTML = '';  
    
};

const closeModal = () => {
    modal.style.display = "none";
}

btn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
};


window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const doTip = (elem) =>{        
    
    if(elem.getAttribute('data-tip-on')  === 'false') {
      elem.setAttribute('data-tip-on', 'true');
      const rect = elem.getBoundingClientRect();          
      const tipId = Math.random().toString(36).substring(7);
      elem.setAttribute('data-tip-id', tipId);
      const tip = document.createElement("div");
      tip.setAttribute('id', tipId);
      tip.innerHTML = elem.getAttribute('data-tip');
      tip.style.top = rect.bottom+ 10 + 'px';
      tip.style.left = (rect.left-200) + 'px';
      tip.setAttribute('class','tip-box');
      document.body.appendChild(tip);

    } else {
        
        elem.setAttribute('data-tip-on', 'false');
        const tip = document.getElementById(elem.getAttribute('data-tip-id'));
        tip.parentNode.removeChild(tip);
      
      
    }    
}


const enableTips = () => {
  
  for(const iterable of elems) {    
    iterable.addEventListener("mouseover", () => {
        doTip(iterable);
    }, false);
    iterable.addEventListener("mouseout", () => {
        doTip(iterable);
    });

  }
}

   window.onload = () =>{
        enableTips();
    }
