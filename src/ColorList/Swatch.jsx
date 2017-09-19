import React, { Component } from 'react';

class Swatch extends Component {

  render() {
    return (
      <div className="colorItem" onClick={() =>{this.props.onSelect(this.props.color)}} style={{backgroundColor:this.props.color.string()}}>
        <div className="label">{this.props.color.hex()}</div>
      </div>
    );
  }

}

export default Swatch;
