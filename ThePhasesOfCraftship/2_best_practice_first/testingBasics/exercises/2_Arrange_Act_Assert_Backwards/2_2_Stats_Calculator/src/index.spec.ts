import { statsCalculator } from './index';

describe('stats calculator', () => {
  it('should throw an error if empty array is passed', () => {
    expect(() => statsCalculator([])).toThrowError(
      'Empty array is not allowed'
    );
  });

  it('should throw and error if non-array is passed', () => {
    expect(() => statsCalculator(1 as any)).toThrowError(
      'Input should be an array'
    );
  });

  it.each([
    [[1, 2, 3], { min: 1 }],
    [[-1, 0, 1], { min: -1 }],
    [[1, 1, 1], { min: 1 }],
  ])(`should return min of the array`, (arr, expected) => {
    const result = statsCalculator(arr);

    expect(result.min).toEqual(expected.min);
  });

  it.each([
    [[1, 2, 3], { max: 3 }],
    [[-1, 0, 1], { max: 1 }],
    [[1, 1, 1], { max: 1 }],
  ])(`should return max of the array`, (arr, expected) => {
    const result = statsCalculator(arr);

    expect(result.max).toEqual(expected.max);
  });

  it.each([
    [[1, 1, 1, 1, 1], { len: 5 }],
    [[-1, 0, 1], { len: 3 }],
    [[1], { len: 1 }],
  ])('should return length of the array', (arr, expected) => {
    const result = statsCalculator(arr);

    expect(result.len).toEqual(expected.len);
  });

  it.each([
    [[100, 50, 2], { avg: 50.67 }],
    [[1, 2, 3], { avg: 2 }],
    [[-1, 0, 1], { avg: 0 }],
  ])(`should return average of the array`, (arr, expected) => {
    const result = statsCalculator(arr);

    expect(result.avg).toBeCloseTo(expected.avg, 2);
  });
});
