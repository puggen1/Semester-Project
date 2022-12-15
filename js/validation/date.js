/**
 *
 * @param {Date object} date a date to check if it is before or after now
 * @returns boolean
 */
export default function validDate(date) {
  let now = new Date();
  console.log(now, date);
  if (date < now) {
    return false;
  }
  return true;
}
