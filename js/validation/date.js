export default function validDate(date) {
  let now = new Date();
  console.log(now, date);
  if (date < now) {
    return false;
  }
  return true;
}
