import React from 'react';
import Error from '../Error';
import CreateUser from './CreateUser';
import Loading from '../Loading';
import { connect } from 'react-redux';
import { setLoading, getUsers } from '../../store/actions/users';
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

  getProfile = async () => {
    const { users } = this.props;
    const result = await users.find(
      (user) => user.id === Number(this.state.userId)
    );
    console.log(result);
  };

  render() {
    const { users, loading, error } = this.props;
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }
    console.log(users);

    return (
      <div>
        <select
          onChange={(event) => this.setState({ userId: event.target.value })}
        >
          {/* {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))} */}
        </select>
        <CreateUser />
        <DeleteUser userId={this.state.userId} />

        <button onClick={this.getProfile}>Profile</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.usersLoading,
  error: state.usersError,
});

const mapDispatchToProps = {
  setLoading,
  getUsers,
};

const finalUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default finalUsersList;
