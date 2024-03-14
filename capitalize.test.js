import { capitalize } from "./capitalize";

test('abc capitalize is Abc', () => {
  expect(capitalize("abc")).toBe("Abc");
});