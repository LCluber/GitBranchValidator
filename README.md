### This project has been transferred to [DWTechs](https://github.com/DWTechs/GitBranchValidator). 

### Please update your project dependencies to the latest version [on the new repository](https://github.com/DWTechs/GitBranchValidator).


[![License: MIT](https://img.shields.io/npm/l/@lcluber/gitbranchvalidator.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40lcluber%2Fgitbranchvalidator.svg)](https://www.npmjs.com/package/@lcluber/gitbranchvalidator)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)

- [Synopsis](#synopsis)
- [Motivation](#motivation)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
  - [Local](#local)
- [Usage](#usage)
  - [Command line](#command-line)
  - [Pattern](#pattern)
  - [Workflow integration](#workflow-integration)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)

## Synopsis

**[GitBranchValidator](https://github.com/LCluber/GitBranchValidator)** is an open source git branch name validator library.

## Motivation

The goal of this library is to provide an easy way to check if the current branch name is valid before pushing it to the remote.

It's a good way to help developers keep their branch names clean on the repository and facilitate the workflow of a project with strict naming rules.

The default pattern follows the principles described [here](https://dwtechs.github.io/efficient-git/branch/).

You can also set your own rules using a [custom pattern](#pattern).

## Installation

### npm

```bash
$ npm i @lcluber/gitbranchvalidator -g
```

### Yarn

```bash
$ yarn add @lcluber/gitbranchvalidator -g
```

### Locally

Alternatively, if you are planning to use GitBranchValidator within your npm package only or with npx you can install it as a devDependency in your project.

```bash
$ npm i @lcluber/gitbranchvalidator --save-dev
```

```bash
$ yarn add @lcluber/gitbranchvalidator --dev
```

## Usage

### Command line

```bash
$ cd <git-project>
$ gbvalidator
```

Alternatively if you did not install GitBranchValidator globally you can use npx.

```bash
$ npx gbvalidator
```

Or as an npm script in your package.

```json
{
  "scripts": {
    "commit": "gbvalidator"
  }
}
```

### Pattern

- Default : **/^(feature|bugfix|release|hotfix|refactor|test|doc|build)\/([a-z0-9_#-\.\/]){3,40}$/**

The default pattern follows the principles described [here](https://dwtechs.github.io/efficient-git/branch/).

You can use your own custom pattern by adding an optional regexp :

```bash
$ cd <git-project>
$ gbvalidator --pattern "^(feat|fix)\/([a-z0-9_#-\.\/]){3,50}$"
```

_If you use this option for a npm command in package.json, you may need to properly escape your regex in order to get a valid JSON file._

### Message

You can customize the end of the error message :

```bash
$ cd <git-project>
$ gbvalidator --message "You can learn more about branch name conventions of this project on https://dwtechs.github.io/efficient-git/branch/"
```

### Workflow integration

Validate branch name on pre-commit with Husky :

```bash
$ npm install husky --save-dev
```

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "gbvalidator"
    }
  }
}
```

## options

| Option    | Alias |  Type   |                                             description |
| :-------- | :---: | :-----: | ------------------------------------------------------: |
| --pattern |  -p   | string  |                                   to use a custom regex |
| --message |  -m   | string  | to add a custom message at the end of the error message |
| --help    |  -h   | boolean |                            to learn about library usage |

## Contributors

GitBranchValidator is still in development and I would be glad to get all the help you can provide for this project.
To contribute please read **[NOTICE.md](https://github.com/LCluber/GitBranchValidator/blob/master/NOTICE.md)** for detailed installation guide.

## License

**[MIT](https://github.com/LCluber/GitBranchValidator/blob/master/LICENSE)**

## Stack

| Purpose         |                Choice                |                                                 Motivation |
| :-------------- | :----------------------------------: | ---------------------------------------------------------: |
| repository      |    [Github](https://github.com/)     | hosting for software development version control using Git |
| package manager | [npm](https://www.npmjs.com/get-npm) |                            default node.js package manager |
| unit testing    |      [Jest](https://jestjs.io/)      |              delightful testing with a focus on simplicity |
