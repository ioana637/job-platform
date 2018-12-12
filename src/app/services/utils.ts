export function convertTimestampToDate(ts: Date) {
  const day = Number(ts.getDate()) > 9 ? ts.getDate() : `0${ts.getDate()}`;
  return `${ts.getFullYear()}-${ts.getMonth() + 1}-${day}`;

}

export function convertTimestampToTime(ts: Date) {
  const minutes = Number(ts.getMinutes()) > 9 ? ts.getMinutes() : `0${ts.getMinutes()}`;
  return `${ts.getHours()}:${minutes}:00`;
}

export function convertTimeToTimestamp(time: string) {
  let date = new Date();
  const times = time.split(':');
  date.setHours(Number(times[0]));
  date.setMinutes(Number(times[1]));
  date.setSeconds(Number(times[2]));
  return date;
}
