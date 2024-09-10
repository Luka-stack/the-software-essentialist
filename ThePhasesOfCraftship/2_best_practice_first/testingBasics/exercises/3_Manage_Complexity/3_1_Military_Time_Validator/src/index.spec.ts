import { validateMilitaryTime } from './index';

describe('military time validator', () => {
  it('should return false for empty string', () => {
    expect(validateMilitaryTime('')).toBe(false);
  });

  it.each(['00:00 - 02:23', '00:00 - 23:59', '00:00 - 00:00'])(
    'should return true for valid military time %s',
    (timeRange) => {
      expect(validateMilitaryTime(timeRange)).toBe(true);
    }
  );

  //   it('should return true for valid military time', () => {
  //     expect(validateMilitaryTime('00:00 - 02:23')).toBe(true);
  //   });

  it('should return false for invalid military time', () => {
    expect(validateMilitaryTime('24:00 - 02:23')).toBe(false);
  });

  it('should return false when end time is invalid', () => {
    expect(validateMilitaryTime('00:00 - 02:60')).toBe(false);
  });

  it('should return false when start time is invalid', () => {
    expect(validateMilitaryTime('25:00 - 02:23')).toBe(false);
  });

  it('should return false when time range is missformed', () => {
    expect(validateMilitaryTime('00:00 - ')).toBe(false);
  });

  it('should throw an error when argument is not a string', () => {
    expect(() => validateMilitaryTime(null as any)).toThrow(TypeError);
  });
});
