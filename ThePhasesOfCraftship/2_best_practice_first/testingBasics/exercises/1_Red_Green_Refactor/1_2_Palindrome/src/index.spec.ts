import { isPalindrome } from './index';

describe('palindrome checker', () => {
  test('that isPalindrome is a function', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  it('should return true if lowercase string is a palindrome', () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  it('should return false if a lowercase string is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});
