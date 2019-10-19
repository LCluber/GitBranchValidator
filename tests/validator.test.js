const pattern   = require("../lib/pattern.js");
const validator = require("../lib/validate.js");
const defaultPattern = pattern.default;

// true

test("feature/toto", () => {
  expect(validator.test("feature/toto", defaultPattern)).toBe(true);
});

test("bugfix/#344/toto", () => {
  expect(validator.test("bugfix/#344/toto", defaultPattern)).toBe(true);
});

test("release/v0.1.1", () => {
  expect(validator.test("release/v0.1.1", defaultPattern)).toBe(true);
});

test("hotfix/#4561/toto", () => {
  expect(validator.test("hotfix/#4561/toto", defaultPattern)).toBe(true);
});

test("refactor/toto", () => {
  expect(validator.test("refactor/toto", defaultPattern)).toBe(true);
});

test("test/toto", () => {
  expect(validator.test("test/toto", defaultPattern)).toBe(true);
});

test("doc/toto", () => {
  expect(validator.test("doc/toto", defaultPattern)).toBe(true);
});


//false

test("feature\toto", () => {
  expect(validator.test("feature\toto", defaultPattern)).toBe(false);
});

test("documentation/toto", () => {
  expect(validator.test("documentation/toto", defaultPattern)).toBe(false);
});

test("feat/toto", () => {
  expect(validator.test("feat/toto", defaultPattern)).toBe(false);
});

test("DOC/toto", () => {
  expect(validator.test("DOC/toto", defaultPattern)).toBe(false);
});