const timeConvert = (n: number) => {
  const hours = (n / 60);
  const fullHours = Math.floor(hours);
  const minutes = (hours - fullHours) * 60;
  const fullMinutes = Math.round(minutes);
  const h = fullHours > 1 ? 'hours' : 'hour';
  const m = fullMinutes > 1 ? 'minutes' : 'minute';
  return `${fullHours} ${h} ${fullMinutes} ${m}`;
};
export default timeConvert;
