type ValidationResult = {
  result: boolean;
  errors: PasswordError[];
};

export enum PasswordError {
  LENGTH,
  NUMBER,
  UPPERCASE,
}

export function passwordValidator(password: string): ValidationResult {
  if (!isLengthValid(password)) {
    return {
      result: false,
      errors: [PasswordError.LENGTH],
    };
  }

  return {
    result: true,
    errors: [],
  };
}

function isLengthValid(password: string): boolean {
  return password.length >= 5 && password.length <= 15;
}
