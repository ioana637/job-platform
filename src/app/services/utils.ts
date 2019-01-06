export function convertTimestampToDate(ts: Date) {
  const day = Number(ts.getDate()) > 9 ? ts.getDate() : `0${ts.getDate()}`;
  return `${ts.getFullYear()}-${ts.getMonth() + 1}-${day}`;

}

export function convertTimestampToTime(ts: Date) {
  const minutes = Number(ts.getMinutes()) > 9 ? ts.getMinutes() : `0${ts.getMinutes()}`;
  const hours = Number(ts.getHours()) > 9 ? ts.getHours() : `0${ts.getHours()}`;
  return `${hours}:${minutes}:00`;
}

export function convertTimeToTimestamp(time: string) {
  let date = new Date();
  const times = time.split(':');
  date.setHours(Number(times[0]));
  date.setMinutes(Number(times[1]));
  date.setSeconds(Number(times[2]));
  return date;
}

export function convertDateToString(date: Date): string {
  const months = Number(date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : `0${(date.getMonth() + 1)}`;
  const days = Number(date.getDate()) > 9 ? (date.getDate()) : `0${(date.getDate())}`;
  return `${date.getFullYear()}-${months}-${days}`;
}
