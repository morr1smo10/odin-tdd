import { analyzeArray } from "./analyzeArray";

test('test analyze array', () => {
  const data = [1,8,3,4,2,6];
  const res = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(analyzeArray(data)).toEqual(res);
})