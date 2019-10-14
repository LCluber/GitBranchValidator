

/**
 * Displays a string in the console
 * 
 * @param {customPattern} String regex to validate
 */

const DEFAULT_PATTERN = new RegExp(/^(feature|bugfix|release|hotfix|refactor|test|doc)\/([a-z0-9_#-\.\/]){3,40}$/, '');
const SUCCESS_CODE = 0;
const FAILED_CODE = 1;

const test = (branchName, customPattern) => {
    if (branchName) {
        let pattern = customPattern || DEFAULT_PATTERN;
        if (!pattern.test(branchName)) {
            console.error('\x1b[31m%s\x1b[0m', 'Error: Invalid branch name ' + branchName);
            console.log('\x1b[37m%s\x1b[0m', 'Branch names in this project must adhere to this contract :');
            console.log('\x1b[33m%s\x1b[0m', DEFAULT_PATTERN);
            console.log('\x1b[37m%s\x1b[0m \x1b[33m%s\x1b[0m', 'Please rename your branch using ', '$ git branch -m <new-name>' );
            process.exitCode = FAILED_CODE;
            return false;
        } else {
            process.exitCode = SUCCESS_CODE;
            return true;
        }   
    } else {
        console.error('\x1b[31m%s\x1b[0m', 'Error: not a git repository');
        process.exitCode = FAILED_CODE;
        return false;
    }
}

exports.test = test;