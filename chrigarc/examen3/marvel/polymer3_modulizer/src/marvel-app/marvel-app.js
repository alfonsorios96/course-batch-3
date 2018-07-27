import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../marvel-view/marvel-view.js';

/**
 * @customElement
 * @polymer
 */
class MarvelApp extends  PolymerElement{
    static get template() {
        return html`
    <style>
      :host {
        display: block;
      }
    </style>
    
    <!--<marvel-view></marvel-view>-->
`;
    }

    ready(){
        super.ready();
        console.log('hola');
    }
}

window.customElements.define('marvel-app', MarvelApp);
