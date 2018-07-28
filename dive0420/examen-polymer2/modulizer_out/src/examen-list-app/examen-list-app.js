import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
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

      ul{
        list-style:none;
      }

      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 10px;
      }

      .grid-items-container-border {
        margin: 10px;
        border: #0a3142 double;
      }

      .grid-items-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px;
      }

      .grid-item-image {
        align-content: center;
      }

      .grid-item-comic {
        margin: 10px;
      }

      .grid-item-name {
        font-family: "Comic Sans MS", "Century Schoolbook L", serif;
        font-size: larger;
        color: #0b8043;
      }

      .grid-item-description {
        font-family: 'Roboto', 'Noto', sans-serif;
        font-size: smaller;
        color: #904a0f;
        margin-top: 10px;
      }

      .comics-list {
        font-family: "Comic Sans MS", "Century Schoolbook L", serif;
        font-size: small;
        color: #904a0f;
      }

    </style>
    <h2>Hello [[prop1]]!</h2>
    <paper-input always-float-label="" label="Hero Name" id="heroName"></paper-input>
    <paper-button toggles="" raised="" class="green" on-click="searchHeroes">search</paper-button>
    <paper-input always-float-label="" label="Filter" value="{{filterVal::input}}"></paper-input>
    <ul id="characters" class="grid-container">
      <template is="dom-if" if="[[data.length]]">
        <template id="list" is="dom-repeat" items="[[data]]" filter="{{_filter(filterVal)}}" observe="name">
          <li>
            <div class="grid-items-container-border">
              <div class="grid-items-container">
                <div class="grid-item-image">
                  <picture>
                    <img src="[[item.thumbnail.path]]/portrait_xlarge.jpg" alt="[[item.name]]">
                  </picture>
                </div>
                <div class="grid-item-name">
                  <span>[[item.name]]</span>
                  <div class="grid-item-description">
                    [[item.description]]
                  </div>
                </div>

              </div>
              <div class="grid-item-comic">
                <h1 class="grid-item-name">Comics</h1>
                <template is="dom-repeat" items="[[item.comics.items]]">
                  <ul class="comics-list">
                    <li>[[item.name]]</li>
                  </ul>
                </template>
              </div>
            </div>

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

  _filter(startWith) {
      return (item) => {
          if (!startWith) return true;
          if (!item) return false;
          const name = item.name.toLowerCase();
          const search = startWith.toLowerCase();
          return name && ~ name.indexOf(search);
      };
  }
}

window.customElements.define(ExamenListApp.is, ExamenListApp);
