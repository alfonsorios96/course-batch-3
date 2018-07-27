import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {ReduxMixin} from "../redux/reduxMixin.js";
import '@polymer/iron-ajax/iron-ajax.js';
import '../responsive-table/responsive-table.js';

class MarvelView extends PolymerElement {

    static get template() {
        return html`
        <h2>Lista de personajes Marvel Comics</h2>

    
    <button on-click="_refresh">Conectar</button>
    
    <div id="area-table"></div>
        `;
    }

    static get properties() {
        return {

            headers: {
                type: Object,
                value: ['ID', 'Nombre', 'Descripción']
            }
        };
    }

    static get actions() {
        return {
            addCharacters(characters) {
                return {
                    type: 'ADD_CHARACTERS',
                    characters
                };
            },
        };
    }

    ready(){
        super.ready();
        console.log('hgo');
    }

    handleResponse(event) {
        const characters = this._processInfo(event.detail.response.data.results);
        this.set('characters', characters);
        this.shadowRoot.querySelector('#area-table').innerHTML = "";
        const mytable = document.createElement('responsive-table');
        mytable.headers = this.headers;
        mytable.rows = characters;
        this.shadowRoot.querySelector('#area-table').appendChild(mytable);
        this.dispatch('addCharacters', characters);
        console.log(this.getState());
    }

    _processInfo(collection) {
        const result = [];
        for (const item of collection) {
            result.push({
                title: item.name,
                image: `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`,
                cells: [item.id, item.name, item.description],
                stories: item.stories
            });
        }
        return result;
    }
}


window.customElements.define('marvel-view', MarvelView);