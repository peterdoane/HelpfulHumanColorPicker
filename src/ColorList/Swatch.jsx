import React, { Component } from 'react';

class Swatch extends Component {

  render() {
    return (
      <div onClick={() =>{this.props.onSelect(this.props.color)}} style={{backgroundColor:this.props.color.string()}}>
        <div className="label">{this.props.color.string()}</div>
      </div>
    );
  }

}

export default Swatch;
