const validator = require('../lib/validate.js');

// true

test("feature/toto", () => {
  expect(validator.test("feature/toto", null)).toBe(true);
});

test("bugfix/#344/toto", () => {
  expect(validator.test("bugfix/#344/toto", null)).toBe(true);
});

test("release/v0.1.1", () => {
  expect(validator.test("release/v0.1.1", null)).toBe(true);
});

test("hotfix/#4561/toto", () => {
  expect(validator.test("hotfix/#4561/toto", null)).toBe(true);
});

test("refactor/toto", () => {
  expect(validator.test("refactor/toto", null)).toBe(true);
});

test("test/toto", () => {
  expect(validator.test("test/toto", null)).toBe(true);
});

test("doc/toto", () => {
  expect(validator.test("doc/toto", null)).toBe(true);
});


//false

test("feature\toto", () => {
  expect(validator.test("feature\toto", null)).toBe(false);
});

test("documentation/toto", () => {
  expect(validator.test("documentation/toto", null)).toBe(false);
});

test("feat/toto", () => {
  expect(validator.test("feat/toto", null)).toBe(false);
});

test("DOC/toto", () => {
  expect(validator.test("DOC/toto", null)).toBe(false);
});