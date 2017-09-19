import React from 'react';
import menubar from './menubar.css';
import logo from '../logo-symbol.png';

class Menubar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {searchText:''};

    this.handleChange = (event) =>{
        this.setState({
          searchText: event.target.value,
        })
      }
  }
  render(){
    return(
      <div className="menuWrapper">
        <img className="icon" src={logo} />
        <input
          className="search"
          placeholder="Search"
          value={this.state.searchText}
          onchange={this.handleChange} />
      </div>
    );
  }
}

export default Menubar;
