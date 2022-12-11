export default function back() {
  let params = new URLSearchParams(window.location.search);
  let from = params.get("from");
  if (!from) {
    window.location.href = "index.html";
  } else {
    window.location.href = from;
  }
}
