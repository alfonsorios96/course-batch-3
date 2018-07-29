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
        grid-template-columns: auto;
      }

      .grid-items-container-border {
        margin: 10px;
        border: #0a3142 double;
      }

      .grid-items-container {
        display: grid;
        grid-template-columns: 1fr 6fr;
        padding: 20px 0px 0px 20px;
      }
      
      .grid-items-info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      
      .grid-item-comic {
        display: grid;
        grid-template-columns: auto;
      }

      .grid-item-name {
        font-family: "Comic Sans MS", "Century Schoolbook L", serif;
        font-size: larger;
        color: #0b8043;
      }
      
      .item-dodified {
        font-family: 'Roboto', 'Noto', sans-serif;
        font-size: smaller;
        color: #904a0f;
      }

      .grid-item-description {
        font-family: 'Roboto', 'Noto', sans-serif;
        font-size: medium;
        color: #904a0f;
        margin-top: 10px;
      }

      .comics-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: space-between;
        font-family: "Comic Sans MS", "Century Schoolbook L", serif;
        font-size: small;
        color: #904a0f;
      }
      .options-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .options-container-search, .options-container-filter {
        padding: 20px;
      }
      
      

    </style>
    <h2>Hello [[prop1]]!</h2>
    <div class="options-container">
        <div class="options-container-search">
            <paper-input always-float-label="" label="Hero Name" id="heroName"></paper-input>
            <paper-button toggles="" raised="" class="green" on-click="searchHeroes">search</paper-button>
        </div>
        <template is="dom-if" if="[[data.length]]">

            <div class="options-container-filter">
                <paper-input always-float-label="" label="Filter" value="{{filterVal::input}}"></paper-input>
                <select value="{{sortVal::change}}">  
                   <option value="id">ID</option>
                   <option value="name">Name</option>
                   <option value="modified">Modified Date</option>
                </select>
            </div>
        </template>  
    </div>
    <ul id="characters" class="grid-container">
      <template is="dom-if" if="[[data.length]]">
        <template id="list" is="dom-repeat" items="[[data]]" filter="{{_filter(filterVal)}}" sort="{{_sort(sortVal)}}" observe="name">
          <li>
            <div class="grid-items-container-border">
              <div class="grid-items-container">
                  <div>
                      <picture>
                          <img src="[[item.thumbnail.path]]/portrait_xlarge.jpg" alt="[[item.name]]">
                      </picture>
                      <div class="grid-item-name">
                          <span>ID: [[item.id]]</span>
                      </div>
                  </div>
                  <div class="grid-items-info">
                      <div class="grid-item-name">
                          <span>Name: [[item.name]]</span>
                      </div>
                       <div class="item-dodified">
                          Modified: [[item.modified]]
                      </div>
                      <div class="grid-item-description">
                          [[item.description]]
                      </div>
                      
                      <div class="grid-item-comic">
                          <h1 class="grid-item-name">Comics</h1>
                          <ul class="comics-list">
                          <template is="dom-repeat" items="[[item.comics.items]]">
                              <li>[[item.name]]</li>
                          </template>
                          </ul>
                      </div>
                  </div>
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

  _sort (sortVal) {
      switch(sortVal) {
          case 'name':
              return (a, b) => {
                  if (a.name === b.name) return 0;
                  return a.name < b.name ? -1 : 1;
              };
          case 'id':
              return (a, b) => {
                  if (a.id === b.id) return 0;
                  return a.id < b.id ? -1 : 1;
              };
          case 'modified':
              return (a, b) => {
                  if (a.modified === b.modified) return 0;
                  return a.modified < b.modified ? -1 : 1;
              };
      }
    }
}

window.customElements.define(ExamenListApp.is, ExamenListApp);
