import { PolymerElement } from '../../../../@polymer/polymer/polymer-element.js';
import '../../../../@polymer/iron-ajax/iron-ajax.js';
import '../../../../@polymer/paper-input/paper-input.js';
import '../../../../@polymer/paper-button/paper-button.js';
import { html } from '../../../../@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 */
class ExamenListApp extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
      .characterProfile{
        padding: 10px;
      }
    </style>
    <h2>Hello [[prop1]]!</h2>
    <paper-input always-float-label="" label="Hero Name" id="heroName"></paper-input>
    <paper-button toggles="" raised="" class="green" on-click="searchHeroes">search</paper-button>

    <ul id="characters">
      <template is="dom-if" if="[[data.length]]">
        <template is="dom-repeat" items="[[data]]">
          <li>
            <div class="characterProfile">
              <picture>
                <img src="[[item.thumbnail.path]]/portrait_small.jpg" alt="[[item.name]]" style="width:auto;">
              </picture>
              <span>[[item.name]]</span>
            </div>
            <span>[[item.description]]</span>
            <template is="dom-repeat" items="[[item.comics.items]]">
                <ul>
                  <li>[[item.name]]</li>
                </ul>
            </template>
          </li>
        </template>
      </template>
    </ul>
    <iron-ajax id="myAjax"></iron-ajax>
`;
  }

  static get is() { return 'examen-list-app'; }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'examen-list-app'
      },
      data: {
          type: Array,
          value: []
      }
    };
  }

  getCharacters(heroName){
      const ajax = this.$.myAjax;
      ajax.url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+ heroName +"&ts=1532652564&apikey=572e49a9f9a6f52f486113d0681a045d&hash=d688af4a181594e7a8dc46168c46bd8e";
      ajax.handleAs = "json";
      ajax.addEventListener('response', (event) => {
          this.handleCharacterResponse(event);
          ajax.removeEventListener('response', this.handleCharacterResponse);
      });
      ajax.generateRequest();
  }

  handleCharacterResponse(event){
      this.set('data', event.detail.response.data.results);
  }

  searchHeroes(){
      const input = this.$.heroName;
      this.getCharacters(input.value);
  }
}

window.customElements.define(ExamenListApp.is, ExamenListApp);
