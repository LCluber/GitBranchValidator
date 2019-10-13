# Installation guide

- Install Git : [https://git-scm.com/](https://git-scm.com/)

- Install Node.js : [https://nodejs.org](https://nodejs.org)

- Clone the project :

  ```bash
  $ git clone https://github.com/LCluber/Ch.js.git
  ```

- Install global dependencies :

  ```bash
  $ npm i -g typescript rollup uglify-js jest commitizen semantic-release-cli rimraf
  ```

- Install project dependencies :

  ```bash
  $ cd <project-directory>
  $ npm i
  ```

# Workflow

- create a branch following [these instructions](https://github.com/LCluber/LeadDevToolkit/blob/master/BRANCH.md)

- build the library :

  ```bash
  $ npm run build
  ```

- test the library :

  ```bash
  $ npm run test
  ```

- commit your following [conventional commits rules](https://github.com/LCluber/LeadDevToolkit/blob/master/COMMIT.md) :

  ```bash
  $ npm run commit
  ```

  This command will guide you to write correct conventional commits and help us keep a clear changelog file.

## Folders

- dist/
- src/
- tests/

## Stack

| Purpose         |                    Choice                    |                                                                                Motivation |
| :-------------- | :------------------------------------------: | ----------------------------------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         | the world’s largest community of developers to discover, share, and build better software |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                                           default node.js package manager |
| type checking   | [TypeScript](https://www.typescriptlang.org) |                            static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup.js](https://rollupjs.org)       |                                                   advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                                             delightful testing with a focus on simplicity |
| deployment      |       [Travis](https://travis-ci.com/)       |                                                           test and deploy with confidence |
