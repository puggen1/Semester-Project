let baseUrl = `https://api.noroff.dev/api/v1/auction/`;
/**
 *
 * @param {url} url sub url of the api call
 * @param {string} method api method ex: GET POST PUT
 * @param {object} data data to be sent if any
 * @param {object} token the api auth token when needed
 * @description a global api call that can send all needed methods and data
 * @returns response from api to be used in html
 */
export default async function apiCall(url, method, data = null, token = null) {
  let fullUrl = baseUrl + url;
  let stringedData = JSON.stringify(data);

  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  //only send data when not GET
  if (method !== "GET") {
    options.body = stringedData;
  }
  if (token !== null) {
    options.headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
  }
  try {
    let response = await fetch(fullUrl, options).then(async (response) => {
      if (response.ok) {
        return response.json();
      }else if(response.status === 429){
        let readyError = await response.json();
        console.log(readyError);
        throw new Error(readyError.status);
      }
       else {
        let readyError = await response.json();
        throw new Error(
          readyError.message ? readyError.message : readyError.errors[0].message
        );
      }
    });
    return response;
  } catch (error) {
    return error;
  }
}
