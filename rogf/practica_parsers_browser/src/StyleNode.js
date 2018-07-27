'use strict';

class StyleNode{
    
    constructor(selectors, attributes, mixin){
        
        this.selectors = selectors;
        this.attributes = attributes;
        this.mixin = mixin;
        
    }
}

export {StyleNode};