import { SET_USERS, SET_LOADING, SET_ERROR } from '../actions/users';

const initialState = {
  users: [],
  usersLoading: false,
  usersError: null,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };

    case SET_LOADING:
      return { ...state, usersLoading: action.payload };

    case SET_ERROR:
      return { ...state, usersError: action.payload };

    default:
      return state;
  }
};

export default users;
