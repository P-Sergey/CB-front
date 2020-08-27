export const SET_USERS_LOADING = 'SET_USERS_LOADING';
export const SET_USERS_ERROR = 'SET_USERS_ERROR';
export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export const CREATE_USER = 'CREATE_USER';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const DELETE_USER = 'DELETE_USER';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setLoading = (value) => ({
  type: SET_USERS_LOADING,
  payload: value,
});

export const setError = (value) => {
  return {
    type: SET_USERS_ERROR,
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

export const signInUser = (signInData) => ({
  type: SIGN_IN_USER,
  payload: signInData,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
