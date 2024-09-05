import { statsCalculator } from './index';

describe('stats calculator', () => {
  it('should throw an error if empty array is passed', () => {
    expect(() => statsCalculator([])).toThrowError(
      'Empty array is not allowed'
    );
  });
});
