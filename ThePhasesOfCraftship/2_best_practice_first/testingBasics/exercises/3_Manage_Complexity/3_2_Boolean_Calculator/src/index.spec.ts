import { calculateBoolean } from './index';

describe('boolean calculator', () => {
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
});
