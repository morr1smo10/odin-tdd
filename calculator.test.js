import { calculator } from "./calculator";

test('3 + 2 = 5', () => {
  expect(calculator.add(3, 2)).toBe(5);
});

test('3 - 2 = 1', () => {
  expect(calculator.sub(3, 2)).toBe(1);
});

test('3 * 2 = 6', () => {
  expect(calculator.mul(3, 2)).toBe(6);
});

test('3 / 2 = 1.5', () => {
  expect(calculator.div(3, 2)).toBe(1.5);
});