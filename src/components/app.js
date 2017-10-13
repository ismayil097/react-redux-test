import React, { Component } from 'react';
import Search from './search'



export default class App extends React.Component {
  constructor(props){
    super(props);
      
    this.state = {
      
    }
    
  }
  
  render() {
    return (
      <div className="app">
        <Search />
      </div>
    );
  }
}

