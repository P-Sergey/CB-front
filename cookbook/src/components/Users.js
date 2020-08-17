import React from 'react';
import Error from './Error';
import Loading from './Loading';
import { connect } from 'react-redux';

import { getUsers, setLoading } from '../store/actions';

class Users extends React.Component {
  componentDidMount() {
    const { setLoading, getUsers } = this.props;

    setLoading(true);
    getUsers();
  }
  render() {
    const { users, loading, error } = this.props;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error error={error} />;
    }
    return (
      <ul className='usersList'>
        {users.map((user) => (
          <li key={user.id} className='usersList__user'>
            {user.title}
          </li>
        ))}
      </ul>
    );
  }
}
/* const mapStateToProps = (state) => ({
  users: getSettedUsers(state),
  loading: getSettedLoading(state),
  error: getSettedError(state),
}); */
const mapDispatchToProps = {
  getUsers,
  setLoading,
};

const finalUsersList = connect(null, mapDispatchToProps)(Users);
export default finalUsersList;
