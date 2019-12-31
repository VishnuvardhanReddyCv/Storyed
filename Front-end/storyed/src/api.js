import { getToken } from "./Utils/TokenService";;

export const baseUrl = 'http://localhost:8080/api';


export function postData(url = "", data = {},params = {}, optionalHeaders = {}) {
  url = baseUrl + url ;
 
  return  fetch(url, {
    method: "POST",
    headers: createHttpHeaders(optionalHeaders),
    body: JSON.stringify(data)
  });
}


export function getData(url = "", params = {}, optionalHeaders = {}) {

  url = baseUrl + url ;
 
  return  fetch(url, {
    method: "GET",
    headers: new Headers(createHttpHeaders(optionalHeaders))
  });
}


function createHttpHeaders(optionalHeaders) {
  debugger
  let headers = {};
  headers["Content-Type"] = "application/json";
  if(getToken())
    headers['Authorization'] = 'Bearer ' + getToken();
  optionalHeaders = optionalHeaders?optionalHeaders:{};
  console.log({...headers,...optionalHeaders});
  return {...headers,...optionalHeaders};
}
