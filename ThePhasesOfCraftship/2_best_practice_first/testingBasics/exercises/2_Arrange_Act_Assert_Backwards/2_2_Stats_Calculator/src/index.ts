type Stats = {
  min: number;
};

export function statsCalculator(arr: number[]) {
  if (!Array.isArray(arr)) {
    throw new Error('Input should be an array');
  }

  if (arr.length === 0) {
    throw new Error('Empty array is not allowed');
  }

  const result: Stats = {
    min: Infinity,
  };

  for (const num of arr) {
    if (num < result.min) {
      result.min = num;
    }
  }

  return result;
}
