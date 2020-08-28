import React from 'react';
import Error from '../Error';
import CreateUser from './CreateUser';
import Loading from '../Loading';
import { connect } from 'react-redux';
import { setLoading, getUsers } from '../../store/actions/users';
import SignIn from './SignIn';
import DeleteUser from './DeleteUser';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      signUpVisible: false,
      signInVisible: false,
      signUpButton: true,
      signInButton: true,
    };
  }
  componentDidMount() {
    const { setLoading, getUsers } = this.props;
    setLoading(true);
    getUsers();
  }

  showSignUp = () => {
    this.setState({ signUpVisible: true });
    this.setState({ signInButton: false });
  };

  closeSignUp = () => {
    this.setState({ signUpVisible: false });
    this.setState({ signInButton: true });
  };

  showSignIn = () => {
    this.setState({ signInVisible: true });
    this.setState({ signUpButton: false });
  };

  closeSignIn = () => {
    this.setState({ signInVisible: false });
    this.setState({ signUpButton: true });
  };

  getStorage = () => {
    const token = localStorage.getItem('userToken');
    const tokenParts = token.split('.');
    const currentUser = JSON.parse(atob(tokenParts[1]));
    console.log(currentUser);
  };

  render() {
    const { users, usersLoading, usersError } = this.props.users;

    if (usersLoading) {
      return <Loading />;
    }

    if (usersError) {
      return <Error error={usersError} />;
    }

    const {
      signUpVisible,
      signInVisible,
      signUpButton,
      signInButton,
    } = this.state;
    return (
      <div>
        {(signUpVisible && <CreateUser closeSignUp={this.closeSignUp} />) ||
          (signUpButton && <button onClick={this.showSignUp}>Sign Up</button>)}

        {(signInVisible && <SignIn closeSignIn={this.closeSignIn} />) ||
          (signInButton && <button onClick={this.showSignIn}>Sign In</button>)}

        <div>
          <select
            onChange={(event) => this.setState({ userId: event.target.value })}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <DeleteUser userId={this.state.userId} />
        <button onClick={this.getStorage}>Storage</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.usersLoading,
  error: state.usersError,
  token: state.token,
});

const mapDispatchToProps = {
  setLoading,
  getUsers,
};

const finalUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default finalUsersList;
