import axios from 'axios';

const token = localStorage.getItem('userToken');

const instance = axios.create({
  baseURL: 'http://localhost:9000',
  headers: { Authorization: `Bearer ${token}` },
});

export const getUsersApi = () => instance.get('/users');

export const createUserApi = (user) => {
  return instance.post('/users', user);
};

export const signInUserApi = (signInData) => {
  return instance.post('/users/signIn', signInData);
};

export const deleteUserApi = (id) => {
  return instance.delete(`/users/${id}`);
};

export const getRecipesApi = () => {
  return instance.get('/recipes');
};

export const createRecipeApi = (recipe) => {
  return instance.post('/recipes', recipe);
};

export const deleteRecipeApi = (id) => {
  return instance.delete(`/recipes/${id}`);
};
