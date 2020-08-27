import React from 'react';
import Error from '../Error';
import CreateRecipe from './CreateRecipe';
import Loading from '../Loading';
import { connect } from 'react-redux';
import { setLoading, getRecipes } from '../../store/actions/recipes';
import DeleteRecipe from './DeleteRecipe';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId: '',
    };
  }
  componentDidMount() {
    const { setLoading, getRecipes } = this.props;
    setLoading(true);
    getRecipes();
  }

  render() {
    const { recipes, recipesLoading, recipesError } = this.props.recipes;
    if (recipesLoading) {
      return <Loading />;
    }

    if (recipesError) {
      return <Error error={recipesError} />;
    }
    const getProfile = () => {
      const result = recipes.find(
        (recipe) => recipe.id === Number(this.state.recipeId)
      );
      console.log(result);
    };

    return (
      <div>
        <select
          onChange={(event) => this.setState({ recipeId: event.target.value })}
        >
          {recipes.map((recipe) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.name}
            </option>
          ))}
        </select>
        <CreateRecipe />
        <DeleteRecipe recipeId={this.state.recipeId} />

        <button onClick={getProfile}>Profile</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  loading: state.recipesLoading,
  error: state.recipesError,
});

const mapDispatchToProps = {
  setLoading,
  getRecipes,
};

const finalRecipesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
export default finalRecipesList;
