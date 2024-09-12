export function calculateBoolean(expression: string): boolean {
  const tokens = tokenize(expression);

  if (!tokens) {
    return false;
  }

  // const stack = createStack(tokens);
  const stack: Array<string | boolean> = [];
  createStackRec(tokens, stack, 0);
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

function isOpenParenthesis(value: string): boolean {
  return value === '(';
}

function isCloseParenthesis(value: string): boolean {
  return value === ')';
}

function tokenize(expression: string): RegExpMatchArray | null {
  return expression.match(/\b(not|and|or|true|false)\b|\(|\)/g);
}

function createStackRec(
  tokens: string[],
  stack: Array<string | boolean>,
  index: number
): number {
  while (index < tokens.length) {
    const token = tokens[index];

    if (isBoolean(token)) {
      stack.push(toBoolean(token));
      ++index;

      continue;
    }

    if (isOperation(token)) {
      stack.push(token);
      ++index;

      continue;
    }

    if (isNegation(token)) {
      const nextStack: Array<string | boolean> = [];
      index = createStackRec(tokens, nextStack, index + 1);
      stack.push(!evaluate(nextStack));

      break;
    }

    if (isOpenParenthesis(token)) {
      index = createParenthesisStack(tokens, stack, index + 1);
      continue;
    }

    break;
  }

  return index;
}

function createParenthesisStack(
  tokens: string[],
  stack: Array<string | boolean>,
  index: number
): number {
  const subExpression: Array<string | boolean> = [];

  while (true) {
    const token = tokens[index];

    if (isOpenParenthesis(token)) {
      index = createParenthesisStack(tokens, subExpression, index);
      ++index;

      continue;
    }

    if (isCloseParenthesis(token)) {
      ++index;
      break;
    }

    if (isBoolean(token)) {
      subExpression.push(toBoolean(token));
      ++index;
      continue;
    }

    if (isOperation(token)) {
      subExpression.push(token);
      ++index;
      continue;
    }

    if (isNegation(token)) {
      const nextStack: Array<string | boolean> = [];
      index = createStackRec(tokens, nextStack, index + 1);
      subExpression.push(!evaluate(nextStack));
    }
  }

  stack.push(evaluate(subExpression));

  return index;
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
      } else if (isOpenParenthesis(nextToken)) {
        const subExpression: Array<string | boolean> = [];
        let openParens = 1;

        while (openParens > 0) {
          const nextToken = tokens[++index];

          if (isOpenParenthesis(nextToken)) {
            openParens++;
          } else if (isCloseParenthesis(nextToken)) {
            openParens--;
          }

          if (openParens > 0) {
            if (isBoolean(nextToken)) {
              subExpression.push(toBoolean(nextToken));
            } else if (isOperation(nextToken)) {
              subExpression.push(nextToken);
            } else if (isNegation(nextToken)) {
              const nextToken2 = tokens[++index];

              if (isBoolean(nextToken2)) {
                subExpression.push(!toBoolean(nextToken2));
              }
            }
          }
        }

        const result = evaluate(subExpression);
        stack.push(!result);
      }
    } else if (isOperation(token)) {
      stack.push(token);
    } else if (isOpenParenthesis(token)) {
      const subExpression: Array<string | boolean> = [];
      let openParens = 1;

      while (openParens > 0) {
        const nextToken = tokens[++index];

        if (isOpenParenthesis(nextToken)) {
          openParens++;
        } else if (isCloseParenthesis(nextToken)) {
          openParens--;
        }

        if (openParens > 0) {
          if (isBoolean(nextToken)) {
            subExpression.push(toBoolean(nextToken));
          } else if (isOperation(nextToken)) {
            subExpression.push(nextToken);
          } else if (isNegation(nextToken)) {
            const nextToken2 = tokens[++index];

            if (isBoolean(nextToken2)) {
              subExpression.push(!toBoolean(nextToken2));
            }
          }
        }
      }

      stack.push(evaluate(subExpression));
    } else if (isCloseParenthesis(token)) {
      throw new Error('Unexpected close parenthesis');
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
