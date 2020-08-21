import { call, put, takeEvery } from 'redux-saga/effects';
import { getRecipesApi, createRecipeApi, deleteRecipeApi } from '../../api/api';
import {
  setRecipes,
  setError,
  setLoading,
  GET_RECIPES,
  CREATE_RECIPE,
  DELETE_RECIPE,
} from '../actions/recipes';

function* fetchRecipe() {
  try {
    const result = yield call(getRecipesApi);
    yield put(setRecipes(result.data));
  } catch (error) {
    yield put(setError(error));
  }
  yield put(setLoading(false));
}

function* fetchCreateRecipe(data) {
  try {
    yield call(async () => {
      await createRecipeApi(data.payload);
    });
    yield fetchRecipe();
  } catch (error) {
    yield put(setError(error));
  }
}

function* fetchDeleteRecipe(data) {
  try {
    yield call(async () => {
      await deleteRecipeApi(data.payload);
    });
    yield fetchRecipe();
  } catch (error) {
    yield put(setError(error));
  }
}

export function* getRecipesWatcher() {
  yield takeEvery(GET_RECIPES, fetchRecipe);
  yield takeEvery(CREATE_RECIPE, fetchCreateRecipe);
  yield takeEvery(DELETE_RECIPE, fetchDeleteRecipe);
}
