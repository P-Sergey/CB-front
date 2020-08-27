import {
  SET_RECIPES,
  SET_RECIPES_LOADING,
  SET_RECIPES_ERROR,
} from '../actions/recipes';

const initialState = {
  recipes: [],
  recipesLoading: false,
  recipesError: null,
};
const recipes = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, recipes: action.payload };

    case SET_RECIPES_LOADING:
      return { ...state, recipesLoading: action.payload };

    case SET_RECIPES_ERROR:
      return { ...state, recipesError: action.payload };

    default:
      return state;
  }
};

export default recipes;
