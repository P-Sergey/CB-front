import { SET_RECIPES, SET_LOADING, SET_ERROR } from '../actions/recipes';

const initialState = {
  recipes: [],
  recipesLoading: false,
  recipesError: null,
};
const recipes = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, recipes: action.payload };

    case SET_LOADING:
      return { ...state, recipesLoading: action.payload };

    case SET_ERROR:
      return { ...state, recipesError: action.payload };

    default:
      return state;
  }
};

export default recipes;
