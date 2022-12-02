let baseUrl = `https://api.noroff.dev/api/v1/auction/`;

export default async function apiCall(url, method, data = null) {
  let fullUrl = baseUrl + url;
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  let response = await fetch(fullUrl, options, data);
  let json = await response.json();
  return json;
}
