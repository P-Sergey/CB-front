import React from 'react';
import { signInUser } from '../../store/actions/';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitSignIn = () => {
    const { signInUser, closeSignIn } = this.props;
    signInUser(this.state);
    closeSignIn();
  };

  render() {
    const { email, password } = this.state;
    const { closeSignIn } = this.props;

    return (
      <div>
        <div>
          <input
            value={email}
            placeholder='email'
            onChange={(event) => this.setState({ email: event.target.value })}
          />{' '}
        </div>
        <div>
          <input
            value={password}
            placeholder='password'
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />{' '}
        </div>
        <button onClick={this.submitSignIn}>Submit</button>
        <button onClick={closeSignIn}>Close</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signInUser,
};

const connectedSignIn = connect(null, mapDispatchToProps)(SignIn);

export default connectedSignIn;
