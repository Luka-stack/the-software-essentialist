export function calculateBoolean(expression: string): boolean {
  return toBoolean(expression);
}

function toBoolean(value: string): boolean {
  return value.toLowerCase() === 'true' ? true : false;
}
