import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '../views/heroesView.js';
/**
 * @customElement
 * @polymer
 */
class ExamenListApp extends PolymerElement {
  static get template() {
    return html`
    <style>
      *  {
      }
      :host {
        display: block;
      }

    </style>
    <heroes-view></heroes-view>
`;
  }

  static get is() { return 'examen-list-app'; }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'examen-list-app'
      }
    };
  }

}

window.customElements.define(ExamenListApp.is, ExamenListApp);
