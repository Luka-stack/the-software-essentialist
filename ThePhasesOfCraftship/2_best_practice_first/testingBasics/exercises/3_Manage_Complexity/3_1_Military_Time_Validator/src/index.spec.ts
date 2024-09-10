import { validateMilitaryTime } from './index';

describe('military time validator', () => {
  it('should return false for empty string', () => {
    expect(validateMilitaryTime('')).toBe(false);
  });

  it('should return true for valid military time', () => {
    expect(validateMilitaryTime('00:00 - 02:23')).toBe(true);
  });

  it('should return false for invalid military time', () => {
    expect(validateMilitaryTime('24:00 - 02:23')).toBe(false);
  });

  it('should return false when end time is invalid', () => {
    expect(validateMilitaryTime('00:00 - 02:60')).toBe(false);
  });
});
