import React, { Component } from 'react';
import Swatch from '../ColorList/Swatch';

class ColorDetail extends Component {

  render() {
    return (
      <div>
        <div>
          <Swatch color={this.props.color}/>
          <button onClick={() => {this.props.onSelect(null)}}>Clear</button>
        </div>
      </div>
    );
  }

}

export default ColorDetail;
