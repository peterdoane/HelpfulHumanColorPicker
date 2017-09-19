import React, {Component} from 'react';
import Swatch from './Swatch';
import Navigation from './Navigation';
import './ContentDisplay.css';
import './colorCards.css';

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
    let pageEnd = pageStart + itemsPerPage -1;
    let pageCount = Math.ceil(this.props.colors.length/itemsPerPage);
    const colorChoices = this.props.colors.slice(pageStart, pageEnd).map((color) => {
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

export default ColorList;
