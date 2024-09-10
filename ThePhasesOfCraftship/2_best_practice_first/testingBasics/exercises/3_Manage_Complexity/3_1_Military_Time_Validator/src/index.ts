export function validateMilitaryTime(timeRange: string): boolean {
  const [startTime, endTime] = timeRange.split(' - ');
  return isValidTime(startTime) && isValidTime(endTime);
}

function isValidTime(time: string): boolean {
  const [hour, minute] = time.split(':');
  return isValidHour(hour) && isValidMinute(minute);
}

function isValidHour(hour: string): boolean {
  const hourNumber = parseInt(hour, 10);
  return hourNumber >= 0 && hourNumber <= 23;
}

function isValidMinute(minute: string): boolean {
  const minuteNumber = parseInt(minute, 10);
  return minuteNumber >= 0 && minuteNumber <= 59;
}
