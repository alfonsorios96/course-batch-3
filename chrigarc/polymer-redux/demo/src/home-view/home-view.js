import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ReduxMixin} from '../redux/reduxMixin.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class HomeView extends  ReduxMixin(PolymerElement) {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
            }
        </style>       
        
        <div id="area-lista">
            <h3>Encuestas registradas</h3>
            <ul id="lista de encuestas">
                <dom-repeat items="[[questions]]">
                    <template>
                        <li>[[item.question]]</li>
                        <ul>
                            <dom-repeat items="[[item.options]]" as="option">
                                <template>
                                    <li>[[option.option]]</li>                                    
                                </template>
                            </dom-repeat>
                        </ul>
                    </template>
                </dom-repeat>
            </ul>            
        </div>
        <div id="area-registro">
            <paper-input label="Nueva pregunta" id="newpoll"></paper-input>
            <paper-input name="item-option" label="Primer opcion" id="newoption"></paper-input>
            <dom-repeat items="[[options]]">
                <template>
                    <paper-input name="item-option" label="Nueva opcion" id="newoption-[[index]]"></paper-input>
                </template>
            </dom-repeat>
            <paper-button on-click="add">Nueva opcion</paper-button>
            <paper-button on-click="register">Guardar</paper-button>
        </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        console.log(this.getState());
    }

    static get actions() {
        return {
            addQuestion(question) {
                return {
                    type: 'ADD_QUESTION',
                    question
                };
            },
        };
    }


    static get properties() {
        return {
            questions: {
                type: Object,
                statePath: 'questions'
            },
            options: {
                type: Object,
                value: []
            }
        };
    }

    register(){
        const question = this.$.newpoll.value;
        const inputOptions = this.shadowRoot.querySelectorAll('paper-input[name="item-option"]');
        const options = [];
        for(const option of inputOptions){
            if(option.value !== ''){
                options.push({
                    option: option.value,
                    votes: 0
                });
            }
        }
        const question_object = {
            question: question,
            options: options
        };
        this.options = [];
        this.$.newoption.value='';
        this.dispatch('addQuestion', question_object);
        console.log(this.getState());
    }

    add(){
        const newArray = this.options;
        newArray.push('');
        this.options = [];
        this.set('options',newArray);
    }


}
window.customElements.define('home-view', HomeView);
