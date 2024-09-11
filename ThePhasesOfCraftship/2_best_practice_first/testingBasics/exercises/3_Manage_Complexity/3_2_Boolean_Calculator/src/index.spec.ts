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
});
