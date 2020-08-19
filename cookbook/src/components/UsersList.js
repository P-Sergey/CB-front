import React from 'react';
import Error from './Error';
import Loading from './Loading';
import { connect } from 'react-redux';
import { setLoading, getUsers, deleteUser } from '../store/actions/users';

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

  deleteClick = () => {
    const { deleteUser } = this.props;
    deleteUser(this.state.userId);
  };

  render() {
    const { users, loading, error } = this.props;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error error={error} />;
    }
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
        <button onClick={this.deleteClick}>Delete User</button>
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
};

const finalUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default finalUsersList;
