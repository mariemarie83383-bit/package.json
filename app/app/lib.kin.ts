export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function countLeapDays(start: Date, end: Date): number {
  if (start > end) return -countLeapDays(end, start);
  let count = 0;
  for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
    if (isLeapYear(y)) {
      const leapDate = new Date(y, 1, 29);
      if (start < leapDate && leapDate < end) count++;
    }
  }
  return count;
}

const referenceDate = new Date('2018-02-08');
const referenceKin = 1;

export function getKin(date: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const gregorianDays = Math.floor((date.getTime() - referenceDate.getTime()) / msPerDay);
  const leapDays = countLeapDays(referenceDate, date);
  const effectiveDays = gregorianDays - leapDays;
  return (((referenceKin - 1 + effectiveDays) % 260 + 260) % 260) + 1;
}

export const tones
