import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('tests if function is defined', () => {
    expect(fizzbuzz).toBeDefined();
  });

  it('tests if function returns a string', () => {
    expect(typeof fizzbuzz(1)).toBe('string');
  });

  it.each([3, 6, 9])('should return fizz when input is divisible by 3', (n) => {
    expect(fizzbuzz(n)).toBe('fizz');
  });

  it.each([5, 10, 20])(
    'should return buzz when input is divisible by 5',
    (n) => {
      expect(fizzbuzz(n)).toBe('buzz');
    }
  );

  it.each([15, 30])(
    'should return fizzbuzz when input is divisible by 3 and 5',
    (n) => {
      expect(fizzbuzz(n)).toBe('fizzbuzz');
    }
  );

  it.each([1, 2, 11])(
    'should return string when input is not divisibale by 3 or 5',
    (n) => {
      expect(fizzbuzz(n)).toBe(n.toString());
    }
  );

  it('should throw an error if n is not a number', () => {
    expect(() => fizzbuzz('1' as any)).toThrowError();
  });

  it('should throw an error if n is greater than 100', () => {
    expect(() => fizzbuzz(101)).toThrowError();
  });

  it('should throw and error if n is less than 1', () => {
    expect(() => fizzbuzz(-12)).toThrowError();
  });
});
