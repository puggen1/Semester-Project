/**
 *
 * @param {date} endTime the end date of an listing
 * @description this function will display the time left of an listing by showing the days, hours or minutes left based on if the listing is ending in days, hours or minutes
 * @returns countdown in form of a string that displays the time left
 */
export default function timeDisplayer(endTime) {
  let timeNow = new Date();

  let endDate = new Date(endTime);
  let timeLeft = endDate - timeNow;
  let countdown = "";
  let amount = "";
  if (timeLeft < 0) {
    countdown = "Finished";
  } else {
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    if (days > 0) {
      amount = days > 1 ? "days" : "day";
      countdown = `${days} ${amount} left`;
    } else if (hours > 0) {
      amount = hours > 1 ? "hours" : "hour";

      countdown = `${hours} ${amount} left`;
    } else if (minutes > 0) {
      amount = minutes > 1 ? "minutes" : "minute";

      countdown = `${minutes} ${amount} left`;
    }
  }

  return countdown;
}
