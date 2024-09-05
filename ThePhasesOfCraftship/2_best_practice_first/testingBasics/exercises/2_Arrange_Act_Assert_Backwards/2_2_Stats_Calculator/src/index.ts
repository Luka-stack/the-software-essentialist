type Stats = {
  min: number;
  max: number;
  len: number;
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
    max: -Infinity,
    len: 0,
  };

  for (const num of arr) {
    if (num < result.min) {
      result.min = num;
    }

    if (num > result.max) {
      result.max = num;
    }

    result.len++;
  }

  return result;
}
