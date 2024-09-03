import { isPalindrome } from './index';

describe('palindrome checker', () => {
  test('that isPalindrome is a function', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  it('should return true if lowercase input without spaces is a palindrome', () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  it('should return false if a lowercase input without spaces is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true if input is a palindrome without considering case and spaces', () => {
    expect(isPalindrome('Mom')).toBe(true);
  });

  it('should return false if input is not a palindrome without considering case and spaces', () => {
    expect(isPalindrome('Hello')).toBe(false);
  });

  it('should return true if a sentence with spaces is a palindrome without considering', () => {
    expect(isPalindrome('Was It A Rat I Saw')).toBe(true);
  });
});
