const scanEnv = require("./index");

test("test for default files", () => {
  // test success event
  expect(scanEnv()).toBe(true);
});

test("test for passed files from different directory", () => {
  // test success event
  expect(
    scanEnv(
      "./testdata/.env1",
      "./testdata/.env.example1",
      "./testdata/.envignore1"
    )
  ).toBe(true);
});

test("test for ignore key", () => {
  // test success event
  expect(
    scanEnv(
      "./testdata/.env1",
      "./testdata/.env.example1",
      "./testdata/.envignore1"
    )
  ).toBe(true);
});

test("test for different file name", () => {
  // test success event
  expect(
    scanEnv(
      "./testdata/config.env",
      "./testdata/.env-example",
      "./testdata/.env-ignore"
    )
  ).toBe(true);
});

test("test for fail case", () => {
  // test success event
  expect(
    scanEnv(
      "./testdata/.env1",
      "./testdata/.env.example2",
      "./testdata/.env-ignore"
    )
  ).toBe(false);
});
