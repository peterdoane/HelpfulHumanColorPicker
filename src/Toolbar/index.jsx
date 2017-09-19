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
    let colorOptions = this.props.groupColors.map((colorOption) => {
      return <div onClick={() => this.props.onSelectGroup(colorOption.value)}>{colorOption.name}</div>
    })
    return (
      <div className="toolbarContainer">
        <button
          className="randomButton"
          onClick={this.handleRandomClick}
          >Random Color
        </button>
        {colorOptions}
        <div onClick={() => this.props.onSelectGroup(null)}>All Colors</div>
      </div>
    );
  }

}

export default Toolbar;
