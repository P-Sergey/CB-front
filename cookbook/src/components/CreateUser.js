import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/users';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      token: '',
    };
  }

  createClick = () => {
    const { createUser } = this.props;
    createUser(this.state);
  };

  render() {
    const { name, email, password, token } = this.state;
    return (
      <div>
        <div>
          <input
            value={name}
            placeholder='name'
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <input
            value={email}
            placeholder='email'
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <input
            value={password}
            placeholder='password'
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <input
            value={token}
            placeholder='token'
            onChange={(event) => this.setState({ token: event.target.value })}
          />
        </div>
        <button onClick={this.createClick}>Create User</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createUser,
};

const finalCreateUser = connect(null, mapDispatchToProps)(CreateUser);

export default finalCreateUser;
