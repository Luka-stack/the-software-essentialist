export function fizzbuzz(n: number): string {
  if (n % 3 === 0) {
    return 'fizz';
  }

  if (n % 5 === 0) {
    return 'buzz';
  }

  return '';
}
