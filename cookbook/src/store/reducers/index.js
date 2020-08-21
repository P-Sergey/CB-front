import { combineReducers } from 'redux';
import users from './users';
import recipes from './recipes';

export default combineReducers({ users, recipes });
