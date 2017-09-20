import React, {Component} from 'react';
import Swatch from './Swatch';
import Navigation from './Navigation';
import './ContentDisplay.css';
import './colorCards.css';
import {inject, observer} from 'mobx-react';

class ColorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      itemsPerPage: 12
    };
  }
  render() {
    let itemsPerPage = this.state.itemsPerPage;
    let pageStart = itemsPerPage * this.state.page;
    let pageEnd = pageStart + itemsPerPage;
    let pageCount = Math.ceil(this.props.colors.filteredColors.length/itemsPerPage);
    const colorChoices = this.props.colors.filteredColors.slice(pageStart, pageEnd).map((color) => {
      return <Swatch onSelect={this.props.onSelect} color={color}/>
    })
    return (
      <div className="colorListContainer">
        <div className="colorListGrid">
          {colorChoices}
        </div>
        <Navigation
          page={this.state.page}
          changeToPageNumber={(pageNumber) => this.setState({page: pageNumber})}
          pageCount={pageCount}
        />
      </div>
    );
  }
}

export default inject('colors')(observer(ColorList));
