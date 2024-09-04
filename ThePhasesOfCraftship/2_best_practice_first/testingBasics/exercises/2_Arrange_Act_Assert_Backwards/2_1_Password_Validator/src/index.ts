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
  const errors: PasswordError[] = [];

  if (!isLengthValid(password)) {
    errors.push(PasswordError.LENGTH);
  }

  if (!containsNumber(password)) {
    errors.push(PasswordError.NUMBER);
  }

  if (!containsUppercase(password)) {
    errors.push(PasswordError.UPPERCASE);
  }

  return {
    result: errors.length === 0,
    errors,
  };
}

function isLengthValid(password: string): boolean {
  return password.length >= 5 && password.length <= 15;
}

function containsNumber(password: string): boolean {
  return /\d/.test(password);
}

function containsUppercase(password: string): boolean {
  return /[A-Z]/.test(password);
}
