#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
let args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
let customPattern = args[0];

const validator = require('../lib/validate.js');

validator.test(customPattern);