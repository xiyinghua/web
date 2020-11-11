#!/usr/bin/env node
console.log('vue-temp-cli')
var program = require('commander');
program.version(require('./package.json').version)
program.parse(process.argv);