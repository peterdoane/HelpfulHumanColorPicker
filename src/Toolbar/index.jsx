import React, { Component } from 'react';
import './toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleRandomClick = (event) => {
      this.props.onRandomClick();
    }
  }
  render() {
    return (
      <div className="toolbarContainer">
        <button
          className="randomButton"
          onClick={this.handleRandomClick}
          >Random Color
        </button>
        {/* COLOR LIST */}
      </div>
    );
  }

}

export default Toolbar;
