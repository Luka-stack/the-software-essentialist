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
});
