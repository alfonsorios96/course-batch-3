import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {ReduxMixin} from "../redux/reduxMixin.js";
import '@polymer/iron-ajax/iron-ajax.js';
import '../responsive-table/responsive-table.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class MarvelView extends ReduxMixin(PolymerElement) {

    static get template() {
        return html`
        <h2>Lista de personajes Marvel Comics</h2>
        
             
        <div id="area-filtros">
            <p>Ordenar por:</p>
            <select name="" id="" on-change="_order">
                <option value="ID">ID</option>
                <option value="Nombre" selected>Nombre</option>
                <option value="Descripcion">Descripción</option>
            </select>
            
            <br>
            <paper-input id="input-name" label="Buscar por nombre" ></paper-input>
            <paper-button on-click="_filter">Buscar</paper-button>
        </div>

        <iron-ajax id="request"
               auto
               url="https://gateway.marvel.com:443/v1/public/characters?apikey=bf8f1a982b95bc85e84a6d40e77d3f00&ts=1&hash=4ca4a7943e7fa9088f2babbcfee9a9b1&[[filter]]",
               handle-as="json"
               loading="{{cargando}}"
               on-response="handleResponse"></iron-ajax>
        <responsive-table id="mytable" headers="[[headers]]" rows="[[characters]]" on-delete-item="_delete" delete-option="true"></responsive-table>
        <!--<a on-click="_moreInfo">Ver más</a>-->
     `;
    }

    static get properties() {
        return {
            characters:{
                type: Object,
                statePath: 'characters'
            },
            headers: {
                type: Object,
                value: ['Imagen', 'ID', 'Nombre', 'Descripción']
            },
            filter:{
                type: String,
                value: ''
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
            clearCharacters(characters){
                return {
                    type: 'CLEAR'
                };
            }
        };
    }

    handleResponse(event) {
        const characters = this._processInfo(event.detail.response.data.results);
        this.dispatch('addCharacters', characters);
        console.log(this.getState());
    }

    _processInfo(collection) {
        const result = [];
        for (const item of collection) {
            // const stories = item.stories.items;
            result.push({
                title: item.name,
                name: item.name, description: item.description, id: item.id,
                cells: [
                    {type: 'image', content: `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`},
                    {type: 'string', content: item.id},
                    {type: 'string', content: item.name},
                    {type: 'string', content: item.description}
                    // {type: 'collection', content: stories}
            ]});
        }
        return result;
    }

    _moreInfo(){
        this.$.request.generateRequest();
    }

    _order(event){
        const newArray = this.characters.concat([]);
        switch (event.target.value){
            case 'Nombre':
                newArray.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
                break;
            case 'Descripcion':
                newArray.sort((a, b) => {
                    return a.description.localeCompare(b.description);
                });
                break;
            case 'ID':
                newArray.sort((a, b) => {
                    return  ("" + a.id).localeCompare("" +b.id);
                });
                break;
        }
        this.dispatch('clearCharacters');
        this.dispatch('addCharacters', newArray);
    }

    _delete(event){

        const index = event.detail.index;
        const newArray = this.characters.concat([]);
        newArray.splice(index, 1);
        this.dispatch('clearCharacters');
        this.dispatch('addCharacters', newArray);
    }

    _filter(){
        this.dispatch('clearCharacters');
        if(this.$['input-name'].value !== ''){
            this.filter = 'nameStartsWith=' + this.$['input-name'].value;
        }else{
            this.filter = '';
        }
        this._moreInfo();
    }
}


window.customElements.define('marvel-view', MarvelView);