import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import AddUser from './components/AddUser';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddUser />
          <hr />
          <Users />
        </div>
      </Provider>
    );
  }
}

export default App;
