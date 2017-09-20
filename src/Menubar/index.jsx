import React from 'react';
import menubar from './menubar.css';
import logo from '../logo-symbol.png';
import {inject} from 'mobx-react';

class Menubar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {searchText:''};
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
    })
    this.props.colors.search(event.target.value);
  }

  handleLogoClick = () => {
    this.props.colors.selectedColor = null;
  };

  render(){
    return(
      <div className="menuWrapper">
        <a onClick={this.handleLogoClick}><img className="icon" src={logo} /></a>
        <input
          className="search"
          placeholder="Search"
          value={this.state.searchText}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default inject('colors')(Menubar);
