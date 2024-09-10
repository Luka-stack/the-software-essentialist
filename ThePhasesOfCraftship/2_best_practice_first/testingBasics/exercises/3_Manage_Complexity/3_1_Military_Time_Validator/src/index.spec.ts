import { validateMilitaryTime } from './index';

describe('military time validator', () => {
  it('should return false for empty string', () => {
    expect(validateMilitaryTime('')).toBe(false);
  });

  it('should return true for valid military time', () => {
    expect(validateMilitaryTime('00:00 - 02:23')).toBe(true);
  });
});
