[![License: MIT](https://img.shields.io/npm/l/@lcluber/chjs.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40lcluber%2Fchjs.svg)](https://www.npmjs.com/package/@lcluber/chjs)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)

- [Synopsis](#synopsis)
- [Motivation](#motivation)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
- [Usage](#usage)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
  - [IIFE](#iife)
- [API Reference](#api-reference)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)

## Synopsis

**[Ch.js](https://github.com/LCluber/Ch.js)** is an open source type checking library for Javascript.

## Motivation

The goal of this library is to provide an easy way to check if a variable is what it is supposed to be. Function, object, ascii, boolean, integer, string, json...

## Installation

### npm

```bash
$ npm i @lcluber/chjs
```

### Yarn

```bash
$ yarn add @lcluber/chjs
```

## Usage

### ES6

```javascript
import { isFunction, isArray } from "@lcluber/chjs";

if (isFunction(variable)) {
  //variable is a function
}

if (!isArray(variable)) {
  //variable is not an array
}
```

### CommonJS

```javascript
const ch = require("@lcluber/chjs/dist/ch.cjs");

if (ch.isFunction(variable)) {
  //variable is a function
}

if (!ch.isArray(variable)) {
  //variable is not an array
}
```

### IIFE

```html
<script src="node-modules/@lcluber/chjs/dist/ch.iife.min.js"></script>
```

```javascript
if (Ch.isFunction(variable)) {
  //variable is a function
}

if (!Ch.isArray(variable)) {
  //variable is not an array
}
```

## API Reference

```javascript
isBoolean(bool: any): boolean {}

isJson(string: any): boolean {}

isFunction(func: any): boolean {}

isObject(object: any): boolean {}

isArray(array: any): boolean {}

isAscii(code: any, extended: boolean = false): boolean {}

isInteger(number: any, typeCheck: boolean = true): boolean {}

isFloat(number: any, typeCheck: boolean = true): boolean {}

isNumber(number: any): boolean {}

isString(string: any): boolean {}

isHtmlElement(htmlElement: any): boolean {}

isHtmlEventAttribute(htmlEventAttribute: any): boolean {}

isNode(node: any): boolean {}

isEven(number: any): boolean {}

isOdd(number: any): boolean {}

isOrigin(number: any): boolean {}

isPositive(number: any): boolean {}

isNegative(number: any): boolean {}
```

## Contributors

Ch.js is still in development and I would be glad to get all the help you can provide for this project.
To contribute you can please read :

- **[NOTICE.md](https://github.com/LCluber/Ch.js/blob/master/NOTICE.md)** for detailed installation guide.

## License

**[MIT](https://github.com/LCluber/Ch.js/blob/master/LICENSE.md)**

## Stack

| Purpose         |                    Choice                    |                                                     Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         |     hosting for software development version control using Git |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                default node.js package manager |
| type checking   | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup.js](https://rollupjs.org)       |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |
| deployment      |       [Travis](https://travis-ci.com/)       |                                test and deploy with confidence |
