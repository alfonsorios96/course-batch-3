'use strict';

import {Browser} from './Browser.js';

const fs = require('fs');

const init = function(filename) {
    
    let contents = '';

    try {
        
        contents = fs.readFileSync(fileName, 'utf8');

        let regex = new RegExp('\n', 'g');

        let input =  contents.replace(regex);

        let browser = new Browser();

        browser.parseHTML(input);

    } catch (error) {
        throw new Error('File not found');
    }
};


const argv = require('yargs');




module.exports = class Jobs {
    
    constructor() {}
    
    run(){

        argv.command('Parse [name]', 'Parsing ...', (yargs) => {
        yargs.positional('name', {
            type: 'string',
            default: 'Template'
        })
    }, function (argv) {

        console.log('Start', argv.name, 'Template name');
        
        init(argv.name);

    })
    .help('h')
    .alias('h', 'help')
    .epilogue('For more information, find the documentation at https://buuuuu.com.mx')
    .argv;
        
    }
}


