export function calculateBoolean(expression: string): boolean {
  const tokens = tokenize(expression);

  if (!tokens) {
    return false;
  }

  const stack = createStack(tokens);
  const result = evaluate(stack);

  return result;
}

function toBoolean(value: string): boolean {
  return value.toLowerCase() === 'true' ? true : false;
}

function isBoolean(value: string): boolean {
  return value.toLowerCase() === 'true' || value.toLowerCase() === 'false';
}

function isNegation(value: string): boolean {
  return value.toLowerCase() === 'not';
}

function isAnd(value: string): boolean {
  return value.toLowerCase() === 'and';
}

function isOr(value: string): boolean {
  return value.toLowerCase() === 'or';
}

function isOperation(value: string): boolean {
  return isAnd(value) || isOr(value);
}

function tokenize(expression: string): RegExpMatchArray | null {
  return expression.match(/\b(not|and|or|true|false)\b|\(|\)/g);
}

function createStack(tokens: string[]): Array<boolean | string> {
  const stack: Array<boolean | string> = [];
  let index = 0;

  while (index < tokens.length) {
    const token = tokens[index];

    if (isBoolean(token)) {
      stack.push(toBoolean(token));
    } else if (isNegation(token)) {
      const nextToken = tokens[++index];
      if (isBoolean(nextToken)) {
        stack.push(!toBoolean(nextToken));
      }
    } else if (isOperation(token)) {
      stack.push(token);
    }

    ++index;
  }

  return stack;
}

function evaluate(stack: Array<string | boolean>): boolean {
  let result = stack.shift() as boolean;

  while (stack.length > 0) {
    const operator = stack.shift() as string;
    const nextValue = stack.shift() as boolean;

    if (isAnd(operator)) {
      result = result && nextValue;

      continue;
    }

    if (isOr(operator)) {
      result = result || nextValue;

      continue;
    }
  }

  return result;
}
