import { reverseString } from "./reverseString";

test('abc reverseString is cba', () => {
  expect(reverseString("abc")).toBe("cba");
});