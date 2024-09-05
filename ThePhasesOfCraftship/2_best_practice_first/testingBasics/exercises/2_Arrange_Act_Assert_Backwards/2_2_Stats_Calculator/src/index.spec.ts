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

  it('should return min of the array', () => {
    expect(statsCalculator([1, 2, 3])).toEqual({ min: 1 });
  });
});
