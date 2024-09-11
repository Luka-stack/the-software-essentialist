export function calculateBoolean(expression: string): boolean {
  const values = toArray(expression);

  if (values.length === 1) {
    return toBoolean(expression);
  }

  if (values[0] === 'not') {
    return toNotBoolean(values[1]);
  }

  return toBoolean(expression);
}

function toBoolean(value: string): boolean {
  return value.toLowerCase() === 'true' ? true : false;
}

function toNotBoolean(value: string): boolean {
  return !toBoolean(value);
}

function toArray(expression: string): string[] {
  return expression.split(' ');
}
