import { isPalindrome } from './index';

describe('palindrome checker', () => {
  test('that isPalindrome is a function', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  it('should return true if lowercase string without spaces is a palindrome', () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  it('should return false if a lowercase string without spaces is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true if string is a palindrome without considering case and spaces', () => {
    expect(isPalindrome('Mom')).toBe(true);
  });

  it('should return false if string is not a palindrome without considering case and spaces', () => {
    expect(isPalindrome('Hello')).toBe(false);
  });
});
