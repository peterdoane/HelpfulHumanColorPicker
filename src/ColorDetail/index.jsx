import React, { Component } from 'react';
import Swatch from '../ColorList/Swatch';
import './colorDetail.css';
import '../ColorList/colorCards.css';


class ColorDetail extends Component {

  render() {
    return (
      <div className="detailContainer">
        <div className="primaryColorItem">
          <Swatch color={this.props.color}/>
          <button onClick={() => {this.props.onSelect(null)}}>Clear</button>
        </div>
      </div>
    );
  }

}

export default ColorDetail;
