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

/**
 * Displays a string in the console
 *
 * @param {customPattern} String regex to validate
 */

const DEFAULT_PATTERN = new RegExp(
  /^(feature|bugfix|release|hotfix|refactor|test|doc)\/([a-z0-9_#-\.\/]){3,40}$/,
  ""
);
const SUCCESS_CODE = 0;
const FAILED_CODE = 1;

const test = (branchName, customPattern) => {
  if (branchName) {
    console.log(
      "\x1b[37m%s\x1b[0m \x1b[33m%s\x1b[0m",
      "Branch name : ",
      branchName
    );
    let pattern = customPattern || DEFAULT_PATTERN;
    if (!pattern.test(branchName)) {
      console.error("\x1b[31m%s\x1b[0m", "Error: Invalid branch name");
      console.log(
        "\x1b[37m%s\x1b[0m",
        "Branch names in this project must adhere to this contract :"
      );
      console.log("\x1b[33m%s\x1b[0m", pattern);
      console.log(
        "\x1b[37m%s\x1b[0m \x1b[33m%s\x1b[0m",
        "Please rename your branch using ",
        "$ git branch -m <new-name>"
      );
      process.exitCode = FAILED_CODE;
      return false;
    } else {
      process.exitCode = SUCCESS_CODE;
      return true;
    }
  } else {
    console.error("\x1b[31m%s\x1b[0m", "Error: not a git repository");
    process.exitCode = FAILED_CODE;
    return false;
  }
};

exports.test = test;
