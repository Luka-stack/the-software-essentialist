import { isPalindrome } from './index';

describe('palindrome checker', () => {
  test('that isPalindrome is a function', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  it.each(['mom', 'xmomx'])(
    'should return true if lowercase input without spaces is a palindrome',
    (n) => {
      expect(isPalindrome(n)).toBe(true);
    }
  );

  it.each(['hello', 'cat'])(
    'should return false if a lowercase input without spaces is not a palindrome',
    (n) => {
      expect(isPalindrome(n)).toBe(false);
    }
  );

  it.each(['MoM', 'xDoGoDx'])(
    'should return true if input is a palindrome without considering case and spaces',
    (n) => {
      expect(isPalindrome(n)).toBe(true);
    }
  );

  it.each(['HeLLO', 'EighT', 'One'])(
    'should return false if input is not a palindrome without considering case and spaces',
    (n) => {
      expect(isPalindrome(n)).toBe(false);
    }
  );

  it.each(['Was It A Rat I Saw', 'Never Odd or Even'])(
    'should return true if a sentence with spaces is a palindrome without considering casing',
    (n) => {
      expect(isPalindrome(n)).toBe(true);
    }
  );

  it.each(['WasItARatISaw', 'NeverOddorEven'])(
    'should return true if a sentence with spaces is a palindrome without considering casing',
    (n) => {
      expect(isPalindrome(n)).toBe(true);
    }
  );

  it.each(['Never Odd or Even1'])(
    'should return true if a sentence without spaces is a palindrome without considering casing',
    () => {
      expect(isPalindrome('WasItARatISaw')).toBe(true);
    }
  );
});
