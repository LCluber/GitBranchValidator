#!/usr/bin/env node

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

const ch = require("@lcluber/chjs/dist/ch.cjs");

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
  if (!ch.isRegex(customPattern, false)) {
    console.error("\x1b[31m%s\x1b[0m", "Error: Invalid custom pattern");
    process.exitCode = FAILED_CODE;
    return false;
  }
  customRegex = new RegExp(customPattern);
}

const gitBranch = require("current-git-branch");
const validator = require("../lib/validate.js");

let branchName = gitBranch();

validator.test(branchName, customRegex);
