import { calculateBoolean } from './index';

describe('boolean calculator', () => {
  describe('invalid expressions', () => {
    it('should throw an error for an empty string', () => {
      expect(() => calculateBoolean('')).toThrowError('Invalid expression');
    });

    it('should throw an error for an invalid token', () => {
      expect(() => calculateBoolean('invalid')).toThrowError(
        'Invalid expression'
      );
    });

    it('should throw an error for an invalid operation', () => {
      expect(() => calculateBoolean('true invalid true')).toThrowError(
        'Invalid expression'
      );
    });
  });

  describe('single values', () => {
    it('should return true for "true"', () => {
      expect(calculateBoolean('true')).toBe(true);
    });

    it('should return false for "false"', () => {
      expect(calculateBoolean('false')).toBe(false);
    });
  });

  describe('not operator', () => {
    it('should negate the next boolean value', () => {
      expect(calculateBoolean('not true')).toBe(false);
      expect(calculateBoolean('not false')).toBe(true);
    });

    it('should dobule negate the next boolean value', () => {
      expect(calculateBoolean('not not true')).toBe(true);
      expect(calculateBoolean('not not false')).toBe(false);
    });
  });

  describe('and operator', () => {
    it('should return true if both values are true', () => {
      expect(calculateBoolean('true and true')).toBe(true);
    });

    it('should return false if one value is false', () => {
      expect(calculateBoolean('true and false')).toBe(false);
      expect(calculateBoolean('false and true')).toBe(false);
    });

    it('should return false if both values are false', () => {
      expect(calculateBoolean('false and false')).toBe(false);
    });
  });

  describe('or operator', () => {
    it('should return true if one value is true', () => {
      expect(calculateBoolean('true or false')).toBe(true);
      expect(calculateBoolean('false or true')).toBe(true);
    });

    it('should return false if both values are false', () => {
      expect(calculateBoolean('false or false')).toBe(false);
    });

    it('should return true if both values are true', () => {
      expect(calculateBoolean('true or true')).toBe(true);
    });
  });

  describe('combination of operators', () => {
    it('should return true for "true and true or false"', () => {
      expect(calculateBoolean('true and true or false')).toBe(true);
    });

    it('should return true for "true or false and true"', () => {
      expect(calculateBoolean('true or false and true')).toBe(true);
    });

    it('should return true for "true and not false"', () => {
      expect(calculateBoolean('true and not false')).toBe(true);
    });
  });

  describe('parenthesis', () => {
    it('should return true for "(true)"', () => {
      expect(calculateBoolean('(true)')).toBe(true);
    });

    it('should return false for "(false)"', () => {
      expect(calculateBoolean('(false)')).toBe(false);
    });

    it('should return true for "true and (true or false)"', () => {
      expect(calculateBoolean('true and (true or false)')).toBe(true);
    });

    it('should return false for "true and (false or false)"', () => {
      expect(calculateBoolean('true and (false or false)')).toBe(false);
    });

    it('should return true for "true and (not false)"', () => {
      expect(calculateBoolean('true and (not false)')).toBe(true);
    });

    it('should return false for "true and (not true)"', () => {
      expect(calculateBoolean('true and (not true)')).toBe(false);
    });

    it('should return false for "not (true and true)"', () => {
      expect(calculateBoolean('not (true and true)')).toBe(false);
    });

    it('should return true for "not (not (true and true))"', () => {
      expect(calculateBoolean('not (not (true and true))')).toBe(true);
    });
  });
});
