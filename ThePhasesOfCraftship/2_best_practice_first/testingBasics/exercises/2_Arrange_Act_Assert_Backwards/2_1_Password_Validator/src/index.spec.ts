import { PasswordError, passwordValidator } from './index';

describe('password validator', () => {
  test('that function is defined', () => {
    expect(passwordValidator).toBeDefined();
  });

  test('that input is not valid if length is less than 5', () => {
    const result = passwordValidator('asd');

    expect(result.result).toBe(false);
    expect(result.errors).toContain(PasswordError.LENGTH);
  });

  test('that input is not valid if length is more than 15', () => {
    const result = passwordValidator('asdfghjkklpoiuytrewq');

    expect(result.result).toBe(false);
    expect(result.errors).toContain(PasswordError.LENGTH);
  });

  test('that input is not valid if does not contain at least a number', () => {
    const result = passwordValidator('qwerty');

    expect(result.result).toBe(false);
    expect(result.errors).toContain(PasswordError.NUMBER);
  });

  test('that input is not valid if does not contain at least an uppercase letter', () => {
    const result = passwordValidator('qwerty1');

    expect(result.result).toBe(false);
    expect(result.errors).toContain(PasswordError.UPPERCASE);
  });
});
