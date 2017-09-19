import React, { Component } from 'react';
import Swatch from '../ColorList/Swatch';
import './colorDetail.css';
import '../ColorList/colorCards.css';

class ColorDetail extends Component {
  render() {
    let darkestColor = this.props.color.darken(0.5);
    let lightestColor = this.props.color.lighten(0.5);
    let darkerColor = this.props.color.darken(0.25);
    let lighterColor = this.props.color.lighten(0.25);
    let shades = [darkestColor, darkerColor, this.props.color, lighterColor, lightestColor];
    let swatches = shades.map((color)=>{
      return <Swatch color={color}/>
    });
    return (
      <div className="detailContainer">
        <div className="primaryColorItem">
          <Swatch color={this.props.color}/>
          <button onClick={() => {this.props.onSelect(null)}}>Clear</button>
        </div>
        <div className="shades">
          {swatches}
        </div>
      </div>
    );
  }

}

export default ColorDetail;
