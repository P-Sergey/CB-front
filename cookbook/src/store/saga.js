import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_USERS, setUsers, setError, setLoading } from './actions';
import { getUsersApi } from '../api/api';

function* fetchUsers() {
  try {
    const result = yield call(getUsersApi);
    if (result.data || !Array.isArray(result.data)) {
      throw new Error('Wrong API-data');
    }
    yield put(setUsers(result.data));
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

export function* getUsersWatcher() {
  yield takeEvery(GET_USERS, fetchUsers);
}
