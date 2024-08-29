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

  it('should return buzz for multiples of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');

    expect(fizzbuzz(10)).toBe('buzz');

    expect(fizzbuzz(20)).toBe('buzz');
  });

  it('should return fizzbuzz for multiples of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');

    expect(fizzbuzz(30)).toBe('fizzbuzz');
  });

  it('should return string for non-multiples of 3 and 5', () => {
    expect(fizzbuzz(1)).toBe('1');

    expect(fizzbuzz(2)).toBe('2');

    expect(fizzbuzz(11)).toBe('11');
  });
});
