const pattern   = require("../lib/pattern.js");
const defaultPattern = pattern.default;

test("test default pattern to match", () => {
  expect(pattern.test(null).toString()).toMatch(defaultPattern.toString());
});

test("test default pattern to strict equal", () => {
  expect(pattern.test(null)).toStrictEqual(defaultPattern);
});

test("/toto/ pattern to match", () => {
  expect(pattern.test(/toto/).toString()).toMatch(/toto/.toString());
});

test("/toto/ pattern to strict equal", () => {
  expect(pattern.test(/toto/)).toStrictEqual(/toto/);
});

test("toto pattern as string to match", () => {
  expect(pattern.test("toto").toString()).toMatch(/toto/.toString());
});

test("toto pattern as string to strict equal", () => {
  expect(pattern.test("toto")).toStrictEqual(/toto/);
});

test("[ pattern", () => {
  expect(pattern.test("[")).toBe(false);
});
