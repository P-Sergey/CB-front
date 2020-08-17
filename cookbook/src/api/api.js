import axios from 'axios';

const getApi = (url) => {
  return axios.get(`${url}`);
};

export const getUsersApi = () => {
  const URL = 'http://localhost:9000/users';
  return getApi(URL);
};
