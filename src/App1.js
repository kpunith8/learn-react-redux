import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialSample from './components/MaterialSample';

class App1 extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MaterialSample />
      </MuiThemeProvider>
    );
  }
}

export default App1;