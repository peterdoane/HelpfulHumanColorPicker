import React, { Component } from 'react';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleRandomClick = (event) => {
      console.info('RandomClicked')
    }
  }
  render() {
    return (
      <div>
        <button className="randomButton" onClick={this.handleRandomClick}>Random Color</button>
        {/* COLOR LIST */}
      </div>
    );
  }

}

export default Toolbar;
