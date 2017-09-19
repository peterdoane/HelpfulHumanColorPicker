import React, { Component } from 'react';

class Swatch extends Component {

  render() {
    let onClick = () =>{this.props.onSelect(this.props.color)};
    if(this.props.onSelect == null){
      onClick = null; 
    }
    return (
      <div className="colorItem" onClick={onClick} style={{backgroundColor:this.props.color.string()}}>
        <div className="label">{this.props.color.hex()}</div>
      </div>
    );
  }

}

export default Swatch;
