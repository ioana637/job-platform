export function convertTimestampToDate(ts: Date) {
  return ts.toISOString().split('T')[0];

}

export function convertTimestampToTime(ts: Date) {
  return ts.toISOString().split('T')[1].split('.')[0];
}
