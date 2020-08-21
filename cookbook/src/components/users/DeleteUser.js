import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../store/actions/users';

class DeleteUser extends React.Component {
  deleteClick = () => {
    const { deleteUser, userId } = this.props;
    deleteUser(userId);
  };
  render() {
    return <button onClick={this.deleteClick}>Delete User</button>;
  }
}

const mapDispatchToProps = {
  deleteUser,
};

const connectedDeleteUser = connect(null, mapDispatchToProps)(DeleteUser);
export default connectedDeleteUser;
