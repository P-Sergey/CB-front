import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../store/actions/';

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      ingredients: '',
      cooking: '',
    };
  }

  createClick = () => {
    const { createRecipe } = this.props;
    createRecipe(this.state);
  };

  render() {
    const { name, description, ingredients, cooking } = this.state;
    return (
      <div>
        <div>
          <input
            value={name}
            placeholder='name'
            onChange={(event) => this.setState({ name: event.target.value })}
          />
        </div>
        <div>
          <input
            value={description}
            placeholder='description'
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />{' '}
        </div>
        <div>
          <input
            value={ingredients}
            placeholder='ingredients'
            onChange={(event) =>
              this.setState({ ingredients: event.target.value })
            }
          />{' '}
        </div>
        <div>
          <input
            value={cooking}
            placeholder='cooking'
            onChange={(event) => this.setState({ cooking: event.target.value })}
          />
        </div>
        <button onClick={this.createClick}>Create Recipe</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createRecipe,
};

const connectedCreateRecipe = connect(null, mapDispatchToProps)(CreateRecipe);
export default connectedCreateRecipe;
