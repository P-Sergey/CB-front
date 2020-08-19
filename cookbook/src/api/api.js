import axios from 'axios';

const URL = 'http://localhost:9000/users';

export const getUsersApi = () => {
  return axios.get(URL);
};

export const createUserApi = (data) => {
  return axios.post(URL, data);
};

export const deleteUserApi = (id) => {
  return axios.delete(`${URL}/${id}`);
};
