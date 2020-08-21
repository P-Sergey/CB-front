import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsersApi, createUserApi, deleteUserApi } from '../../api/api';
import {
  setUsers,
  setError,
  setLoading,
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
} from '../actions/users';

function* fetchUser() {
  try {
    const result = yield call(getUsersApi);
    yield put(setUsers(result.data));
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

function* fetchCreateUser(data) {
  try {
    yield call(async () => {
      await createUserApi(data.payload);
    });
    yield fetchUser();
  } catch (error) {
    yield put(setError(error));
  }
}

function* fetchDeleteUser(data) {
  try {
    yield call(async () => {
      await deleteUserApi(data.payload);
    });
    yield fetchUser();
  } catch (error) {
    yield put(setError(error));
  }
}

export function* getUsersWatcher() {
  yield takeEvery(GET_USERS, fetchUser);
  yield takeEvery(CREATE_USER, fetchCreateUser);
  yield takeEvery(DELETE_USER, fetchDeleteUser);
}
