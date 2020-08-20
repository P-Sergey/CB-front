import React from 'react';
import Error from './Error';
import CreateUser from './CreateUser';
import Loading from './Loading';
import { connect } from 'react-redux';
import {
  setLoading,
  getUsers,
  deleteUser,
  createUser,
} from '../store/actions/users';
import DeleteUser from './DeleteUser';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };
  }
  componentDidMount() {
    const { setLoading, getUsers } = this.props;
    setLoading(true);
    getUsers();
  }

  render() {
    const { users, loading, error, deleteUser, createUser } = this.props;
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }

    debugger;
    return (
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
        <CreateUser createUser={createUser} />
        <DeleteUser userId={this.state.userId} deleteUser={deleteUser} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading,
  error: state.error,
});
const mapDispatchToProps = {
  setLoading,
  getUsers,
  deleteUser,
  createUser,
};

const finalUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default finalUsersList;
