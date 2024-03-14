function analyzeArray(input) {
  let sum = 0;
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    if (input[i] > max) {
      max = input[i];
    }
    if (input[i] < min) {
      min = input[i];
    }
  }
  const avg = sum / input.length;
  return {
    average: avg,
    min: min,
    max: max,
    length: input.length
  };
}

export {analyzeArray};