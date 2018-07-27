import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
 import '../marvel-view/marvel-view.js';

/**
 * @customElement
 * @polymer
 */
class MarvelApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <marvel-view></marvel-view>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'marvel-app'
      }
    };
  }
}

window.customElements.define('marvel-app', MarvelApp);
