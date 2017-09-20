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
import {autorun} from 'mobx';

const stores = createStores();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = (color) => {
      stores.colors.selectedColor = color;
    }

    this.handleRandom = () => {
      let color = stores.colors.allColors[Math.floor(Math.random()*stores.colors.allColors.length)];
      stores.colors.selectedColor = color;
    }
  }

  componentWillMount() {
    autorun(() => {
      if (stores.colors.selectedColor || !stores.colors.selectedColor) {
        this.forceUpdate();
      }
    });
  }

  render() {
    const selectedColor = stores.colors.selectedColor;
    let content = selectedColor == null ? <ColorList onSelect={this.handleSelect}/> : <ColorDetail/>;
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
