import React, { Component } from 'react';
import Search from './search';
import SearchResult from './search-result';

export default class App extends Component {  
  
  state = {
    search: '',
    cities: []
  }
  
  _getResults = (data) => {
    const {cities} = this.state;
    cities.push(data)
    this.setState({cities: cities})
  }
  
  render() {
    return (
      <div className="app">
        <Search getResults={this._getResults} />
        <SearchResult cities={this.state.cities} />
      </div>
    );
  }
}

