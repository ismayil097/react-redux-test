import React, { Component } from 'react';
import ListData from './listData';



class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
      return (
         <div className="search-result">
            <ul>
              {this.props.cities.map((city, i) => <ListData city={city} key={i} />)}
            </ul>
         </div>
      );
   }
}

export default SearchResult;