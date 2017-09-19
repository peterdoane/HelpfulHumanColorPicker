import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar/index';
import Toolbar from './Toolbar/index';
import ColorList from './ColorList/index';
import ColorGenerator from './ColorGenerator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors:ColorGenerator(),
    };
  }
  render() {
    return (
      <div className="App">
        <Menubar />
        <div className="flexContainer">
          <Toolbar />
          <ColorList colors={this.state.colors}/>
        </div>
      </div>
    );
  }
}

export default App;
