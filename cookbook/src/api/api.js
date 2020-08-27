import axios from 'axios';

const usersURL = 'http://localhost:9000/users';
const recipesURL = 'http://localhost:9000/recipes';

export const getUsersApi = () => {
  return axios.get(usersURL);
};

export const createUserApi = (user) => {
  return axios.post(usersURL, user);
};

export const signInUserApi = (signInData) => {
  return axios.post(`${usersURL}/signIn`, signInData);
};

export const deleteUserApi = (id) => {
  return axios.delete(`${usersURL}/${id}`);
};

export const getRecipesApi = () => {
  return axios.get(recipesURL);
};

export const createRecipeApi = (user) => {
  return axios.post(recipesURL, user);
};

export const deleteRecipeApi = (id) => {
  return axios.delete(`${recipesURL}/${id}`);
};
