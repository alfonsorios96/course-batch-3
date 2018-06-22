'use strict';

((customElements) => {
  class LigthList extends HTMLElement {
    
    constructor() {
      
      super();
      
      const shadowRoot = this.attachShadow({mode: 'open'});
      
      // Clone the <template> in the import.
      const template = document.currentScript.ownerDocument.querySelector('#listTemplate');
      const clone = document.importNode(template.content, true);
      
      
      const list = clone.querySelector('ul');
      
      
      let items = this.getAttribute('items');
      items = JSON.parse(items);
      
      for (const item of items) {
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      }
      
      shadowRoot.appendChild(clone);
      shadowRoot.appendChild(list);
      
      
      this.addEventListener('toggle', () => {
        list.classList.toggle('hideList');
      });
    }
  }
  
  customElements.define('light-list', LigthList);
})(window.customElements);
