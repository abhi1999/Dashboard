export const BASE_URL = "http://192.168.104.125:5001";
//export const BASE_URL = "http://localhost:5050";

export const FETCH_PARAMS =
{
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'omit', // include, same-origin, *omit
  crossDomain: true,
  headers: {
      "Accept": "application/json",
      "Accept-Encoding": "gzip",
      "Authorization": "Bearer #Postman#4",
      "Content-Type": "application/x-www-form-urlencoded"
  },
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, cors, *same-origin
  referrer: 'no-referrer', // *client, no-referrer
};
