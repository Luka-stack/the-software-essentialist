"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBoolean = void 0;
function calculateBoolean(expression) {
    var tokens = tokenize(expression);
    if (!tokens) {
        return false;
    }
    var stack = createStack(tokens);
    var result = evaluate(stack);
    return result;
}
exports.calculateBoolean = calculateBoolean;
function toBoolean(value) {
    return value.toLowerCase() === 'true' ? true : false;
}
function isBoolean(value) {
    return value.toLowerCase() === 'true' || value.toLowerCase() === 'false';
}
function isNegation(value) {
    return value.toLowerCase() === 'not';
}
function isAnd(value) {
    return value.toLowerCase() === 'and';
}
function isOr(value) {
    return value.toLowerCase() === 'or';
}
function isOperation(value) {
    return isAnd(value) || isOr(value);
}
function isOpenParenthesis(value) {
    return value === '(';
}
function isCloseParenthesis(value) {
    return value === ')';
}
function tokenize(expression) {
    return expression.match(/\b(not|and|or|true|false)\b|\(|\)/g);
}
function createStack(tokens) {
    var stack = [];
    var index = 0;
    while (index < tokens.length) {
        var token = tokens[index];
        if (isBoolean(token)) {
            stack.push(toBoolean(token));
        }
        else if (isNegation(token)) {
            var nextToken = tokens[++index];
            if (isBoolean(nextToken)) {
                stack.push(!toBoolean(nextToken));
            }
        }
        else if (isOperation(token)) {
            stack.push(token);
        }
        else if (isOpenParenthesis(token)) {
            var subExpression = [];
            var openParens = 1;
            while (openParens > 0) {
                var nextToken = tokens[++index];
                if (isOpenParenthesis(nextToken)) {
                    openParens++;
                }
                else if (isCloseParenthesis(nextToken)) {
                    openParens--;
                }
                if (openParens > 0) {
                    subExpression.push(toBoolean(nextToken));
                }
            }
            stack.push(evaluate(subExpression));
        }
        else if (isCloseParenthesis(token)) {
            throw new Error('Unexpected close parenthesis');
        }
        ++index;
    }
    return stack;
}
function evaluate(stack) {
    var result = stack.shift();
    // const resultAsStringOrBoolean = stack.shift();
    // let result =
    //   typeof resultAsStringOrBoolean === 'boolean'
    //     ? resultAsStringOrBoolean
    //     : toBoolean(resultAsStringOrBoolean as string);
    while (stack.length > 0) {
        var operator = stack.shift();
        var nextValue = stack.shift();
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
