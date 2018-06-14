'use strict';

class TagTools {

    static getAllTags(stringVal) {

        let regex = new RegExp('<(.|\\n)*?>', 'g');
        
        return stringVal.match(regex);
    }

    static isOpen(stringVal) {
        
        var regex = new RegExp('<\\s*(\\w)+\\s*>', 'g');
        
        return regex.test(stringVal);
    }
    
    static isClose(stringVal) {
        
        var regex = new RegExp('<\\s*\/\\s*(\\w)+\\s*>', 'g');
        
        return regex.test(stringVal);
    }
    
    static isAutoClose(stringVal) {
        
        var regex = new RegExp('<\\s*([\\w\"\.-=\\s])+\\s*\/\\s*>', 'g');
        
        return regex.test(stringVal);
    }
    
    static isStyle(stringVal) {
        
        var regex = new RegExp('(<\\s*style\\s*(.*?)\\s*>)|(<\\s*\/\\s*style\\s*>)', 'g');
        
        return regex.test(stringVal);
    }
    
    static isSingleton(stringVal) {
        
        var regex = new RegExp('<\\s*((area)|(base)|(br)|(col)|(command)|(embed)|(hr)|(img)|(input)|(keygen)|(link)|(meta)|(param)|(source)|(track)|(wbr))\\s*(.*?)\\s*>', 'g');
        
        return regex.test(stringVal);
    }
    
    static extractNextStyle(stringVal) {

        let regex = new RegExp('<\s*style[^>]*>(.*?)<\s*/\s*style>', 'g');
        let style = regex.exec(stringVal);

        if (style !== null) {
            return style[1];
        }
        
        return null;
    }
    
    static removeNextStyle(stringVal){
        
        let regex = new RegExp('<\s*style[^>]*>(.*?)<\s*/\s*style>');
        
        return stringVal.replace(regex, '');
    }
    
    
    

    static getAttrs(tag) {
                
        var regex = new RegExp("(([\\w-])+=(([\\w])+|('([\\w\\s])+')|(\"([\\w\\s])+\")|))", 'g');
        
        let attrs = tag.match(regex);
        let kv = null;
        let result = [];
        
        if(attrs !== null){
            
            for(let i = 0; i !== attrs.length; i++){
            
                attrs[i] = attrs[i].replace(/'/g, '');
                attrs[i] = attrs[i].replace(/"/g, '');
                attrs[i] = attrs[i].trim();

                kv = attrs[i].split('=');

                result.push({key:kv[0],value:kv[1]});
            }
            
        }

        return result;
    }
}

export { TagTools };