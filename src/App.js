import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar/index';
import Toolbar from './Toolbar/index';
import ColorList from './ColorList/index';
import ColorGenerator from './ColorGenerator';
import ColorDetail from './ColorDetail';
import Color from 'color';
import underscore from 'underscore';
import {getClosestColor} from './colorComparison';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors:ColorGenerator(),
      selectedColor: null,
      groupColors: this.generateColorGroups(),
      selectedGroup: null,
    };
    this.handleSelectGroup = (color) => {
      this.setState({
        selectedGroup: color,
      })
    }
    this.handleSelect = (color) => {
      this.setState({
        selectedColor: color,
      })
    }
    this.handleRandom = () => {
      let color = this.state.colors[Math.floor(Math.random()*this.state.colors.length)];
      this.setState({
        selectedColor: color,
      })
    }
  }
  generateColorGroups(){
    let array = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    return array.map((colorName) => {
      return {
        name: colorName,
        value: Color(colorName),
      }
    })
  }
  render() {
    let colors = this.state.selectedGroup ? underscore.filter(this.state.colors, (color) => {
      return getClosestColor(color, this.state.groupColors.map((colorOption)=>{return colorOption.value})) === this.state.selectedGroup;
    }): this.state.colors;
    let content = this.state.selectedColor == null ? <ColorList onSelect={this.handleSelect} colors={colors}/> : <ColorDetail onSelect={this.handleSelect} color={this.state.selectedColor}/>;
    return (
      <div className="App">
        <Menubar />
        <div className="flexContainer">
          <Toolbar onRandomClick={this.handleRandom} groupColors={this.state.groupColors} onSelectGroup={this.handleSelectGroup}/>
          {content}
        </div>
      </div>
    );
  }
}

export default App;
