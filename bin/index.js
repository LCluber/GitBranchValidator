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

/**
 * send your own regex pattern
 *
 * @param {customPattern} String regex to validate
 * @param {customMessage} String personalized end message
 */

const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const validator = require("../lib/main.js");

const optionDefinitions = [
  {
    name: "pattern",
    alias: "p",
    type: String,
    multiple: false,
    description: "Use a custom regex to validate project branch names."
  },
  {
    name: "message",
    alias: "m",
    type: String,
    multiple: false,
    description:
      "Use a custom message at the end of the error message. Like more help to understand your Gitflow."
  },
  {
    name: "help",
    alias: "h",
    type: Boolean,
    description: "Display this usage guide."
  }
];

const options = commandLineArgs(optionDefinitions);

const sections = [
  {
    header: "GitBranchValidator",
    content: "Generates something {italic very} important."
  },
  {
    header: "Options",
    optionList: optionDefinitions,
    content:
      "Project home: {underline https://github.com/LCluber/GitBranchValidator}"
  }
];
const usage = commandLineUsage(sections);

if (options.help) {
  console.log(usage);
} else {
  // // Delete the 0 and 1 argument (node and script.js)
  // let args = process.argv.splice(process.execArgv.length + 2);

  // // Retrieve the first argument
  // const customPattern = args[0];
  // const customMessage = args[1];
  validator.test(options.pattern, options.message);
}
