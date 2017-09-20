import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar/index';
import Toolbar from './Toolbar/index';
import ColorList from './ColorList/index';
import ColorGenerator from './ColorGenerator';
import ColorDetail from './ColorDetail';
import {getClosestColor} from './colorComparison';
import createStores from './stores';
import {Provider} from 'mobx-react';

const stores = createStores();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null,
      //selectedGroup: null,
    };
    /*this.handleSelectGroup = (color) => {
      this.setState({
        selectedGroup: color,
      })
    }*/
    this.handleSelect = (color) => {
      this.setState({
        selectedColor: color,
      })
    }
    this.handleRandom = () => {
      let color = stores.colors.colors[Math.floor(Math.random()*stores.colors.colors.length)];
      this.setState({
        selectedColor: color,
      })
    }
  }

  render() {
    /*let colors = this.state.selectedGroup ? underscore.filter(stores.colors.colors.slice(), (color) => {
      return getClosestColor(color, stores.colors.colorGroups.map((colorOption)=>{return colorOption.value})) === this.state.selectedGroup;
    }): stores.colors.colors;*/
    let content = this.state.selectedColor == null ? <ColorList onSelect={this.handleSelect}/> : <ColorDetail onSelect={this.handleSelect} color={this.state.selectedColor}/>;
    return (
      <Provider {...stores}>
        <div className="App">
          <Menubar />
          <div className="flexContainer">
            <Toolbar onRandomClick={this.handleRandom}/>
            {content}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
