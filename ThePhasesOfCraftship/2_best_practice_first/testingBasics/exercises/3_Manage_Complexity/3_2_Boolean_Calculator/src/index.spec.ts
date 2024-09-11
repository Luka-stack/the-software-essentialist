import { calculateBoolean } from './index';

describe('boolean calculator', () => {
  describe('single values', () => {
    it('should return true for "true"', () => {
      expect(calculateBoolean('true')).toBe(true);
    });
  });
});
