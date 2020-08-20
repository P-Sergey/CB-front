export const SET_LOADING = 'SET_LOADING';
export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export const SET_ERROR = 'SET_ERROR';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setError = (value) => {
  return {
    type: SET_ERROR,
    payload: value,
  };
};

export const getUsers = () => ({
  type: GET_USERS,
});

export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
