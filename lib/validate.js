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

const DEFAULT_MESSAGE =
  "You can learn more about branch name convention on https://lcluber.github.io/LeadDevToolkit/git/BRANCH.html";

const test = (branchName, pattern, customMessage) => {
  if (!pattern.test(branchName)) {
    console.error("\x1b[31m%s\x1b[0m", "Error: Invalid branch name");
    console.log(
      "\x1b[37m%s\x1b[0m \x1b[33m%s\x1b[0m",
      "Branch names in this project must adhere to this contract :",
      pattern
    );
    console.log(
      "\x1b[37m%s\x1b[0m \x1b[33m%s\x1b[0m",
      "Please rename your branch using",
      "$ git branch -m <new-name>"
    );
    const message = customMessage || DEFAULT_MESSAGE;
    console.log("\x1b[37m%s\x1b[0m", message);
    return false;
  }
  return true;
};

exports.test = test;
