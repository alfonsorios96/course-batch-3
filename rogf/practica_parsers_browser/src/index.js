'use strict';

import { Browser } from './Browser.js';

const fs = require('fs');


module.exports = class Main {

    constructor(fileName) {
        
        try {

            let contents = '';
            
            contents = fs.readFileSync(fileName, 'utf8');

            let regex = new RegExp('\\n|\\t|\\r', 'g');

            let input = contents.replace(regex, '');

            let browser = new Browser();

            browser.parseHTML(input);

        } catch (error) {
            throw new Error('File not found');
        }
    }
}