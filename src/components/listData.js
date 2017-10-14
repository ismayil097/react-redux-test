import React, { Component } from 'react';
import app from './app';

class ListData extends React.Component {
  constructor(props) {
    super(props);
    console.log("wedewdewd" + this.props.list_data )
    this.state = {
      data : this.props.list_data 
    }
  }

   render() {
      this.state.data.map(function(key,val){
        return(
          <li>
            <span>key</span> 
            <span>val</span> 
          </li>
        );
      });
   }
}



export default ListData;