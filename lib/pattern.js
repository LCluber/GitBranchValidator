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

const DEFAULT_PATTERN = new RegExp(
  /^(feature|bugfix|release|hotfix|refactor|test|doc|build)\/([a-z0-9_#-\.\/]){3,40}$/,
  ""
);

const test = customPattern => {
  if (customPattern) {
    if (!ch.isRegex(customPattern, false)) {
      console.error(
        "\x1b[31m%s\x1b[0m \x1b[33m%s\x1b[0m",
        "Invalid pattern :",
        customPattern
      );
      return false;
    }
    return new RegExp(customPattern);
  }
  return DEFAULT_PATTERN;
};
exports.default = DEFAULT_PATTERN;
exports.test = test;
