const validator = require("../lib/main.js");

// true

test("default", () => {
  expect(validator.test(null)).toBe(true);
});

test("/toto/ custom pattern", () => {
  expect(validator.test(/toto/)).toBe(false);
});

test("toto custom pattern as string", () => {
  expect(validator.test("toto")).toBe(false);
});

test("nvalid custom pattern", () => {
  expect(validator.test("[")).toBe(false);
});
