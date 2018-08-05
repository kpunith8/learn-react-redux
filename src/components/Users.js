import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newUser) {
      this.props.fetchUsers();
    }
  }

  render() {
    const userList = this.props.users.map(user => (
      <div key={user.id}>
        <h3>Name: {user.person_name}</h3>
        <p>Age: {user.age}</p>
        <p>Gender: {user.sex}</p>
      </div>
    ));

    return (
      <div>
        <h1> Users List: </h1>
        <div  className='user-list'>
          {userList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  newUser: state.users.user
});

export default connect(mapStateToProps, { fetchUsers })(Users);