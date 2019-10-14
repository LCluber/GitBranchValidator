#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
let args = process.argv.splice(process.execArgv.length + 2);

const SUCCESS_CODE = 0;
const FAILED_CODE = 1;
// Retrieve the first argument
const customPattern = args[0];
let customRegex;

if (customPattern) {
  console.log("\x1b[37m%s\x1b[0m", "Custom pattern :");
  console.log("\x1b[33m%s\x1b[0m", customPattern);
  try {
    customRegex = new RegExp(customPattern);
  } catch (e) {
    console.error("\x1b[31m%s\x1b[0m", "Error: Invalid custom pattern");
    process.exitCode = FAILED_CODE;
    return false;
  }
}
const gitBranch = require("current-git-branch");
const validator = require("../lib/validate.js");

let branchName = gitBranch();

validator.test(branchName, customRegex);
