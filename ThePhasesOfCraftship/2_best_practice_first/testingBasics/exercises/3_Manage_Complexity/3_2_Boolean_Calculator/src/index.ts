export function calculateBoolean(expression: string): boolean {
  const tokens = tokenize(expression);

  if (!tokens) {
    return false;
  }

  const result = evalExpression(tokens, new Index());

  return result;
}

class Index {
  private _index = 0;

  get index(): number {
    return this._index;
  }

  increment(): Index {
    this._index++;
    return this;
  }

  decrement(): Index {
    this._index--;
    return this;
  }
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

function isOpenParenthesis(value: string): boolean {
  return value === '(';
}

function isCloseParenthesis(value: string): boolean {
  return value === ')';
}

function tokenize(expression: string): RegExpMatchArray | null {
  return expression.match(/\b(not|and|or|true|false)\b|\(|\)/g);
}

function evalExpression(tokens: string[], index: Index): boolean {
  const stack: Array<string | boolean> = [];

  while (index.index < tokens.length) {
    const token = tokens[index.index];

    if (isBoolean(token)) {
      stack.push(toBoolean(token));
      index.increment();

      continue;
    }

    if (isOperation(token)) {
      stack.push(token);
      index.increment();

      continue;
    }

    if (isNegation(token)) {
      stack.push(!evalExpression(tokens, index.increment()));

      break;
    }

    if (isOpenParenthesis(token)) {
      stack.push(evaluateParenthesis(tokens, index.increment()));
      continue;
    }

    break;
  }

  return evaluate(stack);
}

function evaluateParenthesis(tokens: string[], index: Index): boolean {
  const subExpression: Array<string | boolean> = [];

  while (true) {
    const token = tokens[index.index];

    if (isOpenParenthesis(token)) {
      subExpression.push(evaluateParenthesis(tokens, index.increment()));

      continue;
    }

    if (isCloseParenthesis(token)) {
      index.increment();
      break;
    }

    if (isBoolean(token)) {
      subExpression.push(toBoolean(token));
      index.increment();
      continue;
    }

    if (isOperation(token)) {
      subExpression.push(token);
      index.increment();
      continue;
    }

    if (isNegation(token)) {
      subExpression.push(!evalExpression(tokens, index.increment()));
    }
  }

  return evaluate(subExpression);
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
