import React, { Component } from 'react';
import app from './app';

class ListData extends React.Component {
 

   render() {
      return(
          <li>
            <span>{this.props.city.name}</span> 
            <span>{this.props.city.value}</span> 
          </li>
        );
   }
}



export default ListData;