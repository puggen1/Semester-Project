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
    /*nonFunctionCountDown = `D:${days} H:${hours} M:${minutes} S:${seconds}`;*/
  }

  return countdown;
}
