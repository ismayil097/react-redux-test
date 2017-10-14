import React, { Component } from 'react';
import ListData from './listData';
import Search from './search';



class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
      return (
         <div className="search-result">
            <ul>
              <ListData data = {1,2,3} />
            </ul>
         </div>
      );
   }
}

export default SearchResult;