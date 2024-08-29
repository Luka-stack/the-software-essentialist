import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('tests if function is defined', () => {
    expect(fizzbuzz).toBeDefined();
  });

  it('tests if function returns a string', () => {
    expect(typeof fizzbuzz(1)).toBe('string');
  });

  it('should return fizz for multiples of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');

    expect(fizzbuzz(6)).toBe('fizz');

    expect(fizzbuzz(9)).toBe('fizz');
  });
});
