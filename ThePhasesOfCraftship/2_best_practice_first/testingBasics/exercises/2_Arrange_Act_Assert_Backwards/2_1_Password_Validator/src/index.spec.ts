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
});
