/** MIT License
 *
 * Copyright (c) 2018 Ludovic CLUBER
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice (including the next
 * paragraph) shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * https://github.com/LCluber/GitBranchValidator
 */

const prompts = require('prompts');

const isGitBranch = require("../lib/branch").test;
const isPatternValid = require("../lib/pattern").test;
const isBranchValid = require("../lib/validate").test;

const SUCCESS_CODE = 0;
const FAILED_CODE = 1;
process.exitCode = FAILED_CODE;

const test = (customPattern, customMessage) => {
  const branchName = isGitBranch();
  if (branchName) {
    const regex = isPatternValid(customPattern);
    if (regex) {
      if (isBranchValid(branchName, regex, customMessage)) {
        console.log("\x1b[32m%s\x1b[0m", "This branch name is valid");
        process.exitCode = SUCCESS_CODE;
        return true;
      }
    }
  }
  (async () => {
    const response = await prompts({
      type: 'text',
      name: 'value',
      message: 'This branch name is not valid. Do you want to continue anyway [Y/n]?',
      validate: value => (value === 'Y' || value === 'yes' || value === 'n' || value === 'no') ? true : false
    });
    if (response.value === 'Y' || response.value === 'yes') {
      process.exitCode = SUCCESS_CODE;
      return true;
    }
    return false;
  })();
  
};

exports.test = test;
