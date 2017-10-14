import React, { Component } from 'react';
import Search from './search';
import SearchResult from './search-result';
import Filters from './filters';

export default class App extends Component {

  state = {
    search: '',
    cities: [],
    unit: 'C'
  }

  getResults = (data) => {
    const {cities} = this.state;
    cities.push(data);
    this.setState({cities: cities});
  }

  _getUnit = (str) => {
    const {unit} = this.state;
    this.setState({ unit: str});
  }

  render() {
    return (
      <div className="app">
        <Search getResults={this.getResults} unit={this.state.unit}/>
        <SearchResult cities={this.state.cities} />
        <Filters _getUnit={this._getUnit} />
      </div>
    );
  }
}
