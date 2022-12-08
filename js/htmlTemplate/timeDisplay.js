export default function timeDisplayer(endTime) {
  let timeNow = new Date();
  
  let endDate = new Date(endTime);
  let timeLeft = endDate - timeNow;
  let nonFunctionCountDown = "";
  if (timeLeft < 0) {
    nonFunctionCountDown = "Finished";
  } else {
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    nonFunctionCountDown = `D:${days} H:${hours} M:${minutes} S:${seconds}`;
  }

  return nonFunctionCountDown;
}
