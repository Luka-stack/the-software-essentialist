export function fizzbuzz(n: number): string {
  if (typeof n !== 'number') {
    throw new Error('argument must be a number');
  }

  if (n > 100) {
    throw new Error('argument must be less than or equal to 100');
  }

  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  }

  if (n % 3 === 0) {
    return 'fizz';
  }

  if (n % 5 === 0) {
    return 'buzz';
  }

  return n.toString();
}
