import React, { Component } from 'react';
import './toolbar.css';
import {inject, observer} from 'mobx-react';

class Toolbar extends Component {
  handleRandomClick = (event) => {
    this.props.colors.selectedColor = null;
    this.props.onRandomClick();
  };

  handleAllColorsClick = () => {
    this.props.colors.selectedColor = null;
    this.props.colors.resetFilters();
  };

  handleSelectGroup = (colorGroup) => {
    this.props.colors.selectedColor = null;
    this.props.colors.filter(colorGroup);
  };

  render() {
    let colorOptions = this.props.colors.colorGroups.slice().map((colorOption) => {
      return <a className="toolbarButton" onClick={() => this.handleSelectGroup(colorOption.value)}>{colorOption.name}</a>
    })
    return (
      <div className="toolbarContainer">
        <button
          className="randomButton"
          onClick={this.handleRandomClick}
          >Random Color
        </button>
        {colorOptions}
        <a className="toolbarButton" onClick={this.handleAllColorsClick}>All Colors</a>
      </div>
    );
  }

}

export default inject('colors')(observer(Toolbar));
