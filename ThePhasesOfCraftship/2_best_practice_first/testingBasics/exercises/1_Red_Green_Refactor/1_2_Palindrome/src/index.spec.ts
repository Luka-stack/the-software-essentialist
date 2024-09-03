import { isPalindrome } from './index';

describe('palindrome checker', () => {
  test('that isPalindrome is a function', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  it('should return true if lower case string is a palindrome', () => {
    expect(isPalindrome('mom')).toBe(true);
  });
});
