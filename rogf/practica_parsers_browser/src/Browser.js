import {TagTools} from './TagTools.js';
import {StyleTools} from './StyleTools.js';

import {StyleNode} from './StyleNode.js';
import {TagNode} from './TagNode.js';

class Browser {

    constructor() {
        console.log('Init Browser');
        
        this.DOM = null;
        this.CSSOM = [];
        this.parents = [];
    }
    
    parseHTML(stringFromfile){
        
                
        let tags = TagTools.getAllTags(stringFromfile);
        
        for(const tag of tags){
            
            if(!TagTools.isClose(tag)){
                
                if(TagTools.isStyle(tag)){
                    // @todo
                    
                    this.parseCSS(TagTools.extractNextStyle(stringFromfile));
                    
                    stringFromfile = TagTools.removeNextStyle(stringFromfile);
                    
                }else{
                    
                    // New node
                    let name = tag.replace(/</g, '');
                    name = name.replace(/>/g, '');
                    
                    let tn = new TagNode(name, TagTools.getAttrs(tag));
                    console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
                    console.log(tn);
                    console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
                    
                    if(TagTools.isSingleton(tag)){
                                                
                        this.parents[this.parents.length - 1].addNode(tn);
                        
                    }else{
                        if(this.parents.length === 0){
                        
                            this.DOM = tn;
                            this.parents.push(tn);

                        }else{

                            this.parents[this.parents.length - 1].addNode(tn);

                            this.parents.push(tn);
                        }
                    }
                    
                    
                    
                    
                }
                
            }else if(TagTools.isClose(tag)){
                
                if(TagTools.isStyle(tag) === false){
                    
                    this.parents.pop();
                }
            }
        }        
        console.log("-------------------------------------------------------------------------------");
        console.log("-------------------------------------------------------------------------------");
        console.log('DOM: @todo Funcion recursiva para imprimir valores de los nodos del objeto:', this.DOM);
        console.log("-------------------------------------------------------------------------------");
        console.log("-------------------------------------------------------------------------------");
        
        console.log("-------------------------------------------------------------------------------");
        console.log("-------------------------------------------------------------------------------");
        console.log('CSS styles array:',this.CSSOM);
        console.log("-------------------------------------------------------------------------------");
        
    }
    
    parseCSS(stringFromfile){
        
        let rules = StyleTools.getRules(stringFromfile);
        
        for(const rule of rules){
            let selectors = StyleTools.getSelectors(rule);
            let styles = StyleTools.getStyles(rule);
            let mixin = StyleTools.getMixin(rule);
            
            this.CSSOM.push(new StyleNode(selectors, styles, mixin));
        }
    }

}

export {Browser};