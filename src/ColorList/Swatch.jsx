import React, { Component } from 'react';

class Swatch extends Component {

  render() {
    return (
      <div style={{backgroundColor:this.props.color.string()}}>
        <div className="label">{this.props.color.string()}</div>
      </div>
    );
  }

}

export default Swatch;
