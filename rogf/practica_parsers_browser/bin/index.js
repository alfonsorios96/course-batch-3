#!/usr/bin/env node


const Main = require('../lib/bundle.js');


const argv = require('yargs')
    .command('parse [name]', 'Parse HTML & CSS file', (yargs) => {
        yargs.positional('name', {
            type: 'string',
            default: 'Template'
        })
    }, function (argv) {

        console.log('Start parsing', argv.name, '...');
        
        new Main(argv.name);

    })
    .help('h')
    .alias('h', 'help')
    .epilogue('For more information, find the documentation at https://buuuuu.com.mx')
    .argv;