import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar/index';
import Toolbar from './Toolbar/index';
import ColorList from './ColorList/index';
import ColorGenerator from './ColorGenerator';
import ColorDetail from './ColorDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors:ColorGenerator(),
      selectedColor: null
    };
    this.handleSelect = (color) => {
      this.setState({
        selectedColor: color
      })
    }
  }
  render() {
    let content = this.state.selectedColor == null ? <ColorList onSelect={this.handleSelect} colors={this.state.colors}/> : <ColorDetail onSelect={this.handleSelect} color={this.state.selectedColor}/>;
    return (
      <div className="App">
        <Menubar />
        <div className="flexContainer">
          <Toolbar />
          {content}
        </div>
      </div>
    );
  }
}

export default App;
