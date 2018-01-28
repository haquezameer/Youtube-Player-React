import React, { Component } from 'react';

const arr = [1, 2, 4, 5, 6];
const anotherarr = [1, 3, 4, 5, 6, 7, 8];
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onVideoSearch(term);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
