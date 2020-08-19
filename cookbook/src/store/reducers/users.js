import { SET_USERS, SET_LOADING, SET_ERROR } from '../actions/users';

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default users;
