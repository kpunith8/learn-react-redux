import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import AddUser from './components/AddUser';
import { Provider } from 'react-redux';
import store from './store/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
            <AddUser />
            <hr />
            <Users />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
