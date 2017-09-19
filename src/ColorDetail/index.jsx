import React, { Component } from 'react';
import Swatch from '../ColorList/Swatch';

class ColorDetail extends Component {

  render() {
    return (
      <div>
        <div>
          <Swatch color={this.props.color}/>
        </div>
      </div>
    );
  }

}

export default ColorDetail;
