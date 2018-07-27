'use strict';

class StyleTools {

    static getRules(stringCSS) {

        let regex = new RegExp('.*?{.*?}', 'g');
        
        return stringCSS.match(regex);
    }

    static getSelectors(rule) {

        let regex = new RegExp('.*?{', 'g');
        
        let selectors = rule.match(regex);
        
        selectors[0] = selectors[0].replace(/{/g, '');
        selectors = selectors[0].split(',');
        
        let results = [];
        
        for(let i = 0; i !== selectors.length; i++){
            
            selectors[i] = selectors[i].trim();
            
            results.push(selectors[i]);
        }
        
        return results;
    }

    static getStyles(rule) {

        let regex = new RegExp('{.*?}', 'g');
        
        let kv = null;
        let styles = rule.match(regex);
        let result = [];
        
        styles[0] = styles[0].replace(/{/g, '');
        styles[0] = styles[0].replace(/}/g, '');
        styles[0] = styles[0].trim();
        styles = styles[0].split(';');
        
        for(let i = 0; i !== styles.length; i++){
            
            if(styles[i] !== ''){
                if(styles[i].indexOf('@') === -1){
                    
                    kv = styles[i].split(':');
            
                    result.push({key:kv[0].trim(),value:kv[1].trim()});
                    
                }
            }
        }
        
        return result;
    }
    
    static getMixin(rule) {

        let regex = new RegExp('{.*?}', 'g');
        
        let kv = null;
        let styles = rule.match(regex);
        let result = [];
        
        styles[0] = styles[0].replace(/{/g, '');
        styles[0] = styles[0].replace(/}/g, '');
        styles[0] = styles[0].trim();
        styles = styles[0].split(';');
        
        for(let i = 0; i !== styles.length; i++){
            
            if(styles[i] !== ''){
                
                if(styles[i].indexOf('@') !== -1){
                    
                    
                    styles[i] = styles[i].replace(/@/g, '');
                    styles[i] = styles[i].replace(/}/g, '');
                    styles[i] = styles[i].trim();
                    
                    return styles[i];
                    
                }
            }
        }
        
        return result;
    }
}

export {StyleTools};