export function isPalindrome(text: string): boolean {
  const toTest = toLowerCase(removeSpaces(text));

  for (let i = 0; i < toTest.length / 2; i++) {
    if (toTest[i] !== toTest[toTest.length - i - 1]) {
      return false;
    }
  }

  return true;
}

function removeSpaces(text: string): string {
  return text.replace(/\s/g, '');
}

function toLowerCase(text: string): string {
  return text.toLowerCase();
}
