import React from 'react';
import { connect } from 'react-redux';
import { deleteRecipe } from '../../store/actions/recipes';

class DeleteRecipe extends React.Component {
  deleteClick = () => {
    const { deleteRecipe, recipeId } = this.props;
    deleteRecipe(recipeId);
  };
  render() {
    return <button onClick={this.deleteClick}>Delete Recipe</button>;
  }
}

const mapDispatchToProps = {
  deleteRecipe,
};

const connectedDeleteRecipe = connect(null, mapDispatchToProps)(DeleteRecipe);
export default connectedDeleteRecipe;
