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

  getProfile = async () => {
    const { recipes } = this.props;
    const result = await recipes.find(
      (recipe) => recipe.id === Number(this.state.recipeId)
    );
    console.log(result);
  };

  render() {
    const { recipes, loading, error } = this.props;
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }
    console.log(recipes);

    return (
      <div>
        <select>
          {/* {recipes.map((recipe) => (
            <option key={recipe.id} value={recipe.id}>
              {recipe.name}
            </option>
          ))} */}
        </select>
        <CreateRecipe />
        <DeleteRecipe recipeId={this.state.recipeId} />

        <button onClick={this.getProfile}>Profile</button>
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
