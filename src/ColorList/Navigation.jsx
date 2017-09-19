import React, {Component} from 'react';
import './navigation.css';

class Navigation extends Component {
//return an array of list items 1 item for each pagenumber
  render() {
    let pages = [];
    for(let i = 0; i< this.props.pageCount; i++){
      pages.push(<div onClick={() => this.props.changeToPageNumber(i)}>{i + 1}</div>)
    }
    return (
      <div className='navigationContainer'>
        {pages}
        {/* {this.props.page > 0 && <button onClick={() => this.props.changeToPageNumber(this.props.page - 1)}>Previous</button>}
        {this.props.page + 1 < this.props.pageCount && <button onClick={() => this.props.changeToPageNumber(this.props.page + 1)}>Next</button>} */}
      </div>
    );
  }
}

export default Navigation;
