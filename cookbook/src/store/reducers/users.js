import {
  SET_USERS,
  SET_USERS_LOADING,
  SET_USERS_ERROR,
  SET_TOKEN,
} from '../actions/users';

const initialState = {
  users: [],
  currentUser: null,
  usersLoading: false,
  usersError: null,
  token: null,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };

    case SET_USERS_LOADING:
      return { ...state, usersLoading: action.payload };

    case SET_USERS_ERROR:
      return { ...state, usersError: action.payload };

    case SET_TOKEN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default users;
