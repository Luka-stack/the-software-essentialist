export function calculateBoolean(expression: string): boolean {
  const result = toArray(expression).reduce<any>(
    (acc, value) => {
      if (isOperator(value)) {
        acc.op = toOperator(value);
        return acc;
      }

      if (isBoolean(value)) {
        if (acc.val1 === null) {
          acc.val1 = toBoolean(value);

          if (acc.op) {
            acc.val1 = acc.op(acc.val1);
            acc.op = null;
          }

          return acc;
        }

        if (acc.val2 === null) {
          acc.val2 = toBoolean(value);

          if (acc.op) {
            acc.val1 = acc.op(acc.val1, acc.val2);
            acc.val2 = null;
            acc.op = null;
          }

          return acc;
        }
      }

      return acc;
    },
    {
      op: null,
      val1: null,
      val2: null,
    }
  );

  return result.val1;
}

function toBoolean(value: string): boolean {
  return value.toLowerCase() === 'true' ? true : false;
}

function toOperator(value: string): Function {
  if (value.toLowerCase() === 'not') {
    return (value: boolean) => !value;
  }

  if (value.toLowerCase() === 'and') {
    return (value1: boolean, value2: boolean) => value1 && value2;
  }

  if (value.toLowerCase() === 'or') {
    return (value1: boolean, value2: boolean) => value1 || value2;
  }

  return () => false;
}

function isBoolean(value: string): boolean {
  return value.toLowerCase() === 'true' || value.toLowerCase() === 'false';
}

function isOperator(value: string): boolean {
  return (
    value.toLowerCase() === 'not' ||
    value.toLowerCase() === 'and' ||
    value.toLowerCase() === 'or'
  );
}

function toArray(expression: string): Array<string> {
  return expression.split(' ');
}
