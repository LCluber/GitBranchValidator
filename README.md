[![License: MIT](https://img.shields.io/npm/l/@lcluber/gitbranchvalidator.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40lcluber%2Fgitbranchvalidator.svg)](https://www.npmjs.com/package/@lcluber/gitbranchvalidator)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)

- [Synopsis](#synopsis)
- [Motivation](#motivation)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
- [Usage](#usage)
  - [Node.js](#node.js)
  - [Husky](#husky)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)

## Synopsis

**[GitBranchValidator](https://github.com/LCluber/GitBranchValidator)** is an open source git branch name validator library for npm.

## Motivation

The goal of this library is to provide an easy way to check if the current branch name is valid.

## Installation

### npm

```bash
$ npm i @lcluber/gitbranchvalidator -g
```

### Yarn

```bash
$ yarn add @lcluber/gitbranchvalidator -g
```

## Usage

### Node.js

```bash
$ cd <git-project>
$ gbvalidator "<optional-custom-regex>"
```

### Husky

Validate branch name on pre-commit with Husky

```bash
$ npm install husky --save-dev
```

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "gbvalidator \"<optional-custom-regex>\""
    }
  }
}
```

## Contributors

GitBranchValidator is still in development and I would be glad to get all the help you can provide for this project.
To contribute you can please read :

- **[NOTICE.md](https://github.com/LCluber/GitBranchValidator/blob/master/NOTICE.md)** for detailed installation guide.

## License

**[MIT](https://github.com/LCluber/GitBranchValidator/blob/master/LICENSE.md)**

## Stack

| Purpose         |                    Choice                    |                                                     Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         |     hosting for software development version control using Git |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                default node.js package manager |
| type checking   | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup.js](https://rollupjs.org)       |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |
| deployment      |       [Travis](https://travis-ci.com/)       |                                test and deploy with confidence |
