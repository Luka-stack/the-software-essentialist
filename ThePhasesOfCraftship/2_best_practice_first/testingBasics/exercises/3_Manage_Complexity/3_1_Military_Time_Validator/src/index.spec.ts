import { validateMilitaryTime } from './index';

describe('military time validator', () => {
  it('should return false for empty string', () => {
    expect(validateMilitaryTime('')).toBe(false);
  });
});
