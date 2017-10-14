import React, { Component } from 'react';
import Search from './search';
import SearchResult from './search-result';

export default class App extends React.Component {  
  render() {
    return (
      <div className="app">
        <Search />
        <SearchResult />
      </div>
    );
  }
}

