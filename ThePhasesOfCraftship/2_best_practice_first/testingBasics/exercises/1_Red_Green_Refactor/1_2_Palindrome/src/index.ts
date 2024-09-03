export function isPalindrome(text: string): boolean {
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - i - 1]) {
      return false;
    }
  }

  return true;
}
