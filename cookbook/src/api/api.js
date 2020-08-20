import axios from 'axios';

const URL = 'http://localhost:9000/users';

export const getUsersApi = () => {
  return axios.get(URL);
};

export const createUserApi = (user) => {
  return axios.post(URL, user);
};

export const deleteUserApi = (id) => {
  return axios.delete(`${URL}/${id}`);
};
