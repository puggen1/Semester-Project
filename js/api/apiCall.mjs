let baseUrl = `https://api.noroff.dev/api/v1/auction/`;

export default async function apiCall(url, method, data = null) {
  let fullUrl = baseUrl + url;
  let stringedData = JSON.stringify(data);

  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },

  };
  //only send data when not GET
  if(method !== "GET"){
    options.body = stringedData;
  }
  let response = await fetch(fullUrl, options);
  let json = await response.json();
  return json;
}
