# Installation guide

- Install Git : [https://git-scm.com/](https://git-scm.com/)

- Install Node.js : [https://nodejs.org](https://nodejs.org)

- Clone the project :

  ```bash
  $ git clone https://github.com/LCluber/GitBranchValidator
  ```

- Install project dependencies :

  ```bash
  $ cd <project-directory>
  $ npm i
  ```

# Workflow

- create a branch following [these instructions](https://dwtechs.github.io/efficient-git/branch/)

- run the library :

  ```bash
  $ node ./bin
  ```

- test the library :

  ```bash
  $ npm run test
  ```

- commit your work following [conventional commits rules](https://dwtechs.github.io/efficient-git/conventional-commit/) :

  ```bash
  $ npm run commit
  ```

  This command will guide you to write correct conventional commits and help us keep a clear changelog file.

## Folders

- bin/
- lib/
- tests/

## Stack

| Purpose         |                Choice                |                                        Motivation                                         |
| :-------------- | :----------------------------------: | :---------------------------------------------------------------------------------------: |
| repository      |    [Github](https://github.com/)     | the world’s largest community of developers to discover, share, and build better software |
| package manager | [npm](https://www.npmjs.com/get-npm) |                              default node.js package manager                              |
| unit testing    |      [Jest](https://jestjs.io/)      |                       delightful testing with a focus on simplicity                       |
