import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      age: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender
    };

    this.props.addUser(user);

    this.setState({
      name: '',
      age: '',
      gender: ''
    })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2> Add User </h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Person Name:</label>
            <br />
            <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label> Age</label>
            <br />
            <input type="number" name="age" value={this.state.age} onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label> Gender:</label>
            <br />
            <input type="text" name="gender" value={this.state.gender} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit"> Add User </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addUser })(AddUser);