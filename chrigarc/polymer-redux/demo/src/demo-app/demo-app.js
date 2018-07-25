import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../home-view/home-view.js';

/**
 * @customElement
 * @polymer
 */
class DemoApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

    <h1>Practica -  Crear un front para un servicio de poll utilizando redux</h1>
    <p>Es un simple demo, no realiza los votos y tampoco realiza las llamadas con ajax. Pero conforme se van creando las encuestas cambia el estado y va actualizando la lista</p>
    <div id="app">    
        <home-view></home-view>        
    </div>
    `;
  }
  static get properties() {
    return {
    };
  }
}

window.customElements.define('demo-app', DemoApp);
