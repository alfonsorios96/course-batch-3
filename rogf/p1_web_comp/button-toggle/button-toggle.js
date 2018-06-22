'use strict';

((customElements, document) => {
  class ButtonToggle extends HTMLElement {
    
    constructor() {
      super();
      
      const shadowRoot = this.attachShadow({mode: 'open'});
      
      // Clone the <template> in the import.
      const template = document.currentScript.ownerDocument.querySelector('#buttonTemplate');
      
      const clone = document.importNode(template.content, true);
      shadowRoot.appendChild(clone);
      this.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('toggle', {
          bubbles: true,
          composed: true
        }));
      });
      
    }
  }
  
  customElements.define('button-toggle', ButtonToggle);
  
})(window.customElements, document);
