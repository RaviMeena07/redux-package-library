import Axios from "axios";

export function unAuthenticatedInstance() {
  return Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
}

export function authenticatedInstance() {
  // const headers = {
  //   'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
  // };
  const axios = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: headers,
  });
  return axios
}


export const callGetAPI = async (url) => {
  const requestInstance = authenticatedInstance();
  const result = await requestInstance.get(url);
  return result;
};

export const callPostAPI = async (url, body) => {
  const requestInstance = authenticatedInstance();
  const result = await requestInstance.post(url, body);
  return result;
};

export const callGetAPIById = async (url, id) => {
  const requestInstance = authenticatedInstance();
  const result = await requestInstance.get(url, { id: id });
  return result;
};
