'use strict';

class TagNode{
    
    constructor(name, attributes){
        
        this.name = `<${ name }>`;
        this.tag = `<${ name.replace( /-([a-z])/ig,( all, letter ) =>{return letter.toUpperCase();}) }>`;
        this.attributes = attributes;
        this.nodes = [];
        
    }
    
    addNode(node){
        this.nodes.push(node);
    }
}

export {TagNode};