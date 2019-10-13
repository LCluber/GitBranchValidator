const gitBranch = require('current-git-branch');

/**
 * Displays a string in the console
 * 
 * @param {pattern} String regex to validate
 */

const DEFAULT_PATTERN = new RegExp(/^(feature|bugfix|release|hotfix|refactor|test|doc)\/([a-z0-9_#-]){3,40}$/, 'i');
const SUCCESS_CODE = 0;
const FAILED_CODE = 1;

const test = function() {
    let branchName = gitBranch({altPath: '../'});
    console.log(branchName);
    if (branchName) {
        if (!DEFAULT_PATTERN.test(branchName)) {
            console.error('\x1b[31m%s\x1b[0m', 'Error: Invalid branch name ' + branchName);
            console.log('\x1b[37m%s\x1b[0m', 'Branch names in this project must adhere to this contract :');
            console.log('\x1b[33m%s\x1b[0m', DEFAULT_PATTERN);
            console.log('\x1b[37m%s\x1b[0m \x1b[33m%s\x1b[0m', 'Please rename your branch using ', '$ git branch -m <new-name>' );
            process.exitCode = FAILED_CODE;
        } else {
            process.exitCode = SUCCESS_CODE;
        }   
    } else {
        console.error('\x1b[31m%s\x1b[0m', 'Error: not a git repository');
        process.exitCode = FAILED_CODE;
    }
    return;
}

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.test = test;