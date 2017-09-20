import React, { Component } from 'react';
import Swatch from '../ColorList/Swatch';
import './colorDetail.css';
import '../ColorList/colorCards.css';
import {inject, observer} from 'mobx-react';

class ColorDetail extends Component {
  handleColorClick = (color) => {
    this.props.colors.selectedColor = color;
  };

  handleClearClick = () => {
    this.props.colors.selectedColor = null;
  };

  render() {
    const {selectedColor: color} = this.props.colors;
    let darkestColor = color.darken(0.5);
    let lightestColor = color.lighten(0.5);
    let darkerColor = color.darken(0.25);
    let lighterColor = color.lighten(0.25);
    let shades = [darkestColor, darkerColor, color, lighterColor, lightestColor];
    let swatches = shades.map((color, index)=>{
      return <Swatch key={index} color={color} onSelect={() => this.handleColorClick(color)}/>
    });
    return (
      <div className="detailContainer">
        <div className="primaryColorItem">
          <Swatch color={color}/>
        </div>

        <div className="shades">
          {swatches}
        </div>

        <button onClick={this.handleClearClick}>Clear</button>
      </div>
    );
  }

}

export default inject('colors')(observer(ColorDetail));
