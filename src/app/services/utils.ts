export function convertTimestampToDate(ts: Date) {
  return ts.toISOString().split('T')[0];

}

export function convertTimestampToTime(ts: Date) {
  return ts.toISOString().split('T')[1].split('.')[0];
}

export function convertTimeToTimestamp(time: string) {
  let date = new Date();
  const times = time.split(':');
  date.setHours(Number(times[0]));
  date.setMinutes(Number(times[1]));
  date.setSeconds(Number(times[2]));
  return date;
}
