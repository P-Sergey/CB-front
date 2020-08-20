import React from 'react';

class DeleteUser extends React.Component {
  deleteClick = () => {
    const { deleteUser, userId } = this.props;
    deleteUser(userId);
  };
  render() {
    return <button onClick={this.deleteClick}>Delete User</button>;
  }
}

export default DeleteUser;
