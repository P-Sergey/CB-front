export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const GET_RECIPES = 'GET_RECIPES';
export const SET_RECIPES = 'SET_RECIPES';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  payload: recipes,
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

export const getRecipes = () => ({
  type: GET_RECIPES,
});

export const createRecipe = (recipe) => ({
  type: CREATE_RECIPE,
  payload: recipe,
});

export const deleteRecipe = (id) => ({
  type: DELETE_RECIPE,
  payload: id,
});
