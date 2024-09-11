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
});
